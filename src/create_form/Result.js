export default function Result() {
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
                <h2>Preview</h2>
                <div id="previewField"></div>
            </div>
        </div>
    );
}