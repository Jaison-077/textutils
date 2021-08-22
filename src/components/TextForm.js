import React,{useState} from 'react'

export default function TextForm(prop) {
    
    const[text,setText] = useState('');

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);

        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const handleClearTextClick=()=>{
        setText('');
    }


    //     COPY TEXT 
    const handleCopy=()=>{
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        prop.showAlert('copied to clipboard','success');
    }

    //Remove Extra Spaces
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    // const handleSortTextClick=()=>{
    //     // let newText = new String(text);
    //     let newText = text;
    //     setText(newText);
    // }
    const handleOnChange=(event)=>{
        console.log("on Change");
        setText(event.target.value);
    }
    // setText('JAISON')

    return (
        <>
            <div className="container">
            <h1>{prop.heading}</h1>
            <div className="mb-3">
            {/* <label htmlFor="MyBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="MyBox" value={text} onChange={handleOnChange} rows="10" style={{backgroundColor: prop.Mode==='dark'?'#00002a':'white',color: prop.Mode==='dark'?'white':'black'}}></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button> 
            <button className="btn btn-primary my-2 ms-3" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary my-2 ms-3" onClick={handleClearTextClick}>Clear Text</button>
            <button className="btn btn-primary my-2 ms-3" onClick={handleCopy}>CopyText</button>
            <button className="btn btn-primary my-2 ms-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(' ').length} words {text.length} characters</p>
                <p>{0.008*text.split('').length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview it here"}</p>
            </div>
        </>
    )
}
