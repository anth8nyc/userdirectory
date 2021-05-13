import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import UserSearch from "./pages/UserSearch";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
    <Hero/>
    <UserSearch/>
    </>

    // <Router>
    //   <div>
    //     <Navbar />
    //     <Wrapper>
    //       <Route exact path="/" component={About} />
    //       <Route exact path="/about" component={About} />
    //       <Route exact path="/discover" component={Discover} />
    //       <Route exact path="/search" component={Search} />
    //       <Route exact path="/usersearch" component={UserSearch} />
    //     </Wrapper>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
