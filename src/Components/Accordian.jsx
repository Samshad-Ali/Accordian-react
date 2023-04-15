import React, { useState } from "react";
import { data } from "./api";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
const Accordian = () => {
  const [content, setContent] = useState(data);
  return (
    <div className="container">
      <h1>Accordian Using React</h1>
      {content.map((ele, id) => {
        return <Card key={id} ele={ele} />;
      })}
    </div>
  );
};

export default Accordian;

const Card = ({ ele }) => {
  const [show, isShow] = useState(false);
  return (
    <div className="content">
      <p>
        {show ? (
          <span   onClick={() => {
            isShow(!show);
          }}>
            {" "}
            <FaPlusCircle
            
            />{" "}
          </span>
        ) : (
          <span onClick={() => {
            isShow(!show);
          }}>
            {" "}
            <FaMinusCircle
              
            />{" "}
          </span>
        )}{" "}
        {ele.que}{" "}
      </p>
      {show && <h4>{ele.ans}</h4>}
    </div>
  );
};
