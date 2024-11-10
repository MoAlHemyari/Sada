import "server-only";

// We enumerate all dictionaries here for better linting and support
// We also get the default import for cleaner types
const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.ar();
