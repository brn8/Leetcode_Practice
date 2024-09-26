/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let arr=[];
	let finalAnswer="";
	for(let i=0; i<s.length; i++){
		for(let j=s.length-1; j>i; j--){
			if(s[i]==s[j]){
				arr.push(s.slice(i,j+1));
			}
		}
	}
	for(let i=0; i<arr.length; i++){
		let temp=true;
		for(let j=0; j<Math.trunc(arr[i].length/2); j++){
			if(arr[i][j]!=arr[i][(arr[i].length-1)-j]){
				temp=false;
				break;
			}
		}
		if(temp){
			if(finalAnswer.length<=arr[i].length){
				finalAnswer=arr[i];
			}
		}
		
	}
	return finalAnswer==""?s[0]:finalAnswer;
};
console.log(longestPalindrome("acss"));