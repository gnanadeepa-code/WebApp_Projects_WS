import "./App.css";
import Course from "./Course";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HTML from './assets/HTML5.png'
import CSS from './assets/CSS3.png'
import JS from './assets/JS.png'

function App() {
  return (
    <> {/* React Fragment - used to group multiple components without using extra node like div*/} 
      <Navbar />
      <Course name="HTML5" desc="HTML5 - web language" show={true} image={HTML}/>
      <Course name="CSS" desc="CSS - Styling language" image={CSS}/>
      <Course name="JS" desc="JS - Event handling" image={JS} />
      <Footer />
    </>
  );
}

export default App;
