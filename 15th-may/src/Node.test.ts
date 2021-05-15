import Node from "./Node";

it("exists", () => {
  expect(Node).toBeDefined();
});

it("populates correctly", () => {
  const input = "111";
  const output = ["1,1,1", "1,11", "11,1"].sort();
  const head = new Node("1");
  head.addCharacter("1");
  head.addCharacter("1");
  expect(head.traverse().sort()).toEqual(output);
});

it("populates correctly", () => {
  const input = "12312";
  const output = [
    "1,2,3,1,2",
    "1,2,3,12",
    "1,23,1,2",
    "1,23,12",
    "12,3,1,2",
    "12,3,12",
  ].sort();
  const head = new Node("1");
  for (let char of input.slice(1)) {
    head.addCharacter(char);
  }
  expect(head.traverse().sort()).toEqual(output);
});
