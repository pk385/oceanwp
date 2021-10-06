jQuery( document ).on( 'ready', function (e) {
	"use strict";
    jQuery( document ).on('change', '.oceanwp-customizer-tabs', function( e ) {
        e.preventDefault();
        var doRedirection = true;
        if ( ! jQuery( '#customize-save-button-wrapper #save' ).is( ':disabled' ) ) {
            if ( ! confirm( wp.i18n.__( 'Do you really want to move without saving?', 'oceanwp' ) ) ) {
                doRedirection = false;
            } else {
                jQuery( '#customize-save-button-wrapper #save' ).focus();
            }
        }

        var type = jQuery(this).val();
        if( doRedirection === true ) {
            var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + '?oceanwp-customizer-part=' + type;
            window.history.replaceState({ path: refresh }, '', refresh);
            document.location.replace( refresh );
        }
    });

    wp.customize.bind('ready', function() {
        wp.customize.previewer.bind('url',function(to) {
            localStorage.setItem( 'OceanCustomizePreviewUrl', to );
        })

        if ( localStorage.getItem( 'OceanCustomizePreviewUrl' ) ) {
            wp.customize.previewer.previewUrl( localStorage.getItem( 'OceanCustomizePreviewUrl' ) );
        }
    })


} );
