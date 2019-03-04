export default class User {
  children: User[] = [];

  constructor(public name: string, public age: number) {
  }

  generateSummary(): string {
    return `${this.name} is ${this.age} years old`;
  }

  addChild(child: User) {
    this.children.push(child);
  }
}