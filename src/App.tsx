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
  count: number
}
export default class App extends React.Component <CalcProps, CalcState>{

  constructor(props: CalcProps) {
    super(props);
    this.state = {
      count: 0
     
    };
    this.addToCount = this.addToCount.bind(this);
  }

  addToCount(e: any){
    e.preventDefault();
    this.setState({ count: this.state.count + 1});
  }
  

  render() {
    return (
      <div>
        <p>
          <br/>
          <button onClick= {this.addToCount}>{this.state.count}</button>
        </p>
      </div>
    )
  }
}


