export default class Form {
    constructor(formFields) {
        // TODO - complete constructor
        this.fields = formFields
        this.content = "";
    }

    // Generate the HTML string for the form element
    generateForm() {
        // TODO - complete generateForm method
        this.generateContent();
        return '<form class="wf-form">\n' + this.content + '\t<input type="submit">\n</form>';
    }

    // Generate the HTML strings for each field
    generateContent() {
        // TODO - complete generateContent method

        // For each field, generate string and add to content
        this.fields.forEach(element => {
            if (element) {
                this.content += "\t" + element.generateField() + "<br><br>\n";
            }
        });
    }
}