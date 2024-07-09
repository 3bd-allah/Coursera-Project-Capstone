// in this component i use some meta tags and some open graph protocol to optimize SEO "search engine optimization"
// i use helmet library for this purpose
import React from "react";
import { Helmet } from "react-helmet";
import logo from '../assets/logo.jpg'
const SEO = () => {
  return (
    <>
      <Helmet>
        <meta name="title" content="summary of what the page is about" />
        <meta name="og:title" content="Little Lemon Reserve a Table" />
        <meta name="og:description" content="description of the page" />
        <meta name="og:image" content={logo} />
        {/* OR */}
        {/* <meta name="og:image" content={require("../assets/logo L.jpg")} /> */}

      </Helmet>
    </>
  );
};

export default SEO;
