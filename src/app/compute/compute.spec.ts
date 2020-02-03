import {compute} from './compute';

describe('compute', () => {
  it('should return 0 if negative number is passed', () => {
    const result = compute(-1);
    expect(result).toBe(1);
  });
});
