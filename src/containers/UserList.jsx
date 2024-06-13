import React from "react";
import List from "../components/List";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { user } = state;
  return { user: user };
}

export default connect(mapStateToProps, null)(List);
