import Decoder from "./index"

it("decodes 111 to 'aaa','ak','ka'", () => {
  expect((new Decoder("111")).result().sort()).toEqual(["aaa","ak","ka"].sort())
})