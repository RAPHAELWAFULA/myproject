import React from "react";
import product from "./product";
// import Laptop.jpg "/assets/laptop.jpg";

function Image() {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{ width: "150px", height: "150px" }}
    />
  );
}

export default Image;
