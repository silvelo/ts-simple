export const deepKeys = (object: IObject) => {
  let keys: string[] = [];
  Object.keys(object).map((key: string) => {
    if (typeof object[key] === 'object') {
      const subkeys = deepKeys(object[key]);
      keys = keys.concat(subkeys.map((subkey: string) => `${key}.${subkey}`));
    } else {
      keys.push(key);
    }
  });

  return keys;
};

interface IObject {
  [key: string]: any;
}
