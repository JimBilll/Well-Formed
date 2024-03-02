export default class DropdownField {
    constructor(fieldName, selectOptions, isRequired){
        this.name = fieldName;
        this.options = selectOptions;
        this.required = isRequired;
    }

    generateField(){
        var newField = "";
        
        // Create Label
        newField += '<label class="gf-label" for="' + this.name + '">' + this.name + '</label>';

        // Add required asterisk and call options generation
        if (this.required) {
            newField += '<span class="asterisk">*</span>\n\t<select id="' + this.name + '" class="gf-dd-select" name="' + this.name + '" required>';
            newField += this.generateOptions();
            newField += '\n\t</select>'
        }
        else {
            newField += '\n\t<select id="' + this.name + '" class="gf-dd-select" name="' + this.name + '">';
            newField += this.generateOptions();
            newField += '\n\t</select>'
        }

        return newField;
    }

    // Add option elements for each selection option
    generateOptions(){
        var HTMLoptions = "";

        for (var i = 0; i < this.options.length; i++){
            HTMLoptions += '\n\t\t<option value="' + this.options[i] + '">' + this.options[i] + '</option>';
        }

        return HTMLoptions;
    }
}