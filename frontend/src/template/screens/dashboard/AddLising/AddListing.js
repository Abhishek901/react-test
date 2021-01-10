import React, { Component } from "react";
import "./AddListing.css";
import GeoLocation from "../../../components/geo-location/geo-location";
import { connect } from "react-redux";
import * as bussinessActions from "../../../../redux/actions/business.action";
import dataLayer from "../../../../data-laye";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class AddListing extends Component {
  state = {
    bussiness: {},
    isAuthonticate: false,
  };

  componentDidMount() {
    console.log("mounted here");
    // let expiration = window.localStorage.getItem("tokenExpiration");
    // var unixTimestamp = new Date().getTime() / 1000;
    // console.log(unixTimestamp, expiration);
    // if (expiration !== null) {
    //   console.log("here in token passed");
    //   this.setState({ isAuthenticated: true });
    // }
  }

  saveBussiness = async (event) => {
    event.preventDefault();
    console.log(this.state.bussiness);
    this.props.createBussiness(this.state.bussiness);
  };

  setTitleValue = async (event) => {
    if (event) {
      this.setState({
        bussiness: {
          ...this.state.bussiness,
          [event.target.name]: event.target.value,
        },
      });
    }
    console.log(this.state.bussiness);
  };
  

  render() {
    const mainScreen = (
      <div className="empty-state">
        <div>
          <h5>
            It will take just few minuts , please give us some essential
            information
          </h5>
          <hr></hr>
          <form onSubmit={this.saveBussiness}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="title"
                placeholder={this.state.bussiness.title}
              />
              <small id="emailHelp" className="form-text text-muted">
                please enter your brand name here.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Location</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="location"
                placeholder={this.state.location}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Location</label>
              <GeoLocation></GeoLocation>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Categories</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="category"
                placeholder={this.state.category}
              />
            </div>
            <h5>Contact Information</h5>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone Number</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                name="phoneNumber"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={this.state.phoneNumber}

              />
              <small id="emailHelp" className="form-text text-muted">
                Your contact information will be secured by us.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mobile Number</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="mobile"
                placeholder={this.state.mobile}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder={this.state.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Website</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="website"
                placeholder={this.state.website}
              />
            </div>
            <h5>Social Accounts</h5>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Twitter</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="twitter"
                placeholder={this.state.twitter}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Facebook</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="facebook"
                placeholder={this.state.facebook}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Google +</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={this.state.googleplus}
                name="googleplus"
              />
            </div>
            <h5>Additional Information</h5>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Opening Days</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={this.state.openingDays}
                name="openingDays"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Start</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={this.state.from}
                name="from"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">End</label>
              <input
                onChange={this.setTitleValue}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={this.state.to}
                name="to"
              />
            </div>
            <input
              type="button"
              className="ant-btn ant-btn-primary"
              value="add more"
            />
            <h5>Listing Descriptions</h5>
            <hr></hr>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Please give us a complete description
              </label>
              <textarea
                onChange={this.setTitleValue}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="fulldescription"
              ></textarea>
            </div>
            <input
              type="submit"
              className="ant-btn ant-btn-primary"
              value="submit"
            />
          </form>
        </div>
      </div>
    );

    const logoutScreen = <div>You need to log in</div>;
    if (true) {
      return mainScreen;
    }
    return logoutScreen;
  }
}

function mapStateToProps({ bussiness, isAuthonticate }) {
  return {
    bussiness,
    isAuthonticate,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(bussinessActions, dispatch),
//   };
// }

const mapDispatchToProps = {
  createBussiness: bussinessActions.createBussiness,
};

AddListing.propTypes = {
  bussiness: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
