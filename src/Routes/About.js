import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Helmet } from "react-helmet-async";
import "../components/pagination.scss";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="find out about us" />
        <link rel="canonical" href="/About" />
      </Helmet>

      <Nav />

      <main className="AboutPage">
        <div className="AboutHeader">
          <h1>About Us</h1>
        </div>
        <h4>
          We are a group of students who are learning how to code and we are
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit fuga
          est tempore nulla dolore quam nisi molestias tempora dolor labore
          adipisci doloribus eligendi inventore laboriosam, accusamus sapiente
          minus ipsam placeat!
        </h4>
      </main>
      <Footer />
    </>
  );
}

export default About;
