export default class Form {
    constructor(formFields) {
        this.fields = formFields
        this.content = "";
    }

    // Generate the HTML string for the form element
    generateForm() {
        // TODO - complete generateForm method
        this.generateContent();
        return '<form class="wf-form">\n<!--  This accessible form element was created using Well Formed\nIt is WCAG 2.2 compliant to AAA standard, meeting the following success criteria in particular:\n\t1.3.5 - Identify Input Purpose (AA)\n\t1.4.6 - Contrast Enhanced (AAA)\n\t2.1.2 - No Keyboard Trap (A)\n\t2.1.3 - Keyboard (No Exception) (AAA)\n\t2.4.3 - Focus Order (A)\n\t2.4.6 - Headings and Labels (AA)\n\t2.4.7 - Focus Visible (AA)\n\t2.5.3 - Label in Name (A)\nWell Formed © James McLean 2024\nAll rights reserved.-->\n' + this.content + '\t<input type="submit">\n</form>';
    }

    // Generate the HTML strings for each field
    generateContent() {
        // For each field, generate string and add to content
        this.fields.forEach(element => {
            if (element) {
                this.content += "\t" + element.generateField() + "<br><br>\n";
            }
        });
    }
}