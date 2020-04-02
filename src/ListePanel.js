import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const PanelContainer = styled.div`
  width: 70%;
  margin: 30px auto;
`;
const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${theme.primary};
  color: white;
  border: none;
  padding: 3px 10px;
`;

class ListePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PanelContainer>
          <Product>
            <span>Product</span>
            <div>
              <Button>Retirer</Button>
              <button>Loading..</button>
            </div>
          </Product>
          <Product>
            <span>Product</span>
            <div>
              <button>Retirer</button>
              <button>Loading..</button>
            </div>
          </Product>
          <Product>
            <span>Product</span>
            <div>
              <button>Retirer</button>
              <button>Loading..</button>
            </div>
          </Product>
          <Product>
            <span>Product</span>
            <div>
              <button>Retirer</button>
              <button>Loading..</button>
            </div>
          </Product>
          <Product>
            <span>Product</span>
            <div>
              <button>Retirer</button>
              <button>Loading..</button>
            </div>
          </Product>
        </PanelContainer>
      </ThemeProvider>
    );
  }
}

export default ListePanel;
