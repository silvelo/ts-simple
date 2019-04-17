
import { isEmpty, NAO } from '../src/is-empty';

describe('Test isEmpty funtion', () => {
    const object = { a: 1, b: 2 };
    const noObject = [];
    const emptyObject = {};

    test('Should return true', () => {
        const result = isEmpty(emptyObject);
        expect(result).toBeTruthy();
    });

    test('Should return false', () => {
        const result = isEmpty(object);
        expect(result).toBeFalsy();
    });

    test('Should throw exception', () => {
        expect(() => isEmpty(noObject))
            .toThrowError(NAO);
    });

    test('Should return true, with strict mode false', () => {
        const result = isEmpty(noObject, false);
        expect(result).toBeTruthy();
    });

});
