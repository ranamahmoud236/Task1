// create class component accept two props: 

//import react and components:
import React , { Component } from "react";

//create Greeting class:

class Greet extends Component {
    render(){
        return(
            <div>
                <h2>Hi,,, {this.props.name}!! </h2>   
                <p>{this.props.message}</p>      
            </div>
        );

    }

}
export default Greet