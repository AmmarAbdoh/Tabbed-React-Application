import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppIcon from "./AppIcon";
import CounterApp from "./CounterApp";
import ContactsApp from "./ContactsApp";
import "./css/menu.css";
const Menu = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeTab, setActiveTab] = useState("");

  const handleAppIconClick = (appName) => {
    setActiveComponent(appName);
    setActiveTab(appName);
  };

  return (
    <Container className="menu">
      <div className="tabs">
        <span
          className={
            activeTab === "Counter App" ? "tab-button active" : "tab-button"
          }
          onClick={() => handleAppIconClick("Counter App")}
        >
          <AppIcon name="Counter App" />
        </span>
        <span
          className={
            activeTab === "Contacts App" ? "tab-button active" : "tab-button"
          }
          onClick={() => handleAppIconClick("Contacts App")}
        >
          <AppIcon name="Contacts App" />
        </span>
      </div>
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
        </div>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "20%" }}>
          Choose an App from the Tabs.
        </h1>
      )}
    </Container>
  );
};

export default Menu;
