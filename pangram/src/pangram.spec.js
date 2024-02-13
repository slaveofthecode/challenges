import PANGRAM from './consts/index.js';
import { isPangram } from './pangram.js';

describe('Pangram()', () => {

  test.each(PANGRAM)('sentence: %s', ({ sentence, expected }) => { 
    expect(isPangram(sentence)).toBe(expected);
  });

});
