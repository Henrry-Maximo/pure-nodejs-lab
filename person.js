class Person {
  constructor(name) {
    this.name = name;
  }

  myNameIs() {
    return `Olá, ${this.name}!`
  }
}

module.exports = {
  Person,
}