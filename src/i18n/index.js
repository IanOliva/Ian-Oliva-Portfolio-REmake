import es from "./es";
import en from "./en";

// To add more languages, register them here
export const dictionaries = { es, en };

export const SUPPORTED_LANGUAGES = Object.keys(dictionaries);
export const DEFAULT_LANGUAGE = "es";

const lookup = (dictionary, key) =>
  key.split(".").reduce((node, part) => node?.[part], dictionary);

// If the key is missing in the selected language, use the default language,
// and if it's also missing there, return the key itself so the gap is visible.
export const translate = (language, key) =>
  lookup(dictionaries[language], key) ??
  lookup(dictionaries[DEFAULT_LANGUAGE], key) ??
  key;