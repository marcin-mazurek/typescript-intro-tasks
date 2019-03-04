import User, { BaseUser } from './User';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('User', () => {
  it('allows to set the name and age through constructor', () => {
    const user = new User('Grażyna', 52);
    expect(user.name).to.equal('Grażyna');
    expect(user.age).to.equal(52);
  });

  it('generates a user summary', () => {
    const user = new User('Grażyna', 52);
    expect(user.generateSummary()).to.equal('Grażyna is 52 years old');
  });

  it('allows to assign children', () => {
    const user = new User('Janusz', 61);
    const child1 = new User('Brajanek', 12);
    const child2 = new User('Dżessika', 12);

    user.addChild(child1);
    expect(user.children).to.deep.equal([child1]);

    user.addChild(child2);
    expect(user.children).to.deep.equal([child1, child2]);
  });
});