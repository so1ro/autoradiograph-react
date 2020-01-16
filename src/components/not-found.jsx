import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <section className="history component">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not found | 放射線像／Autoradiograph｜公式サイト／Official website</title>
        <link rel="canonical" href="https://www.autoradiograph.org/not-found" />
        <meta
          property="og:title"
          content="Not found | 放射線像／Autoradiograph｜公式サイト／Official website"
        />
        <meta property="og:url" content="www.autoradiograph.org/not-found" />
        <meta
          property="og:site_name"
          content="Not found | 放射線像／Autoradiograph｜公式サイト／Official website"
        />
      </Helmet>
      <h1>Not Found</h1>
    </section>
  );
};

export default NotFound;
