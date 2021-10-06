
class SearchHandler {

    /**
     * SearchHandler Constructor
     *
     * @returns
     */
    constructor(  ) {

        /**
         * Check Controls Are Empty or Not Empty
         */
        if ( this.controls ) {
            return true;
        }

        this.init();
        this.listener();
    }

    setShowProgress( setShowProgress ) {
        this.removeProgress = () => {
            setShowProgress( false );
        }
    }

    listener() {
        var url = new URL( window.location.href );
        var elementID = url.searchParams.get("elementID");
        var sectionName = url.searchParams.get("sectionName");

        if ( elementID !== null && sectionName !== null ) {
            this.expandSection( sectionName );

            setTimeout( function() {
                if ( jQuery( '#customize-control-' + elementID ).length ) {
                    jQuery( '#customize-controls .wp-full-overlay-sidebar-content' ).animate(
                        { scrollTop: jQuery( '#customize-control-' + elementID ).offset().top - 50 }
                    , "slow" );
                }
            }, 1500 )

            setTimeout( () => {
                jQuery( '#customize-control-' + elementID ).removeClass( 'ocean-control-focused' );
            }, 8000 );
        }
    }

    expandSection( sectionName ) {
        const section = wp.customize.section( sectionName );
        section.expand();
    }

    updateCustomizerSettings( settings ) {
        jQuery.ajax({
            type: "post",
            url: wp.ajax.settings.url,
            data: {
                'action': 'ocean-update-customize-settings',
                'settings': JSON.stringify( settings )
            },
            dataType: "json",
        });
    }

    async init() {
        var self = this;
        var _wpCustomizeAllSettings = Object.keys( oceanwpTG.wpCustomizeSettings ).length &&
                                      typeof oceanwpTG.wpCustomizeSettings === 'object' ? oceanwpTG.wpCustomizeSettings : {};

        if( ! Object.keys( _wpCustomizeAllSettings ).length ) {

            var parts = jQuery( 'select.oceanwp-customizer-tabs option' ).map(function(i,e) { return jQuery( e ).val() } );

            for (var i = 0; i < parts.length; i++) {
                _wpCustomizeAllSettings [ parts [ i ] ] = await this.getData( parts [ i ] );
            }

            oceanwpTG.wpCustomizeSettings = _wpCustomizeAllSettings;
            self.updateCustomizerSettings( _wpCustomizeAllSettings );

            jQuery.when.apply(undefined, _wpCustomizeAllSettings).then(function( ) {
                self.updateControls( _wpCustomizeAllSettings, self );
            })

        } else {
            self.updateControls( _wpCustomizeAllSettings, self );
        }

        setTimeout(() => {
            self.removeProgress();
        }, 500);
    }


    /**
     * Map The Controls
     */
    updateControls( _wpCustomizeAllSettings, self ) {
        self.controls = [];
        jQuery.map( _wpCustomizeAllSettings, function( settings, part ) {
            jQuery.map( settings.controls, function( control, cid ) {
                control.part = part;
                jQuery.map( settings.sections, function( section, i ) {
                    if ( control.section == section.id ) {
                        jQuery.map( settings.panels, function( panel, i ) {
                            if ( '' == section.panel ) {
                                control.panelName = section.title;
                            }

                            if ( section.panel == panel.id ) {
                                control.sectionName = section.title;
                                control.panel = section.panel;
                                control.panelName = panel.title;
                            }
                        });
                    }
                });

                self.controls.push( control );
            });
        });
    }

    async getData( part ) {
        return jQuery.ajax({
            type: "get",
            url: window.location.href,
            data: {
                'oceanwp-customizer-part': part,
                'ocean_action': 'get_controls'
            },
            dataType: "json",
        });
    }

    /**
     * Search In Controls
     *
     * @param {string} string
     * @returns
     */
    searchInControls( string ) {
        if ( ! string ) {
            return [];
        }

        return this.controls.filter( control => {

            if ( control.panelName === null ) control.panelName = '';
            if ( control.sectionName === null ) control.sectionName = '';
            const regex = new RegExp(string, 'gi');

            if ( typeof control.content !== 'undefined' ) {
                if ( control.content.match(regex) )
                    return control.content.match(regex);
            }

            if ( typeof control.label !== 'undefined' ) {
                if ( control.label.match(regex) )
                    return control.label.match(regex);
            }

            if ( typeof control.panelName !== 'undefined' ) {
                if ( control.panelName.match(regex) )
                    return control.panelName.match(regex);
            }

            if ( typeof control.sectionName !== 'undefined' ) {
                if ( control.sectionName.match(regex) )
                    return control.sectionName.match(regex);
            }
        });
    }
}

export default SearchHandler;