;(function() {

    var error = function(){};

    error.prototype = {

        addError: function(field, message){
            $(field).parent().find('.js_form_error').remove();
            $(field).before('<span class="js_form_error error_message">'+message+'</span>' );
        },

        removeError: function(field){
            field.parent().find('.js_form_error').remove();
        }

    };

    if (typeof define != 'undefined' && define.hasOwnProperty('amd') && define.amd) { // RequireJS AMD
        define(function(){
            return error;
        });
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.G4 = typeof G4 != "undefined" ? G4 : {};
        window.G4.form = typeof G4.form != "undefined" ? G4.form : {};
        window.G4.form.error =  error;
    };

}).call(this);