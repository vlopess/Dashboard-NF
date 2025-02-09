import "./Card.css";

export const Card = ({children}) => {
    return (
        <>
            <div className={"container"}>
                {children}
            </div>
        </>
    );
}