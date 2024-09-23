/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let starting=intervals[0][0];
	let ending=intervals[0][1];
	let finalArr=[];
	for(let i=1; i<intervals.length;i++){
		if(intervals[i][0]<=ending){
			if(intervals[i][0]<=starting){
				starting=intervals[i][0];
			}
			if(intervals[i][1]>=ending){
				ending=intervals[i][1];
			}
		}
		else{
			finalArr.push([starting,ending]);
			starting=intervals[i][0];
			ending=intervals[i][1];
		}
			

	}
	finalArr.push([starting, ending]);
	return finalArr
};
console.log(merge([[1,4],[0,0]]));