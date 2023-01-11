import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>

      <Nav />

      <main className="content">
        <h1>WELCOME!!!</h1>
        <p>Navigate to the users to view our users log</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
