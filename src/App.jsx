




import './App.css'
import {Card} from "./components/Card/Card.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import RadarChart from "./components/RadarChart/RadarChart.jsx";

function App() {
  return (
    <>
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
                  <h1>Test</h1>
              </div>
          </Card>
          <Card>
              <div>
                  <h1>Test</h1>
              </div>
          </Card>
          <Card>
              <div>
                  <h1>Test</h1>
              </div>
          </Card>
      </div>
    <Footer/>
    </>
  )
}

export default App
