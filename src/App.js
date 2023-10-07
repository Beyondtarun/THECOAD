import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Banner from "./components/Banner";
import Joinus from "./components2/Joinus";
import {FaqPage} from "./components2/Faq";
import Events from "./components2/Events";
import Gallery from "./components2/Gallery";
import About from "./components/About";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="main" element={<Banner />}></Route> {/*//banner file contain all the component*/}
          <Route path="joinus" element={<Joinus />}></Route>
          <Route path="faq" element = {<FaqPage/>}></Route>
          <Route path="event" element = {<Events/>}></Route>
          <Route path="gallery" element = {<Gallery/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
