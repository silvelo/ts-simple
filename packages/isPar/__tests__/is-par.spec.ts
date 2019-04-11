
import { isPar } from '../src/is-par';

describe('Test isPar funtion', () => {
  test('Should return true', () => {
    const par = isPar(2);
    expect(par).toBeTruthy();
  });

  test('Should return false', () => {
    const noPar = isPar(3);
    expect(noPar).toBeFalsy();
  })


})