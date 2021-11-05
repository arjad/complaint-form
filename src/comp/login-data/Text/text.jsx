import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./text.css";
const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["Fast", "Scalable", "Potato"];

const paragraphs = [
  "1 United Track System (Pvt.) Limited (UTS), WEBTRACK Application is being updated time to time, to improve user experience, reports and for additional features. Since UTS makes every effort to ensure security and accuracy of data and information, UTS, United",
  "2 International Group and its subsidiaries, hereby take no responsibility of errors.For any further information, UTS 24 hours call center may be contacted at: UAN: 111-000-320.",
  "United Software & Technologies International (Pvt) Ltd - UIG",
];

class text extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1
      });
    }, 150);
  }

  render() {
    return (
    <div className="text-div">
      <React.Fragment>
          <h3>DISCLAIMER FROM DEVELOPER</h3>
        <section>
          <section className="inline">
            <ReactTextTransition
              text={paragraphs[this.state.paragraphIndex % texts.length]}
              overflow
            />
          </section>
        </section>
      </React.Fragment>
    </div>
    );
  }
}

export default text;
