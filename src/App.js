import { SearchBar } from "./components/index";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    searchText: "",
  };

  handleInput = (event) => {
    console.log(event);
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <>
        <SearchBar handleInput={this.handleInput} />
      </>
    );
  }
}

export default App;

// , <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal></Modal>
