import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./css/not-found.styl";

const NotFound = ({ lang }) => {
  return (
    <section className="notfound component">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Not found | 放射線像／Autoradiograph｜公式サイト／Official website
        </title>
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
      <div className="wrap">
        <figure className="avatar kagaya"></figure>

        {lang === "jp" && (
          <p>
            申し訳ありません。
            <br className="sp" />
            お探しのページは見当たりませんでした。
            <br />
            <NavLink to="/">こちら</NavLink>からトップページへ移動してください。
          </p>
        )}

        {lang !== "jp" && (
          <p className="en">
            Sorry, the page you tried to go doesn't exist.
            <br />
            Please go back to the top page from <NavLink to="/">here</NavLink>.
          </p>
        )}
      </div>
    </section>
  );
};

export default NotFound;
