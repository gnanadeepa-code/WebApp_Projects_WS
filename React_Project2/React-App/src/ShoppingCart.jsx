import { useState } from "react";

//when state is required between components we have to add the state to the parent component and pass its value as props to the child components. THis is called lift the state up.
export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState({
    htmlCourse: 0,
    reactCourse: 0,
  });

  const prices = {
    htmlCourse: 1000,
    reactCourse: 5000,
  };

  const handleAddHtmlCourse = () => {
    setCartItems({
      ...cartItems,
      htmlCourse: cartItems.htmlCourse + 1,
    });
  };
  const handleAddReactCourse = () => {
    if (cartItems.reactCourse < 5) {
      setCartItems({
        ...cartItems,
        reactCourse: cartItems.reactCourse + 1,
      });
    }
  };

  const clearCart = () => {
    setCartItems({
        htmlCourse :0,
        reactCourse :0,
    });
  };

  return (
    <div>
      <h2>Shopping Cart Component</h2>
      <ProductCard
        name="Html Course"
        price={prices.htmlCourse}
        quantity={cartItems.htmlCourse}
        onAddToCart={handleAddHtmlCourse}
      />
      <ProductCard
        name="React Course"
        price={prices.reactCourse}
        quantity={cartItems.reactCourse}
        onAddToCart={handleAddReactCourse}
      />
      <CartSummary cartItems={cartItems} prices={prices} />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export const ProductCard = ({ name, price, quantity, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs.{price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export const CartSummary = ({ cartItems, prices }) => {
  const totalItems = cartItems.reactCourse + cartItems.htmlCourse;
  const totalPrice =
    cartItems.htmlCourse * prices.htmlCourse +
    cartItems.reactCourse * prices.reactCourse;

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total items:{totalItems}</p>
      <p>Total Price: Rs.{totalPrice.toFixed(2)}</p>
    </div>
  );
};
