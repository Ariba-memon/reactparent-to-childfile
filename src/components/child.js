import React  from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h4>Rs:{this.props.price}</h4>
                <button onClick={()=> this.props.get_data("ghous ahmed")}>UPDATE</button>
            </div>
        )
    }
}
export default Child;