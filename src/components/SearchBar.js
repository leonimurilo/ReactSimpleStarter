/**
 * Created by Leoni on 7/23/2017.
 */
import React from "react";
// Needs to be imported because when a jsx tag is used, under the hood what is happening is that
// it turns the tag into a call like: React.createElement


// // functional component
// // something goes in and some jsx goes out
// const SearchBar = () => {
//     return <input/>;
// };

// class based component (ES6 class. An object with methods and properties)
// It's used whenever you want a component to have some type of internal record
// It has the ability to be aware of itself, what is happening to it since it has been rendered
// and can communicate with other components

// Uses prototype inheritance to have all the properties and methods a component should have
// every react class based component must have its render method
class SearchBar extends React.Component{

    // State is a plain javascript object that is used to record and react to user events
    // each class based component that we define, has its own state object
    // whenever a component state is changed, the component immediately renders
    // and also forces all of its children to render as well

    constructor(props){
        super(props);
        // constructor is the only place we can mutate the state directly using assignment
        this.state = {
            term: ""
        };
    }
    render(){
        // A controlled field is a form element (like input) whose value is set by the state rather than the other way around
        // when we set the value of the input to a state property, we are saying that instead of setting its text by its own,
        // the input text/value will be what the state will be. And when we update the state with the onChange,
        // we have a controlled element.
        return (
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}/>
        </div>
        );
    }

    // handling events in react has two steps:
    // declare an event handler (event callback)
    // second, we pass the event handler to the element that we want to monitor
    onInputChange(event) {
        this.setState({term: event.target.value});
    }
}




export default SearchBar;