import logo from './logo.svg';
import './App.css';
import MyNav from './My components/Nav';
import MyHeader from './My components/Header';
import MyBGround from './My components/Background';
import MyFooter from './My components/Footer';



function App() {
return(
  <>
<MyNav/>
<MyHeader/>
<MyBGround/>
<MyFooter/>
  </>
)

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //    
      //  Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
