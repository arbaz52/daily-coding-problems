import {todaysProblem} from "./index"

describe("today's problem", () => {
	it("should exist", () => {
		expect(todaysProblem).toBeDefined()
	})
	it("should return 2", () => {
		expect(todaysProblem([3, 4, -1, 1])).toBe(2)  
	})
	it("should return 3", () => {
		expect(todaysProblem([1, 2, 0])).toBe(3)
	})
	it("should return 1", () => {
		expect(todaysProblem([2, 3, 7, 6, 8, -1, -10, 15])).toBe(1)
	})
	it("should return 4", () => {
		expect(todaysProblem([2, 3, -7, 6, 8, 1, -10, 15])).toBe(4)
	})
	it("should return 2", () => {
		expect(todaysProblem([1, 1, 0, -1, -2])).toBe(2)
	})

})
