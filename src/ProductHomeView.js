import React, { Component } from "react";
import styled from "styled-components";

import WithAddToPanel from "./withAddToPanel";
import { getProducts } from "./Redux/actions/getProducts";

const Div = styled.div`
  margin-bottom: 20px;
`;
class ProductHomeView extends Component {
  render() {
    return (
      <Div>
        <span>Prooduct Name</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa
          aut laborum dicta enim neque saepe aspernatur, et eos suscipit ea
          consequuntur iure vel ducimus nisi voluptatum corrupti dolore a
          laboriosam. Officiis repudiandae, nulla ipsam repellat, temporibus
          praesentium ducimus earum, facilis quae sunt fuga consequuntur
          voluptate corporis nemo?
        </p>
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

export default WithAddToPanel(ProductHomeView);
