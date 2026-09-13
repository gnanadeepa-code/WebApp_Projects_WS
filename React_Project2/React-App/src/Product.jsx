//Props with destructuring mtd - widely used since it is cleaner, no dots required.
export const Product = ({ title, price, inStock, categories }) => {
  const productList = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
    },
    {
      id: 3,
      name: "Tablet",
      price: 30000,
    },
  ];

  const productElts = productList.filter((product) => {
    return product.price >10000;
  }).map((product) => {
    return (
      <div key= {product.id}>
        <h3>{product.name}</h3>
        <p>Price : Rs.{product.price}</p>
      </div>
    );
  });

  return (
    <div>
      <h3>{title}</h3>
      <p>Price: Rs.{price}</p>
      <p>In Stock: {inStock ? "Yes" : "No"}</p>
      <p>Categories: {categories ? categories.join(",") : ""}</p>

      {productElts}
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
      <p>Categories:{props.categories.join(", ")}</p>{" "}
      {/* Join is used to join the array elts with comma separated */}
    </div>
  );
};
