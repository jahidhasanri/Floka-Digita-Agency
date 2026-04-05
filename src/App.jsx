

import './App.css'
import Banner from './components/Banner'
import ContactSection from './components/ContactSection'
import Expertise from './components/expertise'
import FeedBack from './components/FeedBack'
import FunFacts from './components/FunFacts'
import HappyUsers from './components/HappyUsers'
import Navabar from './components/Navabar'
import OurApproch from './components/OurApproch'
import Protfolio from './components/Protfolio'
import TextSlider from './components/TextSlider'

function App() {


  return (
    <div className="bg-[#f5f5f5]">
     <Navabar></Navabar>
     <Banner></Banner>
     <OurApproch></OurApproch>
     <TextSlider></TextSlider>
     <Protfolio></Protfolio>
     <Expertise></Expertise>
     <FunFacts></FunFacts>
     <HappyUsers></HappyUsers>
     <FeedBack></FeedBack>
     <ContactSection></ContactSection>

     
    </div>
  )
}

export default App
