import React from 'react';

const Inputfield = (props) => {
        return(
            <div className="title-input-field">
                <label htmlFor="input-field">{props.title}</label>
                <input name={props.name} type={props.type} placeholder={props.placeholder} id="input-field" onChange = {props.onChange} required />
            </div>
        );    
    }

export default Inputfield;