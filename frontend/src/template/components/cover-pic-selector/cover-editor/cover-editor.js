import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import "./cover-editor.css";
export default class CoverEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      higth: 0,
      moveXAmount:0,
      moveYAmount:0,
      prevX:0,
      prevY:0,
      image: null,
      isDragging:false
    };
  }
  componentDidMount() {
    const canvasDiv = document.getElementById("canvasContainer")
    canvasDiv.style.minHeight = '330px'
    const canvasElement = document.createElement("CANVAS");
    canvasElement.style.width ='100%';
    canvasElement.style.height='100%';
    canvasElement.setAttribute("id","ro_canvas");
    // canvasElement.style.backgroundColor = "green";
    canvasElement.width  = canvasDiv.offsetWidth;
    canvasElement.height = canvasDiv.offsetHeight;
    canvasDiv.appendChild(canvasElement);
    canvasDiv.addEventListener('mousedown', e => {
      this.setState((state)=>{
        return {isDragging: true,prevX:0,prevY:0}
      })
      console.log('down')
    });
    canvasDiv.addEventListener('mouseup', e => {
      this.setState((state)=>{
        return {isDragging: false,prevX:0,prevY:0}
      })
      console.log('up')
    });
    canvasDiv.addEventListener('mousemove',e=>{
      if( this.state.isDragging == true )
      {
          if( this.state.prevX>0 || this.state.prevY>0)
          {
             this.setState((state)=>{
                return {
                  moveXAmount: state.moveXAmount + e.pageX - state.prevX,
                  moveYAmount: state.moveYAmount + e.pageY - state.prevY   
                }
             }) 
             console.log(this.state.moveXAmount,this.state.moveYAmount)
             this.drowOnCanvase()
          }
          this.setState ((state)=>{
            return {
              prevX : e.pageX,
              prevY: e.pageY
            }
          })
      }
    })
    this.drowOnCanvase(); 
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      // this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }

  drowOnCanvase(){
    const canvasElement = document.getElementById('ro_canvas');
    const ctx = canvasElement.getContext("2d");
    
    this.loadImage(ctx);
  }
  loadImage(ctx){
   
    ctx.clearRect(0, 0, im_width, im_height);
    this.image = new window.Image();
    this.image.src = this.props.src;
    const im_width = parseInt(this.image.width);
    const im_height = parseInt(this.image.height);
    this.image.addEventListener("load", ()=>{this.handleLoad(ctx,im_width,im_height)});
    

  }
 
  handleLoad = (ctx,im_width,im_height) => {
 
    ctx.drawImage(this.image,this.state.moveYAmount,this.state.moveYAmount)
    ctx.restore();
    this.setState({
      image: this.image,
    });
  };
  render() {
    return (
      <div id="canvasContainer"></div>
    );
  }
}
