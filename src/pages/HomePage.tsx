import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

const HomePage: React.FC = () => (
  <div className="home-page">
    <Header />
    <main>
      <UserCard
        userName="DarioArzaba"
        userImageURL="https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png"
      />
    </main>
    <Footer />
  </div>
);

export default HomePage;
