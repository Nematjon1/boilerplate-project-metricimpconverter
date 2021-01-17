/*
*
*
*       Complete the handler logic below
*       
*       
*/

const units = ['gal', 'mi', "l", 'km','lbs','kg','GAL','L','MI','KM','LBS','KG'];

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let unit = this.getUnit(input);

    if(unit !== "invalid unit") {
        result = input.replace(unit, "");
        if(result === "") {
            result = 1;
        }
        
        if(typeof result === "string" && result.includes("/")) {
            result = result.split("/");

            if(result[1] === "") {
                return "invalid number";
            }
            result = +result[0] / +result[1];
        }
    
        return +result;
    } else {
        result = input.split(/[a-zA-z]+/g)[0];
        
        if(result === "") {
            result = 1;
        }
        
        if(typeof result === "string" && result.includes("/")) {
            result = result.split("/");

            if(result[1] === "") {
                return "invalid number";
            }
            result = +result[0] / +result[1];
        }
        
        return +result;
    }
  };
  
  this.getUnit = function(input) {
    let result;
    let unit = input.split(/\d+/g);

    unit.forEach((i, idx) => {
        units.forEach(item => {
            if(item === i) {
                result = i;
            }
        })
    });
    
    if(!result) {
        return "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch(initUnit.toLowerCase()) {
        case "mi":
            result = "km";
            break;
        case "km":
            result = "mi";
            break;
        case "l":
            result = "gal";
            break;
        case "lbs":
            result = "kg";
            break;
        case "kg":
            result = "lbs";
            break;
        case "gal":
            result = "L";
            break;
    }
    return result === "L" ? "L" : result.toLowerCase();
  };

  this.spellOutUnit = function(unit) {
    let result;

    switch(unit.toLowerCase()) {
        case "km":
            result = "kilometers";
            break;
        case "lbs":
            result = "pounds";
            break;
        case "l":
            result = "liters";
            break;
        case "gal":
            result = "gallons";
            break;
        case "kg":
            result = "kilograms";
            break;
        case "mi":
            result = "miles";
            break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch(initUnit.toLowerCase()) {
        case "km":
            result = initNum / miToKm;
            break;
        case "lbs":
            result = initNum * lbsToKg;
            break;
        case "kg":
            result = initNum / lbsToKg;
            break;
        case "l":
            result = initNum / galToL;
            break;
        case "gal":
            result = initNum * galToL;
            break;
        case "mi":
            result = initNum * miToKm;
            break;
        default:
            result = initUnit;
            break;
    }
    
    return +result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    // '3.1 miles converts to 4.98895 kilometers'
    result = `${initNum} ${this.spellOutUnit(initUnit === "L" ? "L" : initUnit.toLowerCase())} converts to ${this.convert(initNum, initUnit)} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
