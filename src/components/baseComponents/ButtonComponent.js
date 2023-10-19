import React from 'react';
import { Button } from "react-bootstrap";
import '../../App.css';

function ButtonComponent(props) {

  const handleClick = (event) => {
    props.btnClick(event.target.name,props.id ? props.id :"");
  }

  return (
    <div className="Input_Box">
      <Button name={props.ButtonName} variant={props.variant} className={props.className} onClick={(e)=>handleClick(e)}>{props.ButtonText}</Button>
    </div>
  );
}
export default ButtonComponent;