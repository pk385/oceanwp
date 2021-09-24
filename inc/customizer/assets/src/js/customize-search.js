import React from "react";
import { __ } from '@wordpress/i18n';
import { render } from 'react-dom';
import SearchBox from './components/search-box';
import '../css/customize-search-style.scss';

const CustomizeSearch = () => {

    const [ showModal, setshowModal ] = React.useState( false );

    /**
     * Hide Modal
     */
    const handleShowModal = () => {
        setshowModal( false );
    }

    return <>
        <a className="customize-controls-ocean-search dashicons dashicons-search"
            onClick = { () => {
                setshowModal( true );
                return false;
            }}>
            <span className="screen-reader-text">{ __( 'Search' ) }</span>
        </a>
        { showModal ? <SearchBox show = { showModal } onHide = { handleShowModal }></SearchBox> : '' }
    </>;
}

jQuery( window ).load(function() {
    jQuery('#customize-header-actions').append("<div id=\"ocean-wp-customize-search\"></div>");
    render( <CustomizeSearch></CustomizeSearch>, document.getElementById( 'ocean-wp-customize-search' ) );
})