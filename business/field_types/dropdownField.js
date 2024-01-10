export default class DropdownField {
    constructor(fieldName, selectOptions, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.options = selectOptions;
        this.required = isRequired;
    }

    generateField(){
        // TODO complete generateField method
        var newField = "";
        
        newField += '<label for="' + this.name + '">' + this.name + '</label>';

        if (this.required) {
            newField += '<span class="asterisk">*</span>\n\t<select id="' + this.name + '" name="' + this.name + '" required>';
            newField += this.generateOptions();
            newField += '\n\t</select>'
        }
        else {
            newField += '\n\t<select id="' + this.name + '" name="' + this.name + '">';
            newField += this.generateOptions();
            newField += '\n\t</select>'
        }

        return newField;
    }

    generateOptions(){
        var HTMLoptions = "";

        for (var i = 0; i < this.options.length; i++){
            HTMLoptions += '\n\t\t<option value="' + this.options[i] + '">' + this.options[i] + '</option>';
        }

        return HTMLoptions;
    }
}