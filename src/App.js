import React from 'react';

//import necessary components
import PopupWindow from "./components/PopupWindow/popup-window.component";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: "",
      showPopup: false
    }
  }

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  closePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  componentDidMount() {
    window.addEventListener("beforeunload", () => this.closePopup());
  }

  render(){
    const { inputValue, showPopup } = this.state;

    return (
      <div className="main-container">
        <p>{inputValue || "I'm empty"}</p>

        <button onClick={() => this.togglePopup()}>
          Open the popup
        </button>
        {
          showPopup ?
              <PopupWindow closePopup={this.closePopup}>
                <input
                    type="text"
                    onChange={(e) => this.handleInputValue(e)}
                    placeholder="Enter your text..."
                />
              </PopupWindow>
              :
              null
        }
      </div>
    );
  }

}

export default App;
