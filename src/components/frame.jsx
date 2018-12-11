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
        <div className={classes.frame}>
          <div className={classes.calculatorTitle}>
            Calculator
          </div>
          <Screen question={this.state.question} answer={this.state.answer}/>
          <div className={classes.buttonRow}>
            <Button label={'1'} handleClick={this.handleClick} type='input' />
            <Button label={'2'} handleClick={this.handleClick} type='input' />
            <Button label={'3'} handleClick={this.handleClick} type='input' />
            <Button label={'4'} handleClick={this.handleClick} type='input' />
            <Button label={'-'} handleClick={this.handleClick} type='action' />
            <Button label={'+'} handleClick={this.handleClick} type='action' />
          </div>
          <div className={classes.buttonRow}>
            <Button label={'5'} handleClick={this.handleClick} type='input' />
            <Button label={'6'} handleClick={this.handleClick} type='input' />
            <Button label={'7'} handleClick={this.handleClick} type='input' />
            <Button label={'8'} handleClick={this.handleClick} type='input' />
            <Button label={'*'} handleClick={this.handleClick} type='action' />
            <Button label={'/'} handleClick={this.handleClick} type='action' />
          </div>
          <div className={classes.buttonRow}>
            <Button label={'9'} handleClick={this.handleClick} type='input' />
            <Button label={'.'} handleClick={this.handleClick} type='input' />
            <Button label={'0'} handleClick={this.handleClick} type='input' />
            <Button label={'Cls'} handleClick={this.handleClick} type='action' />
            <Button label={'='} handleClick={this.handleClick} type='action' />
          </div>
        </div>
      );
    }
        
    // createButtons(start,end,display) {
    //   var buttons = [];
    //     for (let i = start,j=0; i <= end; i++,j++) {
    //       buttons.push(<Button label={display[j]} handleClick={this.handleClick} type='input' />)
    //     }
    //   return buttons
    // }

    handleClick(event){
      const value = event.target.value;
      switch (value) {
        case '=': { 
          // eslint-disable-next-line no-eval
          const answer = eval(this.state.question).toString();
          this.setState({ answer });
          break;
        }
        case 'Cls': {
          this.setState({ question: '', answer: '' });
          break;
        }
        default: {
          // eslint-disable-next-line react/no-direct-mutation-state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }
}
export default Frame;