import "./Alert.css";

//Eventhough we import Alert.css in this file alone, but it is taken globally, so when the className = error is given in someother file it will pickup from this alert .error class which conflicts, so the 3rd approach css modules is best for solving this styling issues
export const Alert = ({children, type= "success"}) => {
    return <div className={`alert ${type}`}>{children}</div>;
    /* return <div style={{
        backgroundColor: type === "success" ? "lightblue" : "lightgoldenrodyellow",
        color: "black",
        padding: "2rem",
        borderRadius: "1em",
        marginBottom : "3rem",
    }}>{children}</div>; */
};