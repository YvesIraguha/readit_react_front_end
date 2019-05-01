import React from "react";

export default () => (
  <section className="navbar">
    <div className="logo">
      <img
        src={require("../../assets/icons/open-book.svg")}
        alt="Logo"
        className="icon"
      />
    </div>
    <div className="profile">
      <div className="avatar">
        <img
          src={require("../../assets/images/user.png")}
          alt="Profile"
          className="icon"
        />
      </div>
      <div className="username">
        <p>Joe Doe</p>
      </div>
    </div>
  </section>
);
