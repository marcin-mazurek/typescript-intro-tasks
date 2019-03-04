export interface BaseUser {
  name: string;
  age: number;
}

export default class User implements BaseUser {
  children: BaseUser[] = [];

  constructor(public name: string, public age: number) {
  }

  generateSummary(): string {
    return `${this.name} is ${this.age} years old`;
  }

  addChild(child: BaseUser) {
    this.children.push(child);
  }
}