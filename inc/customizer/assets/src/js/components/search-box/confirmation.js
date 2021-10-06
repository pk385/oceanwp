import React from "react";
import { Modal, Button } from "react-bootstrap";
import { __ } from '@wordpress/i18n';

const ConfirmDialog = ( { ...props } ) => {
    return <>
        <Modal
            dialogClassName="ocean-customize-search-modal"
             show={true} onHide={ props.onHide } animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{ __( 'Confirmation!' ) }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ __( 'Do you really want to move into "%u"?' ).replace( '%u', props.partLabel ) }</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" style={ { marginRight: '5px' } } size="sm" onClick={ props.onHide }>{ __( 'Close' ) }</Button>
                <Button variant="primary" size="sm" onClick={ () => {
                    props.onRedirect( props.part, props.sectionName, props.ElementID )
                } }>{ __( 'Open in new tab' ) }</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default ConfirmDialog;