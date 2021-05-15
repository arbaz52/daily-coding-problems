import Node from "./Node";

export default class Decoder {
  constructor(public input: string) {}

  result(): string[] {
    if (this.input.length === 0) return [];

    const head = new Node(this.input[0]);
    for (let char of this.input.slice(1)) {
      head.addCharacter(char);
    }
    const traversed = head.traverse();

    return traversed
      .map((decoded) =>
        decoded
          .split(",")
          .map((charCode) =>
            String.fromCharCode(parseInt(charCode) + ("a".charCodeAt(0) - 1))
          ).join("")
      )
  }
}
