//Below function gets jsx elts as children and printing it in the div wrapper
export const CardWrapper = ({title, children}) => {
    return(
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}