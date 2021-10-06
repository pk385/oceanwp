
import React from "react";
import { Form, ListGroup, Modal, Badge, Spinner, Button, InputGroup } from "react-bootstrap";
import { __ } from '@wordpress/i18n';
import ConfirmDialog from "./confirmation";

const SearchBoxModal = ( { ...props } ) => {

    const [ searchResults, setsearchResults ] = React.useState( '' );
    const [ confirmDialog, setConfirmDialog ] = React.useState( '' );

    // Customize Parts
    var parts = {};
    jQuery( 'select.oceanwp-customizer-tabs option' ).map(function(i,e) {
        parts[ jQuery( e ).val() ] = jQuery( e ).html()
    } );

    var currentPart = jQuery( 'select.oceanwp-customizer-tabs' ).val();

    // Close Confirmation Dialog
    const confirmDialogOnHide = () => {
        setConfirmDialog( '' );
    }

    // Do Redirect ( Confirmation Dialog )
    const onRedirect = ( part ,sectionName, elementID ) => {
        setConfirmDialog( '' );
        var url = '/wp-admin/customize.php?oceanwp-customizer-part=' + part + '&sectionName=' + sectionName + '&elementID=' + elementID;
        window.open(url, '_blank').focus();
    }

    /**
     * Hide the Finder &
     * Expand Customize Sections When Click on Each Item
     *
     * @param {string} sectionName
     * @param {string} ElementID
     */
    const ClickHandler = ( sectionName, ElementID, controlPart ) => {

        if ( controlPart !== currentPart ) {
            setConfirmDialog(
                <ConfirmDialog
                onHide = { confirmDialogOnHide }
                onRedirect = { onRedirect }
                part = { controlPart }
                partLabel = { parts [ controlPart ] }
                sectionName = { sectionName }
                ElementID = { ElementID }
                ></ConfirmDialog>
            )
            return false;
        }

        const section = wp.customize.section( sectionName );
        section.expand();
        setsearchResults( '' );
        jQuery( '.ocean-customize-search-modal' ).parent().fadeOut();
        jQuery( '.modal-backdrop.show' ).removeClass( 'show' );
        jQuery( '#customize-control-' + ElementID ).addClass( 'ocean-control-focused' );

        setTimeout( function() {
            jQuery( '.ocean-customize-search-modal .modal-header button.close' ).trigger( 'click' ).trigger( 'mouseup' )
            if ( jQuery( '#customize-control-' + ElementID ).length ) {
                jQuery( '#customize-controls .wp-full-overlay-sidebar-content' ).animate(
                    { scrollTop: jQuery( '#customize-control-' + ElementID ).offset().top - 50 }
                , "slow" );
            }
        }, 1500 )

        setTimeout( () => {
            jQuery( '#customize-control-' + ElementID ).removeClass( 'ocean-control-focused' );
        }, 8000 );
    }

    /**
     * Search Handler
     *
     * @param {element} e
     * @returns
     */
    const onSearch = ( e ) => {
        var search = e.target.value;
        var searchInControlsResults = props.SearchHandler.searchInControls( search );
        searchInControlsResults = searchInControlsResults.slice(0, 30);
        setsearchResults( '' );

        if ( ! searchInControlsResults.length ) {
            return false;
        }

        /**
         * Prepare View From Search Result
         */
        var list = searchInControlsResults.map( function( data, index ) {

            if ( ! data.label || typeof data.panelName === 'undefined' ) {
                return;
            }

            return <ListGroup.Item
                key          = { index }
                id           = { `accordion-section-${data.section}` }
                className    = "accordion-section control-section control-section-default"
                style        = { currentPart === data.part ? { order : -1 } : {} }
                aria-owns    = { `sub-accordion-section-${data.section}` }
                onClick      = { () => { ClickHandler( data.section, data.settings.default, data.part ) } }
                action>

                <span>{ String(data.label) }</span>

                <br />

                <Badge className={ currentPart === data.part ? "btn-success" : "btn-warning" }>
                    { parts [ data.part ] }
                </Badge>

                <Badge className="btn-primary">
                    { data.panelName }{ data.sectionName ? " ‎» " + data.sectionName : '' }
                </Badge>

            </ListGroup.Item>
        })

        setsearchResults( list );
    }

    return <>
        { confirmDialog }
        <Modal
            size="lg"
            show = { props.show }
            onHide = { props.onHide }
            dialogClassName="ocean-customize-search-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{ __( "OceanWp - Customize Finder" ) }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="search">
                    <InputGroup>
                        <Form.Control type="text" placeholder={ __( "Search..." ) } disabled={ props.showProgress }  onChange={ onSearch } />
                        { props.showProgress ?
                            <Button variant="secondary" disabled>
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                            </Button>
                        : '' }
                    </InputGroup>
                    <Form.Text className="text-muted">
                        { props.showProgress ?
                            __( "Please Wait, We are currently collecting controls data." )
                          : __( "Please enter the option name." )
                        }
                    </Form.Text>
                </Form.Group>
                <ListGroup className="mt-4">
                    { searchResults }
                </ListGroup>
            </Modal.Body>
        </Modal>
    </>
}

export default SearchBoxModal;