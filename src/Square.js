import React from "react";

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            backgroundcolor: "gold",
            enabled: true,    
        };
    }



clickHandler = () => {
    this.setState({
        backgroundcolor: "white",
        enabled: false,
    });
}



    render(){
        return (
            <div onClick={this.clickHandler} className={"square " + this.state.className + " " + this.state.backgroundcolor} data-index={this.props.index}>
                {this.props.content}{this.props.textcolor}{this.props.index}{this.state.enabled ? 1 : 0}
            </div>
        );
    }
}

export default Square;