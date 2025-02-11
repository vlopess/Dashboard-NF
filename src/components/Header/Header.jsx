import "./Header.css"
import {MenuHeader} from "./MenuHeader/MenuHeader.jsx";







export const Header = () => {
    return (
        <>
            <div className={"stack"}>
                <img width={"100%"} src="https://capsule-render.vercel.app/api?type=waving&height=150&color=0024FF&animation=fadeIn&descAlign=77&fontSize=30&fontColor=FFF&reversal=true" alt="header"/>
                <h1>Visualização de Dados das Notas Fiscais Eletrônicas</h1>
            </div>
            <MenuHeader/>
            {/*<header className="header">*/}
            {/*    <div>*/}
            {/*        <nav>*/}
            {/*            <ul className="header-menu">*/}
            {/*                <li><a href="#barra">Barra</a></li>*/}
            {/*                <li><a href="#radar">Radar</a></li>*/}
            {/*                <li><a href="#polar">Polar Area</a></li>*/}
            {/*                <li><a href="#bolha">Mapa de Bolha</a></li>*/}
            {/*                <li><a href="#pizza">Pizza</a></li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
        </>
    );
}




    
