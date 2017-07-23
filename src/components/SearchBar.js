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
    render(){
        return (
            <input onChange={this.onInputChange}/>
        );
    }

    // handling events in react has two steps:
    // declare an event handler (event callback)
    // second, we pass the event handler to the element that we want to monitor
    onInputChange(event) {
        console.log(event.target.value);
    }
}



export default SearchBar;