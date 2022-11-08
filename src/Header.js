import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:["Home", "About", "Contact Us", "Login"]
        };
    }

    
    render(){
        return(
            <div>
                <div>Logo Here -- </div>
                <ul>
                    {this.state.name.map(h => (
                        <li>{h}</li>
                    ))}
                </ul>
            </div>
            
        );
    }
}



// class Header extends React.Component{

//     render(){
//         return(
//             <div className="header">
//                 <div className="row">
//                     <div className="col-sm-4">
//                         (logoSection)
//                     </div>
//                     1
               
//             </div>
                    
//                 );
//             }
//         }






export default  Header;