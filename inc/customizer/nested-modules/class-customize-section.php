<?php
/**
 * Nested section.
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( class_exists( 'WP_Customize_Section' ) ) {

	/**
	 * Adds a custom Customize Section for nested sections.
	 */
	class OceanWP_Customize_Section extends WP_Customize_Section {

		/**
		 * Section
		 *
		 * @var string
		 */
		public $section;

		/**
		 * Control type.
		 *
		 * @var string
		 */
		public $type = 'oceanwp_section';

		/**
		 * Get section parameters for JS.
		 *
		 * @return array Exported parameters.
		 */
		public function json() {
			$array                   = wp_array_slice_assoc( (array) $this, array( 'id', 'description', 'priority', 'panel', 'type', 'description_hidden', 'section' ) );
			$array['title']          = html_entity_decode( $this->title, ENT_QUOTES, get_bloginfo( 'charset' ) );
			$array['content']        = $this->get_content();
			$array['active']         = $this->active();
			$array['instanceNumber'] = $this->instance_number;

			if ( $this->panel ) {
				/* translators: The title. */
				$array['customizeAction'] = sprintf( esc_html__( 'Customizing &#9656; %s', 'oceanwp' ), esc_html( $this->manager->get_panel( $this->panel )->title ) );
			} else {
				$array['customizeAction'] = esc_html__( 'Customizing', 'oceanwp' );
			}

			return $array;
		}
	}
}
