import React, { Component } from "react";
import "./Intrigation.css";
import { connect } from "react-redux";
import * as bussinessActions from "../../../../redux/actions/business.action.js";
import Cards from "../../../components/Intrigation-cards/intregation-cards";
import { Row, Container } from "react-bootstrap";
class Intrigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadBussiness();
  }

  render() {
    const beforeLoad = (
      <div className="loading">
        <h3>Loading......................</h3>
      </div>
    );
    const afterLoad = (
      <div>
        <Container className="my-container">
          <Row>
            <Cards
              name="Google"
              bussiness={this.props.bussiness}
              type="o-auth"
            ></Cards>
            <Cards
              name="Zomato"
              bussiness={this.props.bussiness}
              type="pop-up"
            ></Cards>
            <Cards
              name="Facebook"
              bussiness={this.props.bussiness}
              type="o-auth"
            ></Cards>
            <Cards
              name="Yelp"
              bussiness={this.props.bussiness}
              type="pop-up"
            ></Cards>
            <Cards
              name="Booking.com"
              bussiness={this.props.bussiness}
              type="o-auth"
            ></Cards>
          </Row>
        </Container>
      </div>
    );
    return this.props.isLoading ? beforeLoad : afterLoad;
  }
}

function mapStateToProps({ bussiness, isAuthonticate, isLoading }) {
  return {
    bussiness,
    isAuthonticate,
    isLoading,
  };
}

const mapDispatchToProps = {
  loadBussiness: bussinessActions.loadBusiness,
};

export default connect(mapStateToProps, mapDispatchToProps)(Intrigation);
