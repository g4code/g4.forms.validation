;(function() {

    var filter = function(){};

    filter.prototype = {

        trim: function(field)
        {
            return field.val($.trim(field.val()));
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