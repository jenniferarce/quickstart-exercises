"use strict";
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.passwordMinLength = function (control) {
        var minLength = 5;
        if (control.value != "") {
            if (control.value.length < minLength) {
                return { passwordMinLength: { minLength: minLength } };
            }
        }
        return null;
    };
    PasswordValidators.equalPassword = function (group) {
        var newpass = group.get("newpassword").value;
        var renewpass = group.get('renewpassword').value;
        if (newpass == '' || renewpass == '') {
            return null;
        }
        // if (newpass != renewpass) {
        //   return { mismatchedPasswords: true };
        //  return {equalPassword : true};
        //} //---> error con el npm start / por el true
        //    return null;
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=passwordValidators.js.map