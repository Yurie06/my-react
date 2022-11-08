import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onOff: 'ON',
            enabled: true,
            textState: "Hello Universe!",

        }
    }

    createSquare(index){
        return <Square index={index} />
    }


toggleOnOff = (value) => {
    this.setState({
        onOff: this.state.onOff == 'OFF' ? 'ON' : 'OFF',
    });
}



setNewValue = (value) => {
    this.setState({
        enabled: value,
    })

    if(value){
        this.setState({textState: 'hello BootCamp'});
    }else{
        this.setState({textState: 'Goodnight BootCamp'});
    }
}


    render(){
        return(
        <div>

            <div>
                {this.createSquare(1)}
                {this.createSquare(2)}
                {this.createSquare(3)}
            </div>
            <div>
                {this.createSquare(4)}
                {this.createSquare(5)}
                {this.createSquare(6)}
            </div>
            <div>
                {this.createSquare(7)}
                {this.createSquare(8)}
                {this.createSquare(9)}
            </div>

            <hr />

            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
cd
            <button onClick={this.toggleOnOff} className="btn btn-primary">Toggle {this.state.onOff}</button>
            <br/>
            <button onClick={() => this.setNewValue(!this.state.enabled)} className="btn btn-primary">Set New Value</button>
            <br/>
            <div>{"WOW" + this.state.enabled.toString()}{this.state.textState}</div>
            

        </div>

        );
    }
}

export default Board;