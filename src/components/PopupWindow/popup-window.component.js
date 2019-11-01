//import libraries
import React from "react";
import ReactDOM from "react-dom";

//import styles
import "./popup-window.styles.scss";

class PopupWindow extends React.Component{
    constructor(props){
        super(props);

        this.containerElement = null;
        this.externalWindow = null;

        this.state = {
          isContentLoaded: false
        };
    }

    componentDidMount(){

        this.externalWindow = window.open("", "", "width=600,height=400,left=200,top=200");
        this.containerElement = this.externalWindow.document.createElement("div");
        this.externalWindow.document.body.appendChild(this.containerElement);

        this.setState({
            isContentLoaded: true
        });
        this.externalWindow.addEventListener("beforeunload", () => this.props.closePopup());
    }
    componentWillUnmount() {
        this.externalWindow.close();
    }

    render(){
        if(!this.containerElement){
            return null;
        }
            return ReactDOM.createPortal(this.props.children, this.containerElement);
    }

}

export default PopupWindow;