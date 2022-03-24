<?php
/**
 * OceanWP header builder common functions
 *
 * @package OceanWP WordPress theme
 */

/**
 * Returns header builder column elements for the customizer
 */
if ( ! function_exists( 'oceanwp_hb_column_elements' ) ) {

	function oceanwp_hb_column_elements() {

		// Default elements
		$elements = apply_filters(
			'oceanwp_hb_column_elements',
			array(
				'logo'         => esc_html__( 'Logo', 'oceanwp' ),
				'menu'         => esc_html__( 'Menu', 'oceanwp' ),
				'social_menu'  => esc_html__( 'Social Menu', 'oceanwp' ),
				'search_icon'  => esc_html__( 'Search Icon', 'oceanwp' ),
				'search_bar'   => esc_html__( 'Search Bar', 'oceanwp' ),
			)
		);

		// Return elements
		return $elements;

	}
}

/**
 * Returns blog entry elements positioning
 *
 * @since 1.1.0
 */
if ( ! function_exists( 'oceanwp_hb_column_elements_positioning' ) ) {

	function oceanwp_hb_column_elements_positioning( $row, $col ) {

		$sections = array();

		$data     = array();
		$sections = get_theme_mod( 'ocean_hb_column_' . $row . $col . '_general_elements', array() );

		if ( $sections && ! is_array( $sections ) ) {
			$sections = explode( ',', $sections );
		}

		$sections = apply_filters( 'oceanwp_hb_column_elements_positioning', $sections );

		// Return sections
		return $sections;

	}
}