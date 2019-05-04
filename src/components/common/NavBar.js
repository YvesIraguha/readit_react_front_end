import React from "react";
import openBook from "../../assets/icons/open-book.svg";
import userAvatar from "../../assets/images/user.png";
// eslint-disable-next-line react/display-name
export default () => (
  <section className="navbar">
    <div className="logo">
      <img src={openBook} alt="Logo" className="icon" />
    </div>
    <div className="profile">
      <div className="avatar">
        <img src={userAvatar} alt="Profile" className="icon" />
      </div>
      <div className="username">
        <p>Joe Doe</p>
      </div>
    </div>
  </section>
);
