import React from "react";
import { __ } from '@wordpress/i18n';
import { render } from 'react-dom';
import SearchBox from './components/search-box';
import '../css/customize-search-style.scss';
import SearchHandler from './components/search-box/search-handler'

var _SearchHandler;

const CustomizeSearch = () => {

    const [ showProgress, setShowProgress ] = React.useState( true );
    const [ showModal, setshowModal ] = React.useState( false );

    _SearchHandler.setShowProgress( setShowProgress );
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
        { showModal ? <SearchBox show = { showModal } showProgress = { showProgress } onHide = { handleShowModal } searchHandler = { _SearchHandler } ></SearchBox> : '' }
    </>;
}

jQuery( window ).on('load', function() {
    _SearchHandler = new SearchHandler( );
    jQuery('#customize-header-actions').append("<div id=\"ocean-wp-customize-search\"></div>");
    render( <CustomizeSearch></CustomizeSearch>, document.getElementById( 'ocean-wp-customize-search' ) );
})