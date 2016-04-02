import yourModuleName from '../lib';
import assert from 'power-assert';

describe('your-module-name', () => {
  it('spec1', () => {
    assert(yourModuleName() === 'bar');
  });
});
