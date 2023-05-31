import Header from "./Header/Header";
import Body from "./Body/Body";
import "./App.css";
import { useState } from "react";

function App() {

  var [searchText, setSearchText] = useState("");

  return (
    <>
      <Header setSearchText={setSearchText}/>
      <Body searchText={searchText}/>
    </>
  );
}

export default App;
