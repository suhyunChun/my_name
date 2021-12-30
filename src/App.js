import logo from './logo.svg';
import './App.css';
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p style={{fontSize:36+'px', fontFamily:'sans-serif', color:'black', marginBottom:2+'px'}}>HELLO</p>
          <p style={{fontSize : 15+'px',fontFamily:'sans-serif'}}>Welcome to the blog of <span style={{backgroundColor:'black', color : 'white', padding :3+'px'}}>suhyun chun</span></p>

          <div id ='content'>
              <LeftBox/>
              <RightBox/>
          </div>
          <div id ='bottom' style={{backgroundColor:'#616161', width:'100vw', height:'120px', fontSize:'1.3rem'}}>
              <p>Let's Practice
              <a href='https://competent-joliot-a397b2.netlify.app/'> HIGHEND </a>
              </p>
          </div>
      </header>
    </div>
  );
}

export default App;
