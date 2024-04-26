import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      s1: props.p1,
    };

    this.s2 = 201;
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val += 50;
    this.s2 += 50;
    this.setState({ s1: val });
  };

  componentDidMount() {
    this.state.s1 += 5;
    this.s2 += 5;
  }

  render() {
    return (
      <>
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
      </>
    );
  }
}

export default Homework1;
