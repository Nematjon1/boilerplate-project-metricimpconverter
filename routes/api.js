/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
        let input = req.query.input;
        let initNum = convertHandler.getNum(input);
        let initUnit = convertHandler.getUnit(input);

        if(initNum === "invalid number" && initUnit === "invalid unit") {
            res.send('invalid number and unit');
        } else if(initNum === "invalid number") {
            res.send(initNum);
        } else if(initUnit === "invalid unit") {
            res.send(initUnit);
        } else {
            let returnNum = convertHandler.convert(initNum, initUnit);
            let returnUnit = convertHandler.getReturnUnit(initUnit);
            let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

            console.log("Res: ", input, initNum, initUnit, returnNum, returnUnit, toString);
                    //res.json
            res.json({
                initNum,
                initUnit: initUnit === "l" ? "L" : initUnit === "L" ?"L" : initUnit.toLowerCase(),
                returnNum,
                returnUnit,
                string: toString
            });
        }
      
    });
    
};
