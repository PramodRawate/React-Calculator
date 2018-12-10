import React, {Component} from 'react'; 
import Screen from './screen';
import Button from './button';
import classes from './frame.css';

class Frame extends Component {
    constructor() {
        super();
        this.state = {
          question: '',
          answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }    

    render() {
      return (
        <div className="frame">
          <div className="calculator-title">
            Simple Calculator
          </div>
          <Screen question={this.state.question} answer={this.state.answer}/>
          <div className="button-row">
            {this.createButtons(0,4,[0,1,2,3,4])}
          </div>

          <div className="button-row">
          {this.createButtons(5,9,[5,6,7,8,9])}
          </div>
          <div className="button-row">
            {this.createButtons(0,4,['+','-','*','/','='])}
          </div>
        </div>
      );
    }
        
    createButtons(start,end,display) {
      var buttons = [];
        for (let i = start,j=0; i <= end; i++,j++) {
          buttons.push(<Button label={display[j]} handleClick={this.handleClick} type='input' />)
        }
      return buttons
    }

    handleClick(event){
      const value = event.target.value;
      switch (value) {
        case '=': { 
          const answer = eval(this.state.question).toString();
          // update answer in our state.
          this.setState({ answer });
          break;
        }
        case 'Cls': {
          // if it's the Cls sign, just clean our question and answer in the state
          this.setState({ question: '', answer: '' });
          break;
        }
        default: {
          // for every other commmand, update the answer in the state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }
}
export default Frame;