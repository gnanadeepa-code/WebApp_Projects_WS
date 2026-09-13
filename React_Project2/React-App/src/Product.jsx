//Props with destructuring mtd - widely used since it is cleaner, no dots required.
export const Product = (title, price, inStock, categories) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Price: Rs.{price}</p>
      <p>In Stock: {inStock ? "Yes" : "No"}</p>
      <p>Categories:{categories.join(", ")}</p> 
    </div>
  );
};

//Below the props without destructuring
export const Product1 = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Price: Rs.{props.price}</p>
      <p>In Stock: {props.inStock ? "Yes" : "No"}</p>
      <p>Categories:{props.categories.join(", ")}</p> {/* Join is used to join the array elts with comma separated */}
    </div>
  );
};
