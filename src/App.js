import "./App.css";
import CharactersList from "./Pages/CharactersList";
import { Layout } from "./Layout";
import { Routes, Route } from "react-router-dom";
import { CharacterInfo } from "./CharacterInfo/CharcterInfo";
import { Search } from "./Pages/Search";
import FirstPage from "./firstPage/FirstPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage />} />

          <Route path="search" element={<Search />}></Route>
          <Route path="all-characters" element={<CharactersList />}></Route>

          <Route path="all-characters/:id" element={<CharacterInfo />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
