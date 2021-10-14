import { SearchBar, Button } from "./components/index";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    searchText: "",
  };

  handleSubmit = (text) => {
    this.setState({ searchText: text });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchText !== this.state.searchText) {
      console.log(this.state.searchText);
    }
  }

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        <Button />
      </>
    );
  }
}

export default App;

// , <ImageGallery>, <ImageGalleryItem>, <Loader>, <> и <Modal></Modal>
