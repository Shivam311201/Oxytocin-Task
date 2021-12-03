import React, { useState,useContext } from "react";
import "./highlight_style.css";
function AddHighlight(props)
{
    const HighlightFormat={
        id:props.Data.length+1,
        checked:false,
        UserName:"",
        ClusterName:"",
        IdeaDescription:""
    };
    const[form,setform]=useState(HighlightFormat);
    function handleChange(e)
    {  
        console.log(form.id);
        setform({...form,[e.target.name]:e.target.value});
    }
    return (<div class="addHighlight">
      <div class="addHighlight_Title"> Create a Highlight</div>
        <div><input className="minor_input" name="UserName" onChange={handleChange} placeholder="Your Name*"/></div>
        <div><input className="minor_input" name="ClusterName" onChange={handleChange} placeholder="Cluster Name"/></div>
        <div><textarea className="major_input" name="IdeaDescription" onChange={handleChange} placeholder="Idea description*"/></div>
        <div>
            <button className="Add_Button" onClick={()=>props.AddIdea(form)}>Add</button>
        </div>
    </div>
    ) 
}
export default AddHighlight;