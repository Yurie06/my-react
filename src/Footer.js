import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>Footer Here!</div>
                <hr/>
                <di>{this.props.textContent}</di>
                <div>{this.props.numberContent}</div>
            </div>

        );
    }
}

    export default Footer;