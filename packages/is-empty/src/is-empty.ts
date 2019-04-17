/**
 * Returns boolean in case if object is empty or not
 * 
 * @param object - Object input
 * @param strict - Validate if object is an object, default true
 * @returns True if object is empty
 * @throws NAO Exception - If input is not and object
 */
export const isEmpty = (object: object, strict = true) => {
  if (!strict || Object.prototype.toString.call(object) === '[object Object]') {
    return Object.keys(object).length === 0;
  }

  throw new NAO('Not an Object');
};

export class NAO extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NAO';
  }
}
