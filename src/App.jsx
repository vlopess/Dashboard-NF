




import './App.css'
import {Card} from "./components/Card/Card.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import RadarChart from "./components/RadarChart/RadarChart.jsx";
import { Header } from "./components/Header/Header.jsx";
import PolarChart from "./components/TreeMapChart/TreeMapChart.jsx";
import PieChart from './components/PieChart/PieChart.jsx';
import BubbleChart from './components/Bubble/BubbleChart.jsx';
import TreeMapChart from "./components/TreeMapChart/TreeMapChart.jsx";

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
              <div id={"BarChart"}>
                  <BarChart/>
              </div>
          </Card>
          <Card>
              <div id={"RadarChart"}>
                  <RadarChart/>
              </div>
          </Card>
          <Card>
              <div id={"ChartTreeMap"}>
                  <TreeMapChart/>
              </div>
          </Card>
          <Card>
              <div id={"PieChart"}>
                  <PieChart/>
              </div>
          </Card>
          <Card>
              <div id={"BubbleChart"}>
                  <BubbleChart/>
              </div>
          </Card>
      </div>
    <Footer/>
    </>
  )
}

export default App
