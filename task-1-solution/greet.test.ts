import { greet, add, isEven } from './greet';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('greet function', () => {
  it('returns hello world', () => {
    const result = greet('world');
    expect(result).to.equal('Hello world!');
  });

  // it('does not compile when incorrect type provided', () => {
  //   const result = greet(3);
  //   expect(result).to.equal('Hello 3!');
  // });

  it('sums numbers', () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(2.5, 50)).to.equal(52.5);
    expect(add(-2, -5)).to.equal(-7);
  });

  it('checks if number is even', () => {
    expect(isEven(2)).to.be.true;
    expect(isEven(0)).to.be.true;
    expect(isEven(3)).to.be.false;
    expect(isEven(-1)).to.be.false;
    expect(isEven(0.4)).to.be.false;
  });
});
