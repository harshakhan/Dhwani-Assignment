import React from "react";
import ChildDummyComponent from "./ChildDummyComponent";

export default class ParentDummyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = (value) => {
    this.setState({
      value: value
    });
  };

  
  render() {
    
    return (
      <div>
        <ChildDummyComponent
          onChange={this.onChange}
          length={4}
          maxLength={4}
        />
      
        <button 
        style={{background:'#fc8621', padding:'10px', border:'none', outline:'none', color:'white', fontWeight:600, fontSize:'18px', borderRadius:'5px'}} 
        onSubmit={()=>{alert(this.state.value)}}>Submit</button>
          <div>{this.state.value}</div>
      </div>
    );
  }
}