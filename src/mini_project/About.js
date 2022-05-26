import React from "react";
  
class Sample   extends React.Component {
  render() {
    return <p className="center">About Page</p>;
  }
}
  
class About extends React.Component {
  render() {
    return <Sample />;
  }
}
  
export default About;