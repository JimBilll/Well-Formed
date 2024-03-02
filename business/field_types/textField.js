export default class TextField {
    constructor(fieldName, isRequired){
        this.name = fieldName;
        this.required = isRequired;
    }

    generateField(){
        var newField = "";
        
        // Create label
        newField += '<label class="gf-label" for="' + this.name + '">' + this.name + '</label>';

        // Create input element with required asterisk
        if (this.required) {
            newField +='<span class="asterisk">*</span>\n\t<input type="text" id="' + this.name + '" class="gf-text-input" name="' + this.name + '" required>';
        }
        else {
            newField +='\n\t<input type="text" id="' + this.name + '" class="gf-text-input" name="' + this.name + '">';
        }

        return newField;
    }
}