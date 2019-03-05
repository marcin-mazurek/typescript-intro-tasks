import { getAdultUsersModel } from './getAdultUsersModel';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import testData from './testData';

describe('getAdultUsersModel', () => {
  it('selects adult users from the users collection', () => {
    const adultUsers = getAdultUsersModel(testData.users);

    expect(adultUsers).to.have.length(3);

    expect(adultUsers[0].name).to.equal('John Doe');
    expect(adultUsers[1].name).to.equal('Sienna Guillory');
    expect(adultUsers[2].name).to.equal('Dustin Reeves');
  });

  it('maps the data to the expected model', () => {
    const adultUsers = getAdultUsersModel(testData.users);

    expect(adultUsers).to.deep.equal([
      {
        name: "John Doe",
        age: 61
      },
      {
        name: "Sienna Guillory",
        age: 39
      },
      {
        name: "Dustin Reeves",
        age: 40
      }
    ])
  });
});