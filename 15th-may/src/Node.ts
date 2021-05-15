export default class Node {
  public children: Node[] = [];
  constructor(public value: string) {}
  addCharacter(char: string) {
    if (this.children.length > 0) {
      this.children.forEach((child) => child.addCharacter(char));
    } else {
      const lastChar = this.value.split(",").slice(-1);
      if (parseInt(lastChar + char) <= 26) {
        this.children.push(new Node(this.value + char));
      }
      this.children.push(new Node(this.value + "," + char));
    }
  }
  traverse(): string[] {
    if (this.children.length === 0) {
      return [this.value];
    }
    return this.children
      .map((child) => child.traverse())
      .reduce((pv, cv) => [...pv, ...cv], []);
  }
}
