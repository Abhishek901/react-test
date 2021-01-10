import React, { Component } from "react";
import "./aggrigatepage.css";
import { Route, NavLink, Link } from "react-router-dom";
import { Modal, Card, Col, Button, Form } from "react-bootstrap";
import ProfilePicSelector from "../../../components/profile-pic-selector/profile-pic-selector.js";
import CoverPicSelector from "../../../components/cover-pic-selector/cover-pic-selector.js";

export default class EmptyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListing: true,
    };
  }
  render() {
    return (
      <div>
        {/* <section className="listing_breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul
                  className="breadcrumb breadcrumb-style-01 py-0 fadeInUp animated"
                  data-animate="fadeInUp"
                >
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none">
                      Online Reputation Management Software
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none">
                      Pages
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <span>Podium</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        <section className="main-slide">
          <CoverPicSelector
            path="/images/"
            image="test.jpg"
            {...this.props}
          ></CoverPicSelector>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 top-left-sec">
                <ProfilePicSelector
                  path="/images/"
                  image="googleavatar.png"
                  {...this.props}
                ></ProfilePicSelector>
                <div className="Podium">
                  <p>
                    {this.props.location.bussiness
                      ? this.props.location.bussiness.title
                      : this.props.history.push("/dashboard")}
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <div className="dropdown top-review">
                        <button
                          className="btn btn-secondary dropdown-toggle alt-font"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          0 Review
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#"></a>
                          <a className="dropdown-item" href="#"></a>
                          <a className="dropdown-item" href="#"></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 top-right-sec">
                <div>
                  <button type="button" className="view-btn alt-font">
                    Claim this listing
                  </button>
                </div>
                <div className="top-social">
                  <a href="#" className="fb">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" className="twit">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="insta">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="whtsap">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nav-listing">
          <div className="container">
            <div className="row">
              <ul id="nav">
                <li>
                  <a href="#section-01" className="js-anchor-link alt-font">
                    Product Inmormation
                  </a>
                </li>
                <li>
                  <a href="#section-02" className="js-anchor-link alt-font">
                    reviews
                  </a>
                </li>
                <li>
                  <a href="#section-03" className="js-anchor-link alt-font">
                    map
                  </a>
                </li>
                <li>
                  <a href="#section-04" className="js-anchor-link alt-font">
                    features
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="main-sec-text" id="section-01">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-left-sec">
                <h3 className="alt-font">Best For</h3>
                <p>
                  Lorem ipsum dolor sit amet, eum id tritani eleifend, usu ut
                  tota facete. Mel ne nisl sumo, eu eum nemore sententiae
                  elaboraret.t referrentur per.
                </p>
                <h3 className="alt-font">product details</h3>
                <p>
                  Lorem ipsum dolor sit amet, eum id tritani eleifend, usu ut
                  tota facete. Mel ne nisl sumo, eu eum nemore sententiae
                  elaboraret. An mei civibus platonem, brute repudiandae ne sed.
                  Vidisse explicari in duo, probatus scriptorem cum ea. Eam id
                  nominavi deleniti periculis. Mea at semper appetere
                  voluptaria, at latine luptatum consulatu est, te deserunt
                  referrentur per.
                </p>
                <h3 className="alt-font">vendasta pricing details</h3>
                <p>
                  Lorem ipsum dolor sit amet, eum id tritani eleifend, usu ut
                  tota facete. Mel ne nisl sumo, eu eum nemore sententiae
                  elaboraret.t referrentur per.
                </p>
              </div>
              <div className="col-md-6 left-carousel-vd">
                <div
                  className="carousel slide"
                  id="main-carousel"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#main-carousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#main-carousel" data-slide-to="1"></li>
                    <li data-target="#main-carousel" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a href="https://www.rateusonline.com/small-business-recommendation-guide-for-2020/">
                        <img
                          className="img-fluid"
                          alt=""
                          src="https://i.ytimg.com/vi/rU-8MvTLytw/hqdefault.jpg"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a href="https://www.rateusonline.com/why-businesses-should-embrace-negative-reviews/">
                        <img
                          className="img-fluid"
                          alt=""
                          src="https://i.ytimg.com/vi/0rCMFf-IP8Q/hqdefault.jpg"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a href="https://www.rateusonline.com/12-exciting-gadgets-you-should-use-in-2020/">
                        <img
                          className="img-fluid"
                          alt=""
                          src="https://i.ytimg.com/vi/Ro9zr1vlmJY/hqdefault.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="listing-table" id="section-02">
          <div className="container">
            <div className="row">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr className="blue-bg">
                      <td scope="col">Starting Price</td>
                      <td>
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus
                      </td>
                      <td></td>
                    </tr>

                    <tr className="gray-bg">
                      <td>Free Trial</td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i> Yes
                      </td>
                      <td></td>
                    </tr>

                    <tr className="blue-bg">
                      <td>Deployment</td>
                      <td>
                        <i className="fa fa-times-circle cancel-icon"></i>{" "}
                        Installed-Mac
                      </td>
                      <td>
                        <i className="fa fa-times-circle cancel-icon"></i>
                        Installed-Windows
                      </td>
                    </tr>
                    <tr className="blue-bg">
                      <td></td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Installed-Mac
                      </td>
                      <td></td>
                    </tr>
                    <tr className="gray-bg">
                      <td>Training</td>
                      <td>
                        <i className="fa fa-check-circle check-icon check-icon"></i>{" "}
                        In Person
                      </td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i> Live
                        Person
                      </td>
                    </tr>
                    <tr className="blue-bg">
                      <td>Support</td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i> 24/7
                        (Live Rep)
                      </td>
                      <td>
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Business Hours
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="section-03">
          <div className="container">
            <div className="row">
              <div className="covid-sec">
                <h3 className="alt-font">Covid Compliancy</h3>
              </div>
              <div className="col-sm-12 covid-inner-sec">
                <div className="compli-sec-01">
                  <h4 className="alt-font">Consumer Intelligence</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Customer Feedback
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Customer Feedback
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Customer Feedback
                      </a>
                    </div>
                  </div>
                </div>

                <div className="compli-sec-01 mt-3">
                  <h4 className="alt-font">Reporting</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Corporate Reporting
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Dashboard
                      </a>
                    </div>
                  </div>
                </div>

                <div className="compli-sec-01 mt-3">
                  <h4 className="alt-font">Media Monitoring</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> Social
                        Networks Monitoring
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Digital Networks Monitoring
                      </a>
                    </div>
                  </div>
                </div>
                <div className="compli-sec-01 mt-3">
                  <h4 className="alt-font">In-House Management</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Employee Performance
                      </a>
                    </div>
                  </div>
                </div>
                <div className="compli-sec-01 mt-3">
                  <h4 className="alt-font">In-House Management</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> PopUp
                        Chat
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>
                        Notifications
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> In App
                        Messaging
                      </a>
                    </div>
                  </div>
                </div>

                <div className="compli-sec-01 mt-3">
                  <h4 className="alt-font">In-House Management</h4>
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i>{" "}
                        Knowledge Base
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> Lead
                        Development
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> In App
                        Messaging
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="#">
                        <i className="fa fa-check-circle check-icon"></i> Team
                        Inbox
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rateusonline-rating">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4 className="alt-font">RateUsOnline Rating</h4>
                <button
                  type="button"
                  className="btn btn-primary rating-btn alt-font"
                >
                  8.6
                </button>
                <p className="mt-3">
                  trivago rating Index based on 260 reviews across the web
                </p>
              </div>
              <div className="col-md-8 mt-4">
                <div className="rating-summary">
                  <h4 className="text-center mb-3 alt-font">Rating Summary</h4>
                  <div className="row">
                    <div className="col-md-3">
                      <p>Location</p>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <p>Excellent (8.8/10)</p>
                    </div>
                    <div className="col-md-3">
                      <p>Rooms</p>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <p>Excellent (8.8/10)</p>
                    </div>
                    <div className="col-md-3">
                      <p>Services</p>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <p>Excellent (8.8/10)</p>
                    </div>
                    <div className="col-sm-3">
                      <p>Cleaniness</p>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <p>Excellent (8.8/10)</p>
                    </div>
                    <div className="col-md-3">
                      <p>Value For Money</p>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <p>Excellent (8.8/10)</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary show-more-rating-btn alt-font"
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="total-online-review">
          <div className="container total-online-review-inner">
            <div className="row">
              <div className="col-md-3">
                <h4 className="alt-font">Total Online Review</h4>
                <div className="rating">
                  <div className="row">
                    <div className="col-md-3 rating-text">
                      5 <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-7">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-2 rating-text">777</div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-3 rating-text">
                      4 <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-7">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-2 rating-text">777</div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3 rating-text">
                      3 <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-7">
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-sm-2 rating-text">550</div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3 rating-text">
                      2 <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-7">
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-sm-2 rating-text">350</div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-3 rating-text">
                      1 <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="col-md-7">
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="8"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-2 rating-text">350</div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-info alt-font mt-3 share-btn"
                  >
                    <i className="fa fa-share-alt" aria-hidden="true"></i> Share
                    Link
                  </button>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="./images/charts.png"
                  alt="charts-img"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="./images/charts-01.png"
                  alt="charts-img"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-3">
                <img
                  src="./images/charts-01.png"
                  alt="charts-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="review-comments">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="alt-font">Review (62)</h4>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-info alt-font mt-3 comments-btn"
                >
                  <i className="fa fa-share-alt" aria-hidden="true"></i> Write
                  Review
                </button>
                <div className="thumbs-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="./images/thumbs-up.png" alt="" />
                        <span className="ups">15</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="./images/thumbs-down.png" alt="" />
                        <span className="down">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="chat-message">
                  <li className="left">
                    <img
                      src="./images/profile-01.png"
                      alt=""
                      className="profile-photo-sm pull-left"
                    />
                    <div className="chat-item">
                      <div className="chat-item-header">
                        <h5 className="alt-font">Alex Clark</h5>

                        <small className="text-muted">
                          <span>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </span>
                          May 15,2020
                        </small>
                        <span className="share">
                          <i className="fa fa-share" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat...More
                      </p>
                    </div>
                  </li>
                  <li className="right">
                    <img
                      src="./images/profile-01.png"
                      alt=""
                      className="profile-photo-sm pull-right"
                    />
                    <div className="chat-item">
                      <div className="chat-item-header">
                        <h5 className="alt-font">Alex Clark</h5>

                        <small className="text-muted"> May 18,2020</small>
                        <span className="share">
                          <i className="fa fa-share" aria-hidden="true"></i>
                        </span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <img
                          src="./images/emoji-icon.png"
                          alt=""
                          className=""
                        />
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="send-message">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Post a Comment"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        Send
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="map">
                  <img src="./images/map.jpg" alt="" className="img-fluid" />
                </div>
                <div className="input-form">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Post a Comment"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <button
                        type="button"
                        className="view-btn alt-font float-right"
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
