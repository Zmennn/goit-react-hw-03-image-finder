import { SearchBar, ImageGallery } from "./components/index";
import "./App.css";
import { Component } from "react";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    searchText: "",
  };

  handleSubmit = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const { handleSubmit, state } = this;
    return (
      <>
        <SearchBar handleSubmit={handleSubmit} />

        <ImageGallery searchRequest={state.searchText} />

        <ToastContainer />
      </>
    );
  }
}

export default App;
