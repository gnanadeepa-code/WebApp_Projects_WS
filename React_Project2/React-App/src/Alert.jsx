export const Alert = ({children, type= "success"}) => {
    return <div style={{
        backgroundColor: type === "success" ? "lightblue" : "lightgoldenrodyellow",
        color: "black",
        padding: "2rem",
        borderRadius: "1em",
        marginBottom : "3rem",
    }}>{children}</div>;
};