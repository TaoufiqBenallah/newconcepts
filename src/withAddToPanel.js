import React, { Component } from "react";

const WithAddToPanel = View => {
  class NewView extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    addToPanel = () => {};
    render() {
      return <View type="view" addToPanel={this.addToPanel} />;
    }
  }
  return NewView;
};

export default WithAddToPanel;
