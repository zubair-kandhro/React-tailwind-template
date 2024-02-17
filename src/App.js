import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
      <Route path="/hero" element={<HeroSection/>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
