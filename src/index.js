import React from "react"; // core react library that knows how to work with components
import ReactDOM from "react-dom" // separated lib that is responsible to insert the component into the DOM


// create a new class of a component (not an instance) that should produce some html
const App = () => {
  return <div>Hi!</div>
};


// take the component and put it on the page (in the DOM)
// note that the jsx tag with the component name makes an instance of the class "App" na pass it as the first argument
// the second argument is a reference to an existing DOM node on the page
ReactDOM.render(<App />, document.querySelector(".container"));
