import "./App.css";
import React, { useState } from "react";
import ActorList from "./components/ActorList";
import { GlobalStyle, ThemeButton, NavbarRow } from "./styles";
import { ThemeProvider } from "styled-components";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import navbarItems from "./elements/navbarItems";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavbarRow>
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "dark" : "light"} Mode
        </ThemeButton>
        <div>
          {navbarItems.map((element) => (
            <Navbar element={element} />
          ))}
        </div>
      </NavbarRow>
      <br/>
      <br/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/what's new" exact>
            <h1>What's New Page</h1>
          </Route>
          <Route path="/actor" exact>
            <ActorList />
          </Route>
          <Route path="/contact us">
            <Contact />
          </Route>
          <Route path="/404" exact>
            <h1>404</h1>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
