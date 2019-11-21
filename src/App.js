import React from "react";
import "./App.css";
// the hook
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t("This is testing")}</h2>
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
