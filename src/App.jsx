import Comingsoon from "./Component/Comingsoon";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NowShowing from "./Component/NowShowing";
import Slider from "./Component/Slider";

const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <NowShowing/>
      <Comingsoon/>
      <Footer/>

    </div>
  )
}

export default App