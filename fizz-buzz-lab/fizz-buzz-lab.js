// JavaScript Document



exports.fizzBuzz = function (N) {
	if(Number.isInteger(N)){
		if(N % 3 === 0 && N % 5 === 0) {
			return "FizzBuzz";
		}
		else if(N % 3 === 0) {
			return "Fizz";
		}
		else if (N % 5 === 0) {
			return "Buzz";
		}
		else {
			return N;
		}
  
	}else {
		
	return 'Invalid Argument';	
	
	}
};

