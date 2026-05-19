import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML Element
//React Element
const JSXheading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//React functional component
//Component Composition
const HeadingComponent =()=>{

    return(<div> <JSXheading/><h1 className="heading">Namaste React Functional Component</h1></div>)

}
//Normal functional component
const JSXheadingMp = function(){
    
    
    return(
      <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//root.render(JSXheading);


