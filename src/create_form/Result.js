import { useState } from 'react';
//import "../form_styles/simple.css"

export default function Result() {
    const [simple, setSimple] = useState(true);
    const [style, setStyle] = useState("form_styles/simple.css");

    const copyContent = async () => {
        try {
            var text = document.getElementById("resultField").innerText;
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
        }
        catch (e) {
          console.log(e);
        }
    }

    return (
        <div id="result" className="result">
            <div>
                <h2>Result</h2>
                <div id="resultField"></div>
                <button type="button" onClick={() => copyContent()}>Copy to Clipboard</button>
            </div>
            <div>
                <head>
                    <link rel="stylesheet" href={style}></link>
                </head>
                <h2>Preview</h2>
                <label>CSS:</label>
                <input type="radio" id="simpleCSS" name="selectCSS" checked onClick={() => setCSS(true)}/>
                <label for="simpleCSS">Simple</label>
                <input type="radio" id="cleanCSS" name="selectCSS" onClick={() => setCSS(false)}/>
                <label for="cleanCSS">Clean</label>
                <select id="cssColour" name="colour" disabled={simple}>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                </select>
                <div id="previewField"></div>
            </div>
        </div>
    );

    function setCSS(isSimple) {
        setSimple(isSimple)
        if (isSimple) {
            setStyle("form_styles/simple.css");
        }
        else {
            setStyle("form_styles/clean.css");
        }
    }
}