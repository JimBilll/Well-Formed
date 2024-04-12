export default class AddressField {
    constructor(fieldName, noOfLines, isRequired){
        this.name = fieldName;
        this.lines = noOfLines;
        this.required = isRequired;
    }

    generateField() {
        var newField = "";

        // Create main label
        newField += '<label class="gf-label">' + this.name + '</label><br>';

        // Create labels and input elements for each address line
        for (var i = 1; i <= this.lines; i++) {
            newField += '\n\t<label for="' + this.name + ' Address Line ' + i + '" class="address-line">Address Line ' + i + '</label>';
            
            if (this.required) {
                newField +='<span class="asterisk">*</span>\n\t<input type="text" id="Address Line ' + i + '" class="gf-text-input" name="' + this.name + ' Address Line ' + i + '" aria-label="' + this.name + ' Address Line ' + i + '" required><br>';
                if (i == 2) { this.required = false }; // Only the first two lines should be required
            }
            else {
                newField +='\n\t<input type="text" id="Address Line ' + i + '" class="gf-text-input" name="' + this.name + ' Address Line ' + i + '" aria-label="' + this.name + ' Address Line ' + i + '" ><br>';
            }
        }

        newField = newField.slice(0, newField.length - 4); // Cut off the last line break

        return newField;
    }
}