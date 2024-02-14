import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

const userDataBase = [
  {
    userID: 1,
    userName: "Dario",
    userImageURL: "https://i.pravatar.cc/300?u=da@cin.com",
  },
  {
    userID: 2,
    userName: "Miguel",
    userImageURL: "https://i.pravatar.cc/300?u=miguel@cin.com",
  },
  {
    userID: 3,
    userName: "Roland",
    userImageURL: "https://i.pravatar.cc/300?u=Roland@cin.com",
  },
];

const userCardComponents = userDataBase.map((item) => (
  <UserCard
    key={item.userID}
    userName={item.userName}
    userImageURL={item.userImageURL}
  />
));

const HomePage: React.FC = () => (
  <div className="home-page">
    <Header />
    <main>{userCardComponents}</main>
    <Footer />
  </div>
);

export default HomePage;
