import { useState } from "react";
import "./App.css";
import "./output.css";
import Home from "./pages/HomeComponent";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <main className="main-content bg-slate-800 px-11">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
