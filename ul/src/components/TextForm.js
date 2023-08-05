import React, { useState } from "react";
export default function TextForm(props) {
  const Uppercase = () => {
    console.log("The button is pressed");
    let newText = text.toUpperCase();
    setText(newText);
    setInterval(() => {
      document.title = "Uppercase";

      setTimeout(() => {
        document.title = "UC";
      }, 500);
    }, 1000); // Set the interval to 3 seconds (1500ms for each update + 1500ms delay)
  };
  const handleOnclick = (event) => {
    console.log("button is pressed");
    setText(event.target.value);
    document.title = "Converter";
  };
  const LowerCase = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    document.title = "LowerCase";
  };
  const handleClear = () => {
    let newText3 = " ";
    setText(newText3);
  };
  const [text, setText] = useState("");

  // Here we are using an usestate to perform the color change when a button is pressed.
  // so here we declare a style initially, then we call a function when the button is pressed,
  // when button is pressed then function is invoked and the changes will be matchMedia, and the
  // function name is ChangeTheme()
  const [ChangeStyle, setChangeStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "7px solid black",
  });

  // when button is pressed, the colour mode will be Changed, if the color is white then
  // it is changed to white and vise versa using the below if else conditions.

  const ChangeTheme = () => {
    if (ChangeStyle.color == "white") {
      
      setChangeStyle({
        color: "black",
        backgroundColor: "white",
        
        border: "7px solid yellow",
      });
      document.title = "Light";
    } else {
      setChangeStyle({
        color: "white",
        backgroundColor: "black",
        border: "7px solid pink",
      });
      document.title = "Dark";
    }
  };
  return (
    <>
      <div class="mb-3" >
        {/* <h1>This is data in the variable: </h1><br></br> */}
        {/* <h1>{text}</h1> */}
        <h1 className="x">{props.heading}</h1>
        <label for="myBox" class="form-label"></label>
        <textarea
          placeholder="Enter Data Here"
          onChange={handleOnclick}
          class="form-control"
          id="myBox"
          rows="8"
          value={text}
          style={ChangeStyle}
        ></textarea>
      </div>
      <br></br>
      <br></br>
      <div>
        <button class="btn btn-primary" onClick={Uppercase}>
          {" "}
          To UpperCase
        </button>
        <button class="btn btn-primary mx-5" onClick={LowerCase}>
          To LowerCase
        </button>
        <button class="btn btn-danger" onClick={handleClear}>
          Clear Data
        </button>
        <button onClick={ChangeTheme} class="btn btn-primary mx-5">
          Change Mode
        </button>
      </div>
      <br></br>
      <div className="container my-20">
        {/* when we type below i.e., when the data is empty it is splited based on ' ', so when it
        is splitted it will make and word which is ' ', so the count will be 1, but we need to make 
        it to 0, os here let us use here an if else condition */}

        {/* <p>
                {text.split(" ").length} Words {text.length} Letters
            </p> */}

        {/* here (() => { ... })(): This is an immediately-invoked function expression (IIFE)
        that contains the if-else statement. The IIFE is used to execute the function immediately
        and store its return value directly in the JSX */}
        {(() => {
          if (text.trim() != "") {
            return (
              <p>
                {text.split(/\s+/).length} Words {text.length} Letters
              </p>
            );
          } else {
            return <p>0 Words 0 Characters</p>;
          }
        })()}

        {/* instead of using the if else statements we can also use ternary operator i.e., if the 
        given condition is true then a specific statement is executed if it is false then another
        statement will be executed. */}

        {/* <<--- TERNARY OPERATOR--->>> */}

        {/* {text.trim() !== "" ? (
            <p>
              {text.split(/\s+/).filter(Boolean).length} Words {text.length}{" "}
              Characters
            </p>
          ) : (
            <p>0 Words 0 Characters</p>
          )}
          <h4>Input Data</h4>
          <p>{text}</p> */}

        <h4>Input Data</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
