import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from "./pages/Rent";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
