/**
 * Returns boolean in case if object is empty or not
 *
 * @param value - String value to convert
 * @param strict - On strict mode if value is not true return null else return false.
 * @returns boolean value or null is value is not boolean
 */
export const isBoolean = (value: string, strict = true) => {
  if (value.toLocaleLowerCase() === "true") {
    return true;
  }

  if (strict) {
    if (value.toLocaleLowerCase() === "false") {
      return false;
    } else {
      return null;
    }
  } else {
    return false;
  }
};
