import React, { Component } from "react";
import styled from "styled-components";
import ProductHomeView from "./ProductHomeView";
import { getProductsStarted } from "./Redux/actions/getProducts";
import { connect } from "react-redux";

const Product = styled.div`
  margin-bottom: 20px;
`;

class ListeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getProductsStarted();
  }
  render() {
    console.log(this.props.products);
    return (
      <div>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
        <ProductHomeView></ProductHomeView>
      </div>
    );
  }
}

export default connect(({ products }) => ({ products }), {
  getProductsStarted
})(ListeProducts);
