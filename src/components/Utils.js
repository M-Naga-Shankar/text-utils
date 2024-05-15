import { useState } from "react";
import Model from "./Model";

function Utils(probs) {
  const [text, settext] = useState("");
  const UpperCase = ()=>{
    settext(text.toUpperCase());
  }
  let LowerCase = ()=>{
    settext(text.toLowerCase());
  }
  let update =(event) =>{
    settext(event.target.value)
  }
  let copy = () =>{
    navigator.clipboard.writeText(text);
    alert('text copied');
  }
    return ( 
      <div className='container'>
        <br></br>
        {/* <Alert msg="test" type="success"/> */}
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label my-3"><h2>{probs.title}</h2></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value={ text } onChange={update}> </textarea>
</div>
<div className="container"> 
<button className="btn btn-primary " onClick={UpperCase} >Upper Case</button>
<button className="btn btn-warning mx-3" onClick={LowerCase} >Lower Case</button>
<button className="btn btn-info" onClick={copy} >Copy</button>
<Model text={text} />

</div>
      </div>
    )
  }
  export default Utils;
  
  
  
  