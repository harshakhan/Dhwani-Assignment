import React from "react";
import PropTypes from "prop-types";

class ChildDummyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(this.props.length).fill('');
    this.elements = [];
  }

  handleChange = (e, i, ...props) => {
    // console.log(
    //   e.target.value +
    //     "  " +
    //     this.elements.length +
    //     "  " +
    //     e.target.value.length +
    //     "  " +
    //     JSON.stringify(this.props)
    // );
    // console.log({ ...this.props });
        
    if (
      e.target.value.length === this.props.maxLength &&
      i + 1 < this.elements.length
    ) {
        
        this.elements[i + 1].focus();
    }
    if(e.target.value.length === this.props.maxLength ){
        this.values[i] += e.target.value;
        this.props.onChange(this.values.join(""));
        console.log(this.values[i])

    }
  };

  onKeyPressed = (e, i) => {
    
    if (e.keyCode === 8 && i > 0) {
      // this.elements[i].value = ""
      // console.log("onKeyPressed First - ", i);
      if (this.elements[i].value.length <= 1) {
        e.preventDefault();
        this.elements[i - 1].focus();
        // console.log("onKeyPressed Later - ", i);
        this.elements[i].value = "";
      }
    }
  };

  componentDidMount() {
    // console.log(this.elements[0]);
    this.elements[0].focus();
  }

  render() {
    // const { label } = this.props;
    return (
      <>
      <div style={{background:"#fff8cd", width: '30%',margin:'auto', padding:'10px'}}>
        <h3>Enter the card number</h3>
        {this.values.map((item, i) => (
          <input
            style={{ width: 30,height:30, padding: 10, margin: 10, textAlign: "center" }}
            onChange={(e) => this.handleChange(e, i)}
            onKeyDown={(e) => this.onKeyPressed(e, i)}
            key={i}
            maxLength={this.props.maxLength}
            ref={(n) => {
              // console.log("n - " + n);
              return (this.elements[i] = n);
            }}
          />
        ))}

      </div>
      </>
    );
  }
}

ChildDummyComponent.propTypes = {
  length: PropTypes.number.isRequired
};

export default ChildDummyComponent;
