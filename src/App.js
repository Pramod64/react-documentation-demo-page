import React, { Component } from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Blog from './Components/Blog/Blog'
import Community from './Components/Community/Community'
import Docs from './Components/Docs/Docs'
import Home from './Components/Home/Home'
import Navbars from './Components/Navbars/Navbars'
import Tutorial from './Components/Tutorial/Tutorial'
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer/Footer'
 class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbars/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Docs" element={<Docs/>} />
        <Route path="/Community" element={<Community/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Tutorial" element={<Tutorial/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </>
    );
  } 
}
export default App;
