// JavaScript Document

exports.findMinMax = function(arr) {
  if(Array.isArray(arr)) {
	  var sortArr = arr.sort(function(a, b){return a-b});
	  n = arr.length - 1;
	  var arrMinMax = [];
	  if (sortArr[0] === sortArr[n]) {
		 arrMinMax.push(sortArr[0]) 
	  }else{
	  arrMinMax.push(sortArr[0], sortArr[n])
	  }
  }else {
	 return 'Invalid Argument'; 
	  
  }
   return arrMinMax;
};
