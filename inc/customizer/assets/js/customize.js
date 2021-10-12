jQuery( document ).on( 'ready', function (e) {
	"use strict";

    wp.customize.bind('ready', function() {
        wp.customize.previewer.bind('url',function(to) {
            localStorage.setItem( 'OceanCustomizePreviewUrl', to );
        })

        if ( localStorage.getItem( 'OceanCustomizePreviewUrl' ) ) {
            wp.customize.previewer.previewUrl( localStorage.getItem( 'OceanCustomizePreviewUrl' ) );
            localStorage.removeItem( 'OceanCustomizePreviewUrl' );
        }
    })


} );
