import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ListeProducts from "./ListeProducts";
import ListePanel from "./ListePanel";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import ListeProductsTwo from "./ListeProductsTwo";
import Axios from "axios";

// 

const StyledLink = styled(Link)`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Button = styled.button`
  background: ${props =>
    props.color === "primary" ? theme.primary : theme.secondary};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "primary"
    };
  }

  changeToSecondary = () => {
    let params = new URLSearchParams();
    params.append("adresseEmail", "taoufiq.benallah@gmail.com");
    params.append("motDePasse", "ZsX321654");

    Axios.post(
      "http://localhost/newconceptsphp/connect.php?roleId=4",
      params
    ).then(response => {
      console.log(response);
    });
    this.setState({ color: "secondary" });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/panel">Panel</StyledLink>
            <StyledLink to="/products">Products</StyledLink>
          </div>
          <Button
            color={this.state.color}
            onClick={() => this.changeToSecondary()}
          >
            PrimarytoSecondary on Click event
          </Button>
          <Button color="secondary">Secondary</Button>
          <Switch>
            <Route exact path="/" component={ListeProducts}></Route>
            <Route path="/panel" component={ListePanel}></Route>
            <Route path="/products" component={ListeProductsTwo}></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
