import React, { Component } from "react";
import styled from "styled-components";
import WithAddToPanel from "./withAddToPanel";

const Div = styled.div`
  margin-bottom: 20px;
`;
class ProductOtherView extends Component {
  render() {
    return (
      <Div>
        <span>Prooduct Name</span>

        <button onClick={() => this.props.addToPanel()}>
          Ajouter au panier
        </button>
        <span>LOADING..</span>
        <span>Added</span>
        <span>Error</span>
      </Div>
    );
  }
}

export default WithAddToPanel(ProductOtherView);
