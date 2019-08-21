import React from 'react';
import PropType from 'prop-types';
import Form from 'react-bootstrap/Form';

function TextInput(props) {
    // if(props.error.length > 0){
    // }
    const error = {
        color : 'red'
    };
    return (
        <>
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control 
                    type={props.type} 
                    id={props.id} 
                    name={props.name} 
                    placeholder={props.placeholder} 
                    onChange={props.onChange} 
                    value={props.value} />
                <span style={error}>{props.error}</span>
            </Form.Group>
        </>
    )
}

TextInput.propTypes = {
    label : PropType.string.isRequired,
    type : PropType.string.isRequired,
    id : PropType.string.isRequired,
    name : PropType.string.isRequired,
    placeholder : PropType.string.isRequired,
    onChange : PropType.func.isRequired,
    value : PropType.string,
    error : PropType.string
}

TextInput.defaultProps = {
    error : ''
}

export default TextInput;