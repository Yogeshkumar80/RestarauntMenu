import './App.css'
import { Header,AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer} from "./container/index"
import Navbar from "./components/Navbar/Navbar"
function App() {
  
    return(
       <div>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <SpecialMenu/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUs/>
        <Footer/>
       </div>

    )
}
export default App
