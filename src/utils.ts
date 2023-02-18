import { camelCase, flow, upperFirst } from "lodash";

/**
 * Returns a pascal case string
 * @param {string} value
 * @returns {string}
 */
export const pascalCase = (value: string): string => {
  if (typeof value !== "string") {
    return value;
  }
  return flow(camelCase, upperFirst)(value);
};

/**
 * Handles input's validation
 * @param input - user input
 * @returns Error message to display
 */
export const isEmpty = (input: string, message: string): string | null => {
  if (!input || input === "") {
    return message;
  }
  return null;
};
