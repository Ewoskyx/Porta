import { BrowserRouter } from "react-router-dom"
import { Events, Contact, Hochzeit, Hero, Navbar, Works,
StarsCanvas,
PastEvents,
Gallery} from './components'

const App = () => {
  

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-hover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
    <Events/>
    <PastEvents/>
    <Hochzeit/>
    <Gallery/>
    <Works/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
