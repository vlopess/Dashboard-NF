




import './App.css'
import {Card} from "./components/Card/Card.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import RadarChart from "./components/RadarChart/RadarChart.jsx";
import { Header } from "./components/header/header.jsx";
import PolarChart from "./components/PolarChart/PolarChart.jsx";
import PieChart from './components/PieChart/PieChart.jsx';
import BubbleChart from './components/Bubble/BubbleChart.jsx';

function App() {
  return (
    <>
    
    <Header/>
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw"
      }}>
          <Card>
              <div>
                  <BarChart/>
              </div>
          </Card>
          <Card>
              <div>
                  <RadarChart/>
              </div>
          </Card>
          <Card>
              <div>
                  <PolarChart/>
              </div>
          </Card>
          <Card>
              <div>
                  <PieChart/>
              </div>
          </Card>
          <Card>
              <div>
                  <BubbleChart/>
              </div>
          </Card>
      </div>
    <Footer/>
    </>
  )
}

export default App
