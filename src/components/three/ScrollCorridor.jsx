import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createDetectiveBoard } from "./detectiveBoard";
import { projects } from "@/data/projects";
import { boardFixedPins } from "@/data/corridorBoard";

gsap.registerPlugin(ScrollTrigger);

// Parámetros del pasillo — todo lo ajustable vive acá arriba para no tener
// que salir a buscar números mágicos en medio del código en etapas futuras.
const CORRIDOR = {
  width: 4,
  height: 3,
  length: 22, // pasillo corto: solo lleva hasta el tablero, no es el recorrido final
  lightSpacing: 6,
  alarmLightEvery: 4, // 1 de cada N luces es roja (alarma) en vez de verde
};

const COLORS = {
  wall: 0x18181c,
  floor: 0x101012,
  consoleGreen: 0x3adb84,
  alarmRed: 0xb00020,
};

/**
 * Pasillo 3D cuya cámara avanza en línea recta a medida que se scrollea.
 * Etapa 1 del reemplazo de scroll: valida la sensación de movimiento antes
 * de sumar puertas/salas (etapa 2) y contenido real (etapa 3).
 *
 * El canvas se posiciona fixed y ocupa toda la pantalla; el alto real de
 * scroll lo define el elemento que se le pase en `scrollHeightRef` (o el
 * body completo si no se pasa nada).
 */
const ScrollCorridor = ({ scrollHeightRef } = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // ---- Geometría del pasillo (piso, techo, dos paredes) ----
    const wallMat = new THREE.MeshStandardMaterial({
      color: COLORS.wall,
      roughness: 0.9,
      metalness: 0.1,
    });
    const floorMat = new THREE.MeshStandardMaterial({
      color: COLORS.floor,
      roughness: 0.95,
    });

    const { width: W, height: H, length: L } = CORRIDOR;

    const floorGeo = new THREE.PlaneGeometry(W, L);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -H / 2, -L / 2);
    scene.add(floor);

    const ceilingGeo = new THREE.PlaneGeometry(W, L);
    const ceiling = new THREE.Mesh(ceilingGeo, wallMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, H / 2, -L / 2);
    scene.add(ceiling);

    const sideWallGeo = new THREE.PlaneGeometry(L, H);
    const wallLeft = new THREE.Mesh(sideWallGeo, wallMat);
    wallLeft.rotation.y = Math.PI / 2;
    wallLeft.position.set(-W / 2, 0, -L / 2);
    scene.add(wallLeft);

    const wallRight = new THREE.Mesh(sideWallGeo, wallMat);
    wallRight.rotation.y = -Math.PI / 2;
    wallRight.position.set(W / 2, 0, -L / 2);
    scene.add(wallRight);

    // ---- Marco de puerta a la entrada (detalle simple, puramente visual) ----
    const doorFrameMat = new THREE.MeshStandardMaterial({ color: 0x1c1c20, roughness: 0.7 });
    const doorFrameGeo = new THREE.BoxGeometry(0.12, H, 0.15);
    const doorLeft = new THREE.Mesh(doorFrameGeo, doorFrameMat);
    doorLeft.position.set(-W / 2 + 0.06, 0, -0.3);
    scene.add(doorLeft);
    const doorRight = new THREE.Mesh(doorFrameGeo, doorFrameMat);
    doorRight.position.set(W / 2 - 0.06, 0, -0.3);
    scene.add(doorRight);
    const doorTopGeo = new THREE.BoxGeometry(W, 0.12, 0.15);
    const doorTop = new THREE.Mesh(doorTopGeo, doorFrameMat);
    doorTop.position.set(0, H / 2 - 0.06, -0.3);
    scene.add(doorTop);

    // ---- Tablero de detective al final del pasillo ----
    const board = createDetectiveBoard({ projects, fixedPins: boardFixedPins });
    board.position.set(0, 0.1, -(L - 0.15));
    scene.add(board);

    // Luz dedicada iluminando el tablero (independiente del espaciado de
    // las luces del pasillo, para que se vea bien sin importar el largo)
    const boardLight = new THREE.PointLight(0xfff2d0, 30, 6, 2);
    boardLight.position.set(0, 0.6, -(L - 1.6));
    scene.add(boardLight);

    // ---- Iluminación: ambiental + hemisférica de relleno + luces de techo ----
    // Nota: three.js (desde r155) usa unidades de luz físicamente correctas —
    // los mismos números de intensidad que "se veían bien" en versiones viejas
    // hoy resultan casi invisibles. Estos valores están recalibrados para eso.
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // Relleno suave con tinte de color: cielo frío arriba, "sangre" tenue abajo
    scene.add(new THREE.HemisphereLight(0x1a1a2e, 0x200505, 0.9));

    const numLights = Math.floor(L / CORRIDOR.lightSpacing);
    const pointLights = [];
    for (let i = 0; i < numLights; i++) {
      const isAlarm = i % CORRIDOR.alarmLightEvery === CORRIDOR.alarmLightEvery - 1;
      const light = new THREE.PointLight(
        isAlarm ? COLORS.alarmRed : COLORS.consoleGreen,
        isAlarm ? 45 : 22,
        14,
        2
      );
      light.position.set(0, H / 2 - 0.15, -i * CORRIDOR.lightSpacing - 4);
      scene.add(light);
      pointLights.push(light);
    }

    // ---- Resize ----
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ---- Loop de render ----
    let rafId;
    const animate = () => {
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // ---- Cámara controlada por scroll ----
    const triggerEl = scrollHeightRef?.current || document.body;
    const scrollTween = gsap.to(camera.position, {
      z: -(L - 2.4),
      ease: "none",
      scrollTrigger: {
        trigger: triggerEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();

      floorGeo.dispose();
      ceilingGeo.dispose();
      sideWallGeo.dispose();
      wallMat.dispose();
      floorMat.dispose();
      doorFrameGeo.dispose();
      doorTopGeo.dispose();
      doorFrameMat.dispose();
      pointLights.forEach((l) => scene.remove(l));
      scene.remove(boardLight);

      board.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollHeightRef]);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default ScrollCorridor;
