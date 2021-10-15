import { SearchBar, ImageGallery } from "./components/index";
import "./App.css";
import { Component } from "react";

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
      </>
    );
  }
}

export default App;

//   <Loader>, <> и <Modal></Modal>
