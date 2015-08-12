;(function() {

    var validationEvents = function(formInstance){
        this.form = formInstance;
        this.fields = formInstance.fields;
        $.each(this.fields, $.proxy(this.setEventsForFields, this));
    };

    validationEvents.prototype = {

        fields:[],

        setEventsForFields: function(fieldName, rules)
        {
            if(fieldName != undefined && rules != undefined){
                var fieldEvents = rules[0].validationEvents;
                if(fieldEvents != undefined){
                    $.each(fieldEvents, $.proxy(this.setSingleEvent, this, fieldName));
                }
            }
        },

        setSingleEvent: function(fieldName, key, fieldEvent)
        {
            var fieldSelector = this.form.formSelector + ' [name=\''+fieldName+'\']';
            $('body').off(fieldEvent, fieldSelector, $.proxy(this.validateByEvent, this)).on(fieldEvent, fieldSelector, $.proxy(this.validateByEvent, this));
        },

        validateByEvent: function(event)
        {
            var fieldName =  $(event.currentTarget).attr('name');
            if (this.fields[fieldName] !== undefined) {
                this.form.validateOneField(0, {name:fieldName, value:$(event.currentTarget).val()});
            }
        }
    };

    if (typeof define != 'undefined' && define.hasOwnProperty('amd') && define.amd) { // RequireJS AMD
        define(function(){
            return validationEvents;
        });
    } else if (typeof window != 'undefined') { // Fall back to attaching to window
        window.G4 = typeof G4 != "undefined" ? G4 : {};
        window.G4.form = typeof G4.form != "undefined" ? G4.form : {};
        window.G4.form.validationEvents =  validationEvents;
    };

}).call(this);