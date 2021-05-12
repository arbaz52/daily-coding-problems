/**
* Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
*/
//O(n^2)
export const todaysProblem_Safe_Unoptimized = (arr: number[]): number => {
	// O(n)
	for(let i = 1; i < Infinity; i++){
		let exists = false;
		// O(n)
		for(let _index = 0; _index < arr.length; _index++){
			const item = arr[_index];
			if(item === i){
				exists = true
				break
			}
		}	
		if(!exists)
		       return i	
	}
	return -1
}

/**
[+3,+4,-1,+1]
[--,--,-1,--]
[--,--,-1,-1]
[--,--,-1,-1]
[-1,--,-1,-1]
find the first entry with postive value, its index+1 should be the first positive integer missing
=> index: 1 => index + 1 => 1 + 1 => 2

[+1,+2,+0]
[-1,--,--]
[-1,-2,--]
[-1,-2,--]
=> index: 2 => index + 1 => 2 + 1 => 3


[+2,+1,+0,+1,-2,-4]
[+2,+1,+1]
[--,-1,--]
[-1,-1,--]
=> index: 2 => index + 1 => 2 + 1 => 3
*/
export const todaysProblem_Optimized = (arr: number[]): number => {
	const length = arr.length
	const nonNegativeArr = arr.filter(item => item >= 0)
	for(let i in nonNegativeArr){
		const item = Math.abs(nonNegativeArr[i])
		if(item <= length && nonNegativeArr[item-1] > 0)
			nonNegativeArr[item - 1] *= -1
	}
	for(let i in nonNegativeArr){
		const item = nonNegativeArr[i]
		if(item >= 0)
			return parseInt(i)+1
	}
	return length+1 
}

export const todaysProblem = todaysProblem_Optimized
