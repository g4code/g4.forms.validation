;(function() {

    var validator = function(){};

    validator.prototype = {

        empty: function(value)
        {
            return $.trim(value).length <= 0;
        },

        minLength: function(value, minLength){
            return minLength > value.length;
        },

        maxLength: function(value, maxLength)
        {
            return value.length > maxLength;
        },

        befeoreDate: function(year, month, day)
        {
            var day = day || 1;
            var expirationDate = new Date(year, month, day);
            var currentDate = new Date();
            return expirationDate.getTime() <= currentDate.getTime();
        },

        validateEmail: function(value)
        {
            var emailRegEx =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            return !emailRegEx.test(value);
        },

        underage: function(value)
        {
            var birthDate = new Date(value);
            return new Date() < new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate());
        },

        isNotChecked: function(field)
        {
            return !field.is(':checked')
        },

        isDateInFuture: function(value)
        {
            var birthDate = new Date(value);
            return new Date() < new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        },

        isNotEqual: function(firtsValue, secondValude)
        {
            return firtsValue !== secondValude;
        },

        username: function(value)
        {
            var regularExpression = /[\~\!\@\#\$\%\&\*\(\)\{\}\[\]\\\|\/\?\>\<]/;
            return value.search(regularExpression) != -1 ||
                /^(_)\1/.test(value) ||
                /^(-)\1/.test(value);
        }

    }

    if (typeof define != 'undefined' && define.hasOwnProperty('amd') && define.amd) { // RequireJS AMD
        define(function(){
            return validator;
        });
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.G4 = typeof G4 != "undefined" ? G4 : {};
        window.G4.form = typeof G4.form != "undefined" ? G4.form : {};
        window.G4.form.validator =  validator;
    };

}).call(this);