// import React from 'react';

// import ReactDOM from 'react-dom';

// class Clock extends React.Component{
//   render(){
//     return(
//     <h1 className='heading'>
//       <span>hello,{new Date().toLocaleTimeString()}</span>
//     </h1>
//     );
    
//   }

// }
// ReactDOM.render(<Clock/>,document.getElementById('root'));
import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span>Hello, {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}
export default Clock;

// import React from 'react';

// export default class Clock extends React.Component {
//   render() {
//     return (
//       <h1 className="heading">
//         <span>Hello, {new Date().toLocaleTimeString()}</span>
//       </h1>
//     );
//   }
// }

