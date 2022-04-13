<?php
/**
 * OceanWP header builder common functions
 *
 * @package OceanWP WordPress theme
 */

/**
 * Returns header builder column elements for the customizer
 */

function oceanwp_hb_column_elements( $i, $j ) {

	// Default elements
	$elements = apply_filters(
		'oceanwp_hb_column_elements',
		array(
			'logo'   => esc_html__( 'Logo', 'oceanwp' ),
			'menu'   => esc_html__( 'Menu', 'oceanwp' ),
			'social' => esc_html__( 'Social Icons', 'oceanwp' ),
			'search' => esc_html__( 'Search', 'oceanwp' ),
		)
	);

	$ele11 = get_theme_mod( 'ocean_hb_column_11_general_elements', array() );
	$ele12 = get_theme_mod( 'ocean_hb_column_12_general_elements', array() );
	$ele13 = get_theme_mod( 'ocean_hb_column_13_general_elements', array() );
	$ele21 = get_theme_mod( 'ocean_hb_column_21_general_elements', array() );
	$ele22 = get_theme_mod( 'ocean_hb_column_22_general_elements', array() );
	$ele23 = get_theme_mod( 'ocean_hb_column_23_general_elements', array() );
	$ele31 = get_theme_mod( 'ocean_hb_column_31_general_elements', array() );
	$ele32 = get_theme_mod( 'ocean_hb_column_32_general_elements', array() );
	$ele33 = get_theme_mod( 'ocean_hb_column_33_general_elements', array() );

	$selected = array_unique(array_merge( $ele11, $ele12, $ele13, $ele21, $ele22, $ele23, $ele31, $ele32, $ele33 ) );

	$active = get_theme_mod( 'ocean_hb_column_' . $i . $j . '_general_elements', array() );

	foreach ($elements as $element => $value) {
		foreach ($selected as $key ) {
			if ( ! in_array( $key, $active, true ) ) {
				if ( $key !== $elements ) {
					unset($elements[$key]);
				}
			}
		}
	}

	// Return elements
	return $elements;

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