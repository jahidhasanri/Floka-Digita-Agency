

import './App.css'
import Banner from './components/Banner'
import Expertise from './components/expertise'
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

     
    </div>
  )
}

export default App
