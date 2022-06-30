/**
 * Removes redundant whitespace from the given string.
 * @param str String with redudant whitespace.
 * @returns String with removed whitespace
 */
export const removeWhiteSpace = (str: string): string => {
  return str.replace(/\s+/g, ' ').trim();
};
