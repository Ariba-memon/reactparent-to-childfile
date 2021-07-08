import { render } from "@testing-library/react";
import React,{ Component } from "react";
import Child from "./components/child";


class App extends Component{

  get_data(data){
    console.log(data)
  }


render(){
  return(
    <div>
    
      <h1>Parent Component</h1>
      <Child get_data={this.get_data} name="car" price="10000"/>
    </div>
  )
}
}
export default App;
