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
                <button type="button" id="copyButton" onClick={() => copyContent()}>Copy to Clipboard</button>
            </div>
            <div>
                <head>
                    <link rel="stylesheet" href={style}></link>
                </head>
                <h2>Preview</h2>
                <label>Theme:</label>
                <input type="radio" id="simpleCSS" name="selectCSS" onClick={() => setCSS(true)}/>
                <label for="simpleCSS">Simple</label>
                <input type="radio" id="cleanCSS" name="selectCSS" onClick={() => setCSS(false)}/>
                <label for="cleanCSS">Clean</label>
                <select id="cssColour" name="colour" disabled={simple} onChange={() => setCSS(false)}>
                    <option value="light">light</option>
                    <option value="dark">dark</option>
                </select>
                <a href={style} download><img src="other_assets/download.png" id="downloadButton" alt="download"></img></a>
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
            var theme = document.getElementById("cssColour");
            setStyle("form_styles/" + theme.value + "-clean.css");
        }
    }
}