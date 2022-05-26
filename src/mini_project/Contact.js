import React from "react";
  
class Sample   extends React.Component {
   constructor(props) {
    super(props);

  }
  render() {
    return <p className="center">ContanctUs<strong>{this.props.value}</strong></p>;
  }
}
  
class Contact extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return <Sample value="For More Information" />;
  }
}
  
export default Contact;