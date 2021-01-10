import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class BussinessCards extends Component {
  render() {
    let profilePicElement;
    if (this.props.profilePic) {
      profilePicElement = (
        <img
          className="card-img-top"
          src={JSON.parse(this.props.profilePic)}
          alt="Card image cap"
        />
      );
    } else {
      profilePicElement = (
        <img
          className="card-img-top"
          src="/images/googleavatar.png"
          alt="Card image cap"
        />
      );
    }

    return (
      <Col>
        <Link
          to={{
            pathname: `/dashboard/aggrigate-listing/${this.props.title}`,
            bussiness: this.props,
          }}
        >
          <div className="card">
            {profilePicElement}
            <div className="card-body">
              <p className="card-text">{this.props.title}</p>
            </div>
          </div>
        </Link>
      </Col>
    );
  }
}
