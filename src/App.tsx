import React, { Props } from 'react';

import './App.css';


interface CalcProps {

}

interface CalcState{
  count1: string,
  count2: string,
  add: boolean,
  sub: boolean,
  multi: boolean,
  div: boolean
}
export default class App extends React.Component <CalcProps, CalcState>{

  constructor(props: CalcProps) {
    super(props);
    this.state = {
      count1: '0',
      count2: '0',
      add: false,
      sub: false,
      multi: false,
      div: false

     
    };
    this.resetApp = this.resetApp.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subtractNums = this.subtractNums.bind(this);
    this.multiplyNums = this.multiplyNums.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }




  addNums(e:any){
    e.preventDefault();
    this.setState({ sub: false, add: true, multi: false, div: false })

  }

  resetApp(e:any){
    e.preventDefault();
    this.setState({count1: '0'})
  }
  handleChange( e: any){    
    this.setState({ count1: e });
 
  }

  handleChange2(e: any){

    this.setState({ count2: e });
  }

  subtractNums(e: any){
    e.preventDefault();
    this.setState({sub: true, add: false, multi: false, div: false});
  }
  
  multiplyNums(e:any){
    e.preventDefault();
    this.setState({ sub: false, add: false, multi: true, div: false });
  }

  divideNums(e: any){
    e.preventDefault();
    this.setState({ sub: false, add: false, multi: false, div: true })
  }

  handleEnter(e:any){
    e.preventDefault();
    let ans: any;
    if(this.state.sub){
      ans = parseInt(this.state.count1) - parseInt(this.state.count2);
      this.setState({ sub: false, count1: ans, count2: '0'})
    } else if (this.state.add) {
      ans = parseInt(this.state.count1) + parseInt(this.state.count2);
      this.setState({ add: false,  count1: ans, count2: '0' })
    } else if (this.state.div) {
      ans = parseInt(this.state.count1) / parseInt(this.state.count2);
      this.setState({ div: false,  count1: ans, count2: '0' })
    } else if (this.state.multi) {
      ans = parseInt(this.state.count1) * parseInt(this.state.count2);
      this.setState({ multi: false, count1: ans, count2: '0' })
    }

  }

  render() {
    
    if (!this.state.add && !this.state.sub && !this.state.multi && !this.state.div){
      debugger
      return (
        <div>
          <p>
            <button onClick={this.addNums}>Add</button>
            <br />
            <button onClick={this.subtractNums}>Subtract</button>
            <br />
            <button onClick={this.multiplyNums}>Multiply</button>
            <br />
            <button onClick={this.divideNums}>Divide</button>
            <br />

            <button onClick={this.resetApp}>Reset</button>
            <br />
            <input type='text' value={this.state.count1} onChange={e => this.handleChange(e.target.value)} />
            {this.state.count1}
            <br />
            <br />
            {this.state.add + ' add'}
            <br />
            {this.state.sub + ' sub'}
            <br />
            {this.state.multi + ' multi'}
            <br />
            {this.state.div + ' div'}
            <br />
            {this.state.count1}
            <br />
            {this.state.count2}
            <br />

          </p>
        </div>
      )
    } else {
      debugger
      return (
        <div>
          <p>
            <button onClick={this.addNums}>Add</button>
            <br />
            <button onClick={this.subtractNums}>Subtract</button>
            <br />
            <button onClick={this.multiplyNums}>Multiply</button>
            <br />
            <button onClick={this.divideNums}>Divide</button>
            <br />

            <button onClick={this.resetApp}>Reset</button>
            <br />
            <input type='text' value={this.state.count2} onChange={e => this.handleChange2(e.target.value)} />
            {this.state.count2}
            <br />
            <button onClick={this.handleEnter}>Enter</button>
            <br />
            {this.state.add + ' add'}
            <br />
            {this.state.sub + ' sub'}
            <br />
            {this.state.multi + ' multi'}
            <br />
            {this.state.div + ' div'}
            <br />
            {this.state.count1}
            <br />
            {this.state.count2}
            <br />

          </p>
        </div>
      )
    }

    
    
    
    
  }
}


