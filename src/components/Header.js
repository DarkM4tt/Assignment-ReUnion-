import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between space-x-5 h-20 w-full border-b-2 bg-white">
      <div className="flex items-center space-x-8 ml-10">
        {/* Logo, Name */}
        <div className="flex space-x-2 justify-center items-center w-28 h-10">
          <FaEnvelopeOpen color="#4351cd" />
          <h1 className="text-lg text-blue-900 font-bold">Estatery</h1>
        </div>

        {/* Options */}
        <div className="flex font-medium items-center text-gray-700 space-x-8">
          <p className="bg-violet-200 text-violet-600 px-2 py-1 rounded">
            Rent
          </p>
          <p>Buy</p>
          <p>Sell</p>
          <p>Manage Property ˅</p>
          <p>Resources ˅</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 pr-10">
        <button className="text-violet-800 font-medium border border-violet-500 rounded-md px-3 py-1">
          Login
        </button>
        <button className="text-white bg-violet-500 font-medium border border-violet-500 rounded-md px-3 py-1">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
