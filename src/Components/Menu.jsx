import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppIcon from "./AppIcon";
import CounterApp from "./CounterApp";
import ContactsApp from "./ContactsApp";

const Menu = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleAppIconClick = (appName) => {
    setActiveComponent(appName);
  };

  const handleBackClick = () => {
    setActiveComponent(null);
  };

  return (
    <Container className="menu">
      {activeComponent ? (
        <div className="app">
          <div>
            {activeComponent === "Counter App" && (
              <>
                <CounterApp />
              </>
            )}
            {activeComponent === "Contacts App" && (
              <>
                <ContactsApp />
              </>
            )}
          </div>
          <button onClick={handleBackClick} className="btn back-btn">
            Back
          </button>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col md={6} sm={12} onClick={() => handleAppIconClick("Counter App")}>
            <AppIcon name="Counter App" />
          </Col>
          <Col
            md={6}
            sm={12}
            onClick={() => handleAppIconClick("Contacts App")}
          >
            <AppIcon name="Contacts App" />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Menu;
