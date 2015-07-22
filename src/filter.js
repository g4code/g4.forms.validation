;(function() {

    var filter = function(){};

    filter.prototype = {

        allowOnlyNumbers: function(event)
        {
            event.target.value = event.target.value.replace(/[^\dA-Z]/g, '');
        },

        formatCardNumber:  function (event) {
            event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        },

        trim: function(field)
        {
            return field.val($.trim(field.val()));
        },

        removeSpaces: function(value)
        {
            return value.replace(/\s+/g, '')
        }

    };

    if (typeof define != 'undefined' && define.hasOwnProperty('amd') && define.amd) { // RequireJS AMD
        define(function(){
            return filter;
        });
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.G4 = typeof G4 != "undefined" ? G4 : {};
        window.G4.form = typeof G4.form != "undefined" ? G4.form : {};
        window.G4.form.filter =  filter;
    };

}).call(this);