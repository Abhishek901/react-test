import React, { Component } from "react";
import { Modal, Card, Col, Button, Form, FormGroup } from "react-bootstrap";
import "./cover-pic-selector.css";
import DataService from "../../../data-laye.js";
import { ToastContainer, toast } from "react-toastify";
import { Stage, Layer } from "react-konva";
import CoverEditor from "./cover-editor/cover-editor.js";

export default class CoverPicSelector extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.bussiness, props.location.bussiness);
    this.state = {
      image: `${this.props.path}${props.image}`,
      mainEdit: false,
      subEdit: false,
      defaultMain: props.location.bussiness
        ? props.location.bussiness.mainQuote || "Click For Enter Here."
        : "Click For Enter Here.",
      defaultSub: props.location.bussiness
        ? props.location.bussiness.subQuote || "Sub Title Here."
        : "Sub Title Here.",
    };
  }
  mainTitleClicked = async (event) => {
    event.preventDefault();
    const objectMain = {
      mainQuote: this.state.defaultMain,
      Id: this.props.location.bussiness._id,
    };
    const title = await DataService.updateBussiness(objectMain);
    this.setState({
      mainEdit: false,
    });
  };
  subTitleClicked = async (event) => {
    event.preventDefault();
    const objectMain = {
      subQuote: this.state.defaultSub,
      Id: this.props.location.bussiness._id,
    };
    const title = await DataService.updateBussiness(objectMain);
    this.setState({
      subEdit: false,
    });
  };
  editMainInput = (event) => {
    //console.log(event.target.value);
    this.setState({
      defaultMain: event.target.value,
    });
  };
  editSubInput = (event) => {
    //console.log(event.target.value);
    this.setState({
      defaultSub: event.target.value,
    });
  };
  subTitleClickedState = () => {
    this.setState({
      subEdit: !this.state.subEdit,
    });
  };
  mainTitleClickedState = () => {
    this.setState({
      mainEdit: !this.state.mainEdit,
    });
  };
  componentDidMount() {}

  render() {
    let mainEdit, subEdit;
    if (this.state.mainEdit) {
      mainEdit = (
        <div>
          <form name="sub-input" onSubmit={this.mainTitleClicked}>
            <FormGroup controlId="formBasicEmail">
              <Form.Control
                onInput={this.editMainInput}
                type="text"
                placeholder="Edit Sub Input"
              />
              <Form.Text className="text-muted">
                Please Enter your main title here.
              </Form.Text>
              <Button variant="primary" type="submit">
                chnage now
              </Button>
            </FormGroup>
          </form>
        </div>
      );
    } else {
      mainEdit = (
        <h2 onClick={this.mainTitleClickedState}>{this.state.defaultMain}</h2>
      );
    }

    if (this.state.subEdit) {
      subEdit = (
        <div>
          <form name="sub-input" onSubmit={this.subTitleClicked}>
            <FormGroup controlId="formBasicEmail">
              <Form.Control
                onInput={this.editSubInput}
                type="text"
                placeholder="Edit Sub Title"
              />
              <Form.Text className="text-muted">
                Please Enter your sub title here.
              </Form.Text>
              <Button variant="primary" type="submit">
                chnage now
              </Button>
            </FormGroup>
          </form>
        </div>
      );
    } else {
      subEdit = (
        <p onClick={this.subTitleClickedState}> {this.state.defaultSub}</p>
      );
    }

    return (
      <div className="row">
        <div className="col-xl-12 offset-xl-12 col-lg-12 offset-lg-12">

        <CoverEditor
                src="https://image.shutterstock.com/z/stock-photo-horizontal-photo-happy-family-with-little-kids-watching-funny-video-on-phone-sitting-on-couch-enjoy-1296270142.jpg"
                x={0}
                y={0}
              ></CoverEditor>










          {/* <Stage width={400} height={500}>
            <Layer>
              <CoverEditor
                src="https://konvajs.org/assets/yoda.jpg"
                x={0}
                y={0}
              ></CoverEditor>
            </Layer>
          </Stage> */}
          {/* <div className="main-slide-title text-center mb-30">
            <div id="container"></div>
            <div className="bannerTexts">
              {mainEdit}
              {subEdit}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
