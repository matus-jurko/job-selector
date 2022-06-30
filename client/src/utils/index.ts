/**
 * Removes redundant whitespace from the given string.
 * @param str String with redudant whitespace.
 * @returns String with removed whitespace
 */
export const removeWhiteSpace = (str: string): string => {
  return str.replace(/\s+/g, ' ').trim();
};

/**
 * Helper function that creates the endpoint URL.
 * @param route The route to fetch data from.
 * @returns The endpoint URL.
 */
export const api = (route: string): string => {
  route = route.replace(/^\//, '');

  return process.env.NODE_ENV === 'production'
    ? `${process.env.API_DOMAIN}/${route} `
    : `http://localhost:8080/${route}`;
};
