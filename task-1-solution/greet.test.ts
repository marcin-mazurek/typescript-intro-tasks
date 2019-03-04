import greet from './greet';
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
});
