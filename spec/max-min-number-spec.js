// JavaScript Document
var jasmine = require("jasmine")
var app = require("../max-min-number-lab/max-min-number-lab.js");
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(app.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(app.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(app.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
	  it('should return 0 for []', function () {
        expect(app.findMinMax([])).toEqual(0);
      });
      it('should return [4] for [4]', function () {
        expect(app.findMinMax([4])).toEqual([4]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(app.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });
  
  describe("Return invalid argument when a non-array argument is pass", function() {

      it("should return `Invalid Argument` for 'string'", function() {
        expect(app.findMinMax('string')).toEqual('Invalid Argument');
      });

      it("should return `Invalid Argument` for Integer 78", function() {
        expect(app.findMinMax(78)).toEqual('Invalid Argument');
      });
      it("should return `Invalid Argument` for a float 10.5", function() {
        expect(app.findMinMax(10.5)).toEqual('Invalid Argument');
      });
      it("should return `Invalid Argument` for a negative integer -1", function() {
        expect(app.findMinMax(-1)).toEqual('Invalid Argument');
      });
    });

  });

})();
