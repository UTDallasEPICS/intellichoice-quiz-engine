import * as _ from "lodash";

const errorMessages: {[index:string] : string} = {

};
function getErrorMessage (key: string) {
    if (errorMessages[key])
      return errorMessages[key]
    return null;
}
var camelCaseToWords = function(str: string){
  if (!str) return str;
  let words = str.match(/^[a-z]+|[A-Z][a-z]*/g);
  if (!words) return str;
  return words.map(function(x){
      return x[0].toUpperCase() + x.substr(1).toLowerCase();
  }).join(' ');
};
function cleanErrorMessage(s: string, key: string) {
  var regex = new RegExp(key, 'g');
  return s.replace(regex, camelCaseToWords(key));
}
//for Camo validation
export function getErrorForm(_errors: any) {
  var errors : {[index:string] : string}= { };
  for (var i in _errors) {
    let field = (_.isArray(_errors[i].field)) ? _errors[i].field[0] : _errors[i].field;
    errors[field.replace(/\./g,"-")] = getErrorMessage(field) || cleanErrorMessage(_errors[i].messages[0].replace(/"/g, "").replace(/'/g, ""), field) || "Invalid value";
  }
  return errors;
}
export function getJoiErrorForm(_errors: any) {
  var errors : {[index:string] : string}= { };
  for (var i in _errors) {
    errors[_errors[i].path.replace(/\./g,"-")] = getErrorMessage(_errors[i].path) || cleanErrorMessage(_errors[i].message.replace(/"/g, "").replace(/'/g, ""), _errors[i].path) || "Invalid value";
  }
  return errors;
}
export function sendMongooseValidationError(error: any) {
  var errors: any = { };
  for (var key in error.errors) {
    if (error.errors.hasOwnProperty(key)) {
      var e = error.errors[key];
      var k = key.replace(/\./g, "-");
      if (e.reason && e.reason.message)
      {
        errors[k] = e.reason.message;
      }
      else if (e.message) {
        errors[k] = e.message;
      }
      else {
        errors[k] = "Invalid value"
      }
    }
  }
  return errors;
}
