import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import icon from "../Assets/icon.PNG";
const InsideCard = () => {
  return (
    <Card className="col-xs-6 col-sm-10 col-md-10 col-lg-7">
      <Card.Header
        className="shadow-lg text-warning"
        style={{ fontSize: "0.85rem" }}
      >
        ALREADY MEMBERS{" "}
        <span
          style={{ fontSize: "0.7rem", color: "gray" }}
          className="float-end mt-1"
        >
          Need help?
        </span>
      </Card.Header>
      <Card.Body>
        <div className="container">
          <div className="row">
            <input
              className="col-12 my-2"
              type="text"
              placeholder="Enter email"
            ></input>
            <input
              style={{
                backgroundImage: `url(${icon})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "25px 20px", 
                paddingLeft: "7px",
                backgroundPosition: "right center",
              }}
              className="col-12 my-2"
              type="text"
              placeholder="Enter your Password "
            ></input>

            <div  className="pb-4 pt-2">
              <button >SIGN IN</button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InsideCard;
