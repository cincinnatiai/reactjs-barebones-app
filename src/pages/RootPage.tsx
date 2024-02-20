import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootPage: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default RootPage;
