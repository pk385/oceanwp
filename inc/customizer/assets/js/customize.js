jQuery( document ).ready(function($) {
	"use strict";
    $( document ).on('change', '.oceanwp-customizer-tabs', function( e ) {
        e.preventDefault();
        var doRedirection = true;
        if ( ! $( '#customize-save-button-wrapper #save' ).is( ':disabled' ) ) {
            if ( ! confirm( wp.i18n.__( 'Do you really want to move without saving?', 'oceanwp' ) ) ) {
                doRedirection = false;
            } else {
                $( '#customize-save-button-wrapper #save' ).focus();
            }
        }

        var type = $(this).val();
        if( doRedirection === true ) {
            var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?oceanwp-customizer-part=' + type;
            window.history.replaceState({ path: refresh }, '', refresh);
            document.location.replace( refresh );
        }
    });
} )( jQuery, wp.customize );
