import React, { Component } from "react";
import PictureGrid from "../../components/pictureGrid";
import { getPressList } from "./data/press";
import { getActive } from "../../components/common/getActiveClass";

class Press extends Component {
  state = { pressList: [...getPressList()] };

  render() {
    const pressList = this.state.pressList;
    const { lang, tabSelect } = this.props;

    return (
      <div className={"press" + getActive(tabSelect, "press")}>
        <PictureGrid lang={lang} items={pressList} />
      </div>
    );
  }
}
export default Press;
