// testing code goes here

'use strict'

var chai = require('chai');
//var assert = chai.assert;
var should = chai.should;
var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    //assert(myApp.computeAverage(1,2,3) == 2);
	should(myApp.computeAverage(1,2,3) == 2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    //assert(myApp.computeAverage(3, 7, 5) == 5);
	should(myApp.computeAverage(3,7,5) == 5);
  })
  it("should return 120 as factorial for 5", function() {
    //assert(myApp.computeFactorial(5) == 120);
	should(myApp.computeFactorial(5) == 120);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    //assert(myApp.convertTempCtoF(40) == 104);
	 should(myApp.convertTempCtoF(40) == 104);
  })
  it("should return 60 for Celcius value 140", function() {
    //assert(myApp.convertTempCtoF(60) == 140);
	should(myApp.convertTempCtoF(60) == 140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    //assert(myApp.convertTempFtoC(140) == 60);
	should(myApp.convertTempFtoC(140) == 60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    //assert(myApp.convertTempFtoC(104) == 40);
	should(myApp.convertTempFtoC(104) == 40);
  })
})
