import { SearchBar, Button, ImageGallery } from "./components/index";
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

        <Button />
      </>
    );
  }
}

export default App;

//  <ImageGalleryItem>, <Loader>, <> и <Modal></Modal>
