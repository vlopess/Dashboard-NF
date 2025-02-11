






import "./MenuHeader.css";

export const MenuHeader = () => {

    function goToChartBar() {
        let y = document.getElementById("BarChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToChartRadar() {
        let y = document.getElementById("RadarChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToChartPolar() {
        let y = document.getElementById("PolarChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToChartBubble() {
        let y = document.getElementById("BubbleChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div style={{display: "inline-block"}}>
                <div className="radio-inputs">
                    <label className="radio" onClick={goToChartBar}>
                        <input type="radio" name="radio"/>
                        <span className="name">Barra</span>
                    </label>
                    <label className="radio" onClick={goToChartRadar}>
                        <input type="radio" name="radio"/>
                        <span className="name">Radar</span>
                    </label>
                    <label className="radio" onClick={goToChartPolar}>
                        <input type="radio" name="radio"/>
                        <span className="name">Polar Area</span>
                    </label>
                    <label className="radio" onClick={goToChartBubble}>
                        <input type="radio" name="radio"/>
                        <span className="name">Mapa de Bolha</span>
                    </label>
                </div>
            </div>
        </>
    );
}