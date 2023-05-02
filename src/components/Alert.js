import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    {/*props.alert && - this syntax is used if the  {props.alert.type} and other conditions in this component are null or false then instead of showing error it will first 
    wait till the contdition becomes true and then execute this component*/}
</div>
  )
}

export default Alert
