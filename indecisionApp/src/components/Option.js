import React from 'react';
const Option = (props) =>(
    <div className="option">
        <p className="option__text">
            {props.count}.{props.optionText}
        </p>
        
            {/* sending option text to the handleDeleteOption */}
            <button className="button button--link" onClick={(e)=>{props.handleDeleteOption(props.optionText);}}>            
            remove</button> 

       
     
        
        
    </div>

)

export default Option;