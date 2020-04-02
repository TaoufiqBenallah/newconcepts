import React, { Component } from "react";
import ProductOtherView from "./ProductOtherView";
import { getProductsStarted } from "./Redux/actions/getProducts";

class ListeProductsTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getProductsStarted();
  }

  render() {
    return (
      <div>
        <ProductOtherView></ProductOtherView>
        <ProductOtherView></ProductOtherView>
        <ProductOtherView></ProductOtherView>
      </div>
    );
  }
}

export default ListeProductsTwo;
