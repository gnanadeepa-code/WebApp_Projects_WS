import { MenuItem } from "./MenuItem"

export const Menu = () => {
    const handleOrder = (itemName, itemPrice) => {
        alert(`You Ordered: ${itemName} for ${itemPrice}`)
    }
    return(
        <div>
            <h2>Our Menu</h2>
            <MenuItem name={"Dosa"} price={50} onOrder={handleOrder} />
            <MenuItem name={"Idly"} price={10} onOrder={handleOrder} />
            <MenuItem name={"Pongal"} price={40} onOrder={handleOrder} />
            <MenuItem name={"Vada"} price={15} onOrder={handleOrder} />
        </div>
    )
}