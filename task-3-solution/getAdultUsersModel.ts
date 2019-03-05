export enum Sex {
  Male = 'male', Female = 'female'
};

export interface UserDTO {
  id: number,
  name: string,
  age: number
  sex: Sex
};

export interface UserModel {
  name: string,
  age: number
};

const createModel = (user: UserDTO): UserModel => ({
  name: user.name,
  age: user.age
});

export const getAdultUsersModel = (users: UserDTO[]): UserModel[] => 
  users.filter(user => user.age > 18)
    .map(createModel);