import { useState } from 'react';
//import "../form_styles/simple.css"

export default function Result() {
    const [simple, setSimple] = useState(true);
    const [style, setStyle] = useState("form_styles/simple.css");

    // Copy content to user's clipboard
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
                <div id="resultField" tabIndex={0}></div>
                <button type="button" id="copyButton" onClick={() => copyContent()}>Copy to Clipboard</button>
            </div>
            <div>
                <head>
                    <link rel="stylesheet" href={style}></link>
                </head>
                <h2>Preview</h2>
                <div id="style-menu">
                    <label>Style:</label>
                    <fieldset className="style-radio">
                        <legend>Style</legend>
                        <input type="radio" id="simpleCSS" name="selectCSS" onClick={() => setCSS(true)}/>
                        <label for="simpleCSS">Simple</label>
                        <input type="radio" id="cleanCSS" name="selectCSS" onClick={() => setCSS(false)}/>
                        <label for="cleanCSS">Clean</label>
                    </fieldset>
                    <select id="cssColour" name="colour" disabled={simple} onChange={() => setCSS(false)} aria-label="Select Theme">
                        <option value="light">light</option>
                        <option value="dark">dark</option>
                    </select>
                    <a href={style} aria-label="Download Style-sheet" download><img src="other_assets/download.png" id="downloadButton" alt="download stylesheet" aria-hidden></img></a>
                </div>
                <div id="previewField"></div>
            </div>
        </div>
    );

    // Sets the CSS theme of the rendered preview
    function setCSS(isSimple) {
        setSimple(isSimple)
        if (isSimple) {
            setStyle("form_styles/simple.css");
        }
        else {
            var theme = document.getElementById("cssColour");
            setStyle("form_styles/" + theme.value + "-clean.css");
        }
    }
}