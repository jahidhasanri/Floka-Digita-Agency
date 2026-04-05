

import './App.css'
import Banner from './components/Banner'
import Expertise from './components/expertise'
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

     
    </div>
  )
}

export default App
