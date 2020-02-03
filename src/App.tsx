import React, { Props } from 'react';

import './App.css';

// export const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
  
//         <p>
//           hey hi
//         </p>
        
          
        
//       </header>
//     </div>
//   );
// }

interface CalcProps {

}

interface CalcState{
  count: number,
  numResets: number
}
export default class App extends React.Component <CalcProps, CalcState>{

  constructor(props: CalcProps) {
    super(props);
    this.state = {
      count: 0,
      numResets: 0
     
    };
    this.addToCount = this.addToCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  addToCount(e: any){
    e.preventDefault();
    this.setState({ count: this.state.count + 1});
  }

  resetCount(e: any){
    e.preventDefault();
    this.setState({ count: 0,  numResets: this.state.numResets + 1});
  }
  

  render() {
    return (
      <div>
        <p>
          <br/>
          <button onClick= {this.addToCount}>{this.state.count}</button>
          <button onClick = {this.resetCount}>Reset</button>
          <br/>
          <p>{this.state.numResets}</p>
        </p>
      </div>
    )
  }
}


