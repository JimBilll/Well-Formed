export default class AddressField {
    constructor(fieldName, noOfLines, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.lines = noOfLines;
        this.required = isRequired;
    }

    generateField() {
        // TODO complete generateField method
        var newField = "";
        newField += '<label class="gf-label">' + this.name + '</label><br>';

        for (var i = 1; i <= this.lines; i++) {
            newField += '\n\t<label for="Address Line ' + i + '" class="address-line">Address Line ' + i + '</label>';
            
            if (this.required) {
                newField +='<span class="asterisk">*</span>\n\t<input type="text" id="Address Line ' + i + '" class="gf-text-input" name="Address Line ' + i + '" aria-label="' + this.name + ' Address Line "' + i + ' required><br>';
            }
            else {
                newField +='\n\t<input type="text" id="Address Line ' + i + '" class="gf-text-input" name="Address Line ' + i + '" aria-label="' + this.name + ' Address Line "' + i + ' ><br>';
            }
        }

        newField = newField.slice(0, newField.length - 4); // Cut off the last line break

        return newField;
    }
}