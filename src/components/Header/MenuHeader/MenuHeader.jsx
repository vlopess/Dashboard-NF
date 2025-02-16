






import "./MenuHeader.css";
import {useEffect, useState} from "react";

export const MenuHeader = () => {

    const [top, setTop] = useState("25%");

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



    function goToPieChart() {
        let y = document.getElementById("PieChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToChartTreeMap() {
        let y = document.getElementById("ChartTreeMap").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    function goToChartBubble() {
        let y = document.getElementById("LineChart").offsetTop;
        window.scroll({
            top: y - 80,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        const handleResize = () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    setTop("2.5%");
                } else {
                    setTop("25%");
                }
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    },[]);

    return (
        <>
            <div style={{display: "inline-block", position: "fixed", top: top, left: "50%",transform: "translateX(-50%)"}}>
                <div className="radio-inputs">
                    <label className="radio" onClick={goToChartBar}>
                        <input type="radio" name="radio"/>
                        <span className="name">BarChart</span>
                    </label>
                    <label className="radio" onClick={goToChartRadar}>
                        <input type="radio" name="radio"/>
                        <span className="name">RadarChart</span>
                    </label>
                    <label className="radio" onClick={goToChartTreeMap}>
                        <input type="radio" name="radio"/>
                        <span className="name">TreeMap</span>
                    </label>
                    <label className="radio" onClick={goToPieChart}>
                        <input type="radio" name="radio"/>
                        <span className="name">PieChart</span>
                    </label>
                    <label className="radio" onClick={goToChartBubble}>
                        <input type="radio" name="radio"/>
                        <span className="name">LineChart</span>
                    </label>
                </div>
            </div>
        </>
    );
}