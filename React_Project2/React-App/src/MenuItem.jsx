export const MenuItem = ({name, price, onOrder}) => {
    return(
        <div>
            <span>{name} - Rs.{price} ----  </span>
            <button onClick={() => 
                onOrder(name, price)}>Order</button>
        </div>
    )

}