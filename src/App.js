import Landingpage from "./pages/LandingPage";
import AnimationCursorCustom from './components/AniamationCursorCustom/index';
import { useDevice } from "react-use-device";
import Sound from 'react-sound'
function App() {
  const { isMOBILE, isTABLET } = useDevice();
  return (
    <div className="App">
      {
        !isMOBILE && !isTABLET ? (
          <Landingpage />
        ) : <section className='noSupport'>
          no support for mobile devices
          <br />  
          🥺Sorry
          <br />
          <br />
          👇
          <br />
          <br />
          Please use Laptop/PC to view my website!!!
        </section>
      }
      <Sound 
      url='./nhac.mp3'
      />
      <AnimationCursorCustom />
    </div>
  );
}

export default App;
