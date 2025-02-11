import "./Footer.css";


export const Footer = () => {
    return (
        <>
            <div className={"stack"}>
                <img src="https://capsule-render.vercel.app/api?type=waving&height=125&color=0024FF&animation=fadeIn&descAlign=77&fontSize=30&fontColor=FFF&section=footer&reversal=true" alt="footer"/>
                <p>Feito por <a target={"_blank"} href="https://github.com/CarolLimav">Caroline Lima</a> e <a href="https://github.com/vlopess" target={"_blank"}>Victor Lopes</a></p>
            </div>
        </>
    );
}