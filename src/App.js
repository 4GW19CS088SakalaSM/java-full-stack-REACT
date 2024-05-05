
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <p>IBM react demo</p>
//     </div>
//   );
// }

// const App =()=>{
//   return(
//     <>
//     <h1>raact</h1>
//     <p>react project</p>

//     </>
//   )
// }
import { Component } from 'react';
import Employee from './components/Employee';
import Login from './components/Login';
import Parent from './components/Parent';
import AppRoutes from './components/AppRoutes';

class App extends Component{

  render =()=>{
    return(
      <>
      {/* <h1>react</h1>
      <p>react project</p> */}
      
      {/* <Login/>
      <Employee/>
      <Parent/> */}
      <AppRoutes/>
      </>
    )
  }
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;