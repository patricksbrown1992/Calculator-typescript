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
  count?: number
}
export default class App extends React.Component <CalcProps, CalcState>{

  constructor(props: CalcProps) {
    super(props);
    this.state = {
      count: 0
     
    };
  }
  

  render() {
    return (
      <div>
        <p>
          hi. This is the app
          <br/>
          <button>{this.state.count}</button>
        </p>
      </div>
    )
  }
}


