import * as THREE from "three";

const BOARD = {
  width: 5.2,
  height: 3.4,
};

/**
 * Posición determinística "desordenada" para la foto de un proyecto,
 * a partir de su índice en la lista. Determinística = el mismo proyecto
 * siempre cae en el mismo lugar entre recargas, y un proyecto nuevo en
 * data/projects.js simplemente ocupa el siguiente lugar en el arco,
 * sin que haya que acomodar nada a mano.
 */
function scatterPosition(id, index, total) {
  const angleSpread = Math.PI * 0.95;
  const startAngle = Math.PI * 1.02;
  const angle = startAngle + (angleSpread * index) / Math.max(total - 1, 1);
  const radius = 1.5 + ((id * 37) % 10) / 100;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius * 0.5 - 0.15,
    rotation: (((id * 53) % 14) - 7) * (Math.PI / 180),
  };
}

function makeNoteTexture(text, bg) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#1a1a1a";
  ctx.font = "bold 28px monospace";
  ctx.textAlign = "center";
  const lines = text.split("\n");
  const lineHeight = 34;
  const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeCenterPhotoTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#141416";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#3a3a3f";
  ctx.beginPath();
  ctx.ellipse(128, 150, 68, 88, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#EDEAE3";
  ctx.font = "bold 20px monospace";
  ctx.textAlign = "center";
  ctx.fillText("SUJETO", 128, 268);
  ctx.fillText("IAN OLIVA", 128, 294);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addPushpin(group, x, y, z, color = 0x999999) {
  const pin = new THREE.Mesh(
    new THREE.SphereGeometry(0.025, 8, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.6 })
  );
  pin.position.set(x, y, z + 0.02);
  group.add(pin);
}

function addThread(group, from, to, color = 0xb00020) {
  const geometry = new THREE.BufferGeometry().setFromPoints([from, to]);
  const material = new THREE.LineBasicMaterial({ color });
  group.add(new THREE.Line(geometry, material));
}

/**
 * Arma el tablero de detective completo: fondo de corcho, marco, foto
 * central ("vos"), notas fijas (About/Contacto) y una foto pinchada por
 * cada proyecto en data/projects.js — todas conectadas al centro con hilo
 * rojo. Agregar un proyecto nuevo hace que aparezca acá automáticamente.
 */
export function createDetectiveBoard({ projects, fixedPins }) {
  const board = new THREE.Group();
  board.name = "detective-board";

  const corkMat = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 1 });
  const cork = new THREE.Mesh(new THREE.PlaneGeometry(BOARD.width, BOARD.height), corkMat);
  board.add(cork);

  const frameMat = new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.8 });
  const frameThickness = 0.12;
  const frameDepth = 0.08;
  const frameGeoH = new THREE.BoxGeometry(BOARD.width + frameThickness * 2, frameThickness, frameDepth);
  const frameGeoV = new THREE.BoxGeometry(frameThickness, BOARD.height, frameDepth);

  const top = new THREE.Mesh(frameGeoH, frameMat);
  top.position.set(0, BOARD.height / 2 + frameThickness / 2, 0.02);
  board.add(top);

  const bottom = new THREE.Mesh(frameGeoH, frameMat);
  bottom.position.set(0, -(BOARD.height / 2 + frameThickness / 2), 0.02);
  board.add(bottom);

  const left = new THREE.Mesh(frameGeoV, frameMat);
  left.position.set(-(BOARD.width / 2 + frameThickness / 2), 0, 0.02);
  board.add(left);

  const right = new THREE.Mesh(frameGeoV, frameMat);
  right.position.set(BOARD.width / 2 + frameThickness / 2, 0, 0.02);
  board.add(right);

  const Z_PIN = 0.03;
  const centerPos = new THREE.Vector3(0, 0.15, Z_PIN);

  const centerPhoto = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.94),
    new THREE.MeshStandardMaterial({ map: makeCenterPhotoTexture(), roughness: 0.9 })
  );
  centerPhoto.position.copy(centerPos);
  centerPhoto.name = "board-pin-center";
  board.add(centerPhoto);
  addPushpin(board, centerPos.x, centerPos.y + 0.42, Z_PIN, 0xb00020);

  fixedPins.forEach((pin) => {
    const note = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 0.62),
      new THREE.MeshStandardMaterial({ map: makeNoteTexture(pin.label, pin.color), roughness: 0.95 })
    );
    note.position.set(pin.x, pin.y, Z_PIN);
    note.rotation.z = ((pin.x > 0 ? -1 : 1) * 4 * Math.PI) / 180;
    note.name = `board-pin-${pin.id}`;
    board.add(note);
    addPushpin(board, pin.x, pin.y + 0.29, Z_PIN);
    addThread(board, centerPos, new THREE.Vector3(pin.x, pin.y, Z_PIN));
  });

  const textureLoader = new THREE.TextureLoader();
  projects.forEach((project, index) => {
    const { x, y, rotation } = scatterPosition(project.id, index, projects.length);
    const aspect = (project.width || 800) / (project.height || 450);
    const photoHeight = 0.46;
    const photoWidth = photoHeight * aspect;

    const texture = textureLoader.load("/" + project.img);
    texture.colorSpace = THREE.SRGBColorSpace;

    const photo = new THREE.Mesh(
      new THREE.PlaneGeometry(photoWidth, photoHeight),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9 })
    );
    photo.position.set(x, y, Z_PIN);
    photo.rotation.z = rotation;
    photo.name = `board-pin-project-${project.id}`;
    board.add(photo);
    addPushpin(board, x, y + photoHeight / 2 - 0.03, Z_PIN);
    addThread(board, centerPos, new THREE.Vector3(x, y, Z_PIN));
  });

  return board;
}
