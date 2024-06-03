import { add } from '../../src/utils/math.js';

describe('Math utility functions', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).to.equal(5);
  });
});