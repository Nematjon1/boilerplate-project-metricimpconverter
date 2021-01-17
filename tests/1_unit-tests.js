/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = "0.5L";
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = "1/2L";
      assert.equal(convertHandler.getNum(input), 0.5);
      
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = "4.5/1.5L";
      assert.equal(convertHandler.getNum(input), 3);
      
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = "4.5//1.5L";
      assert.equal(convertHandler.getNum(input), "invalid number");
      
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele, idx) {
      let inp = ele;
      assert.equal(convertHandler.getUnit(inp), input[idx]);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let inp = "min";
      assert.equal(convertHandler.getUnit(inp), "invalid unit");
      
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      let input = "gal";
      assert.equal(convertHandler.spellOutUnit(input), "gallons")
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [1, 'l'];
      let expected = 0.26417;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [1, 'mi'];
      let expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [1, 'km'];
      let expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [1, 'lbs'];
      let expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [1, 'kg'];
      let expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});
