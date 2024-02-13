import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => (
  <div className="home-page">
    <Header />
    <main>
      <p>This is the content of the homepage.</p>
    </main>
    <Footer />
  </div>
);

export default HomePage;
