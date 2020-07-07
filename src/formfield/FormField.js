import React from "react";


function Input(props){
    const element=(
        
        <div class="field">
          <label class="label">{props.labelName}</label>
          <div class="control">
            <input class="input" type={props.type} placeholder={props.holder} />
          </div>
        </div>
    );
    return element;
}


export default Input;