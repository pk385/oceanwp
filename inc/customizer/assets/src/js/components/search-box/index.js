
import React from "react";
import SearchBoxModal from "./modal";
import SearchHandler from "./search-handler";

const SearchBox = ( { ...props } ) => {

    const _SearchHandler = new SearchHandler();

    return <div className="ocean-customizer-search-box-wrap">
        <SearchBoxModal show = { props.show } onHide = { props.onHide } SearchHandler = { _SearchHandler } ></SearchBoxModal>
    </div>;

}

SearchBox.defaultProps = {
    show: false
}

export default SearchBox;