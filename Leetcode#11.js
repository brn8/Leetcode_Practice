/**
 * @param {number[]} height
 * @return {number}
 */
 //using pointer
var maxArea = function(height) {
	let left=0;
	let right=height.length-1;
	let mostWater=0;
	while(left<right){
		let waterInBetween= right-left;
		let calc=Math.min(height[left],height[right])*waterInBetween;
		mostWater=Math.max(mostWater,calc);
		if(height[left]<height[right]){
			left++;
		}
		else{
			right--;
		}
	}
	return mostWater 
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

 //nested loop takes longer time 
// let mostWater=[];
// 	for(let i=0; i<height.length; i++){
// 		let max=0;
// 		for(let j=i+1; j<height.length; j++){
// 			let calc=0;
// 			if(height[i]<height[j]){
// 				calc=(j-i)*height[i];
// 			}
// 			else{
// 				calc=(j-i)*height[j]
// 			}
// 			if(calc>max){
// 				max=calc
// 			}
// 		}
// 		mostWater.push(max);
// 	}
// 	return Math.max(...mostWater);
