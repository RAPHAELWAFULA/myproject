import React from "react";
import { Card, Button } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

function App() {
  const firstName = "wafula";

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Body>
          <Image />
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <h4 style={{ marginTop: "20px" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h4>
      {firstName && (
        <img
          src="DSC_0023.JPG"
          alt="profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        />
      )}
    </div>
  );
}

export default App;
