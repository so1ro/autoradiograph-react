import React from "react";
import { Helmet } from "react-helmet";
import "./css/not-found.styl";

const NotFound = () => {
  return (
    <section className="history component">
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
      <p className="wrap">
        <figure className="avatar kagaya"></figure>
        <br />
        申し訳ありません。お探しのページは見当たりませんでした。
        <br />
        <a href="../">こちら</a>からトップページへ移動してください。
        <br />
        <br />
        Sorry, the page you tried to go doesn't exist.
        <br />
        Please go back to the top page from <a href="../">here</a>.
      </p>
    </section>
  );
};

export default NotFound;
