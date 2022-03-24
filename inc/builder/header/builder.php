<?php
/**
 * OceanWP header builder
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if ( ! class_exists( 'OceanWP_Header_Builder' ) ) {

	class OceanWP_Header_Builder {

		/**
		 * Main Class Constructor
		 *
		 * @since 3.2.0
		 */
		public function __construct() {

			if ( 'builder' !== oceanwp_header_style() ) {
				return;
			}

			$this->ocean_hb_required();
			add_action( 'wp', array( $this, 'ocean_add_header_builder_hook' ) );

		}

		/**
		 * Enable support for OceanWP Header Builder theme location.
		 */
		public function ocean_add_header_builder_hook() {

			add_action( 'ocean_header', array( $this, 'ocean_hb_do_header' ), 0 );
			add_action( 'ocean_hb_header', array( $this, 'ocean_hb_html_wrapper' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'ocean_hb_css' ) );

		}

		/**
		 * Load neccessary files
		 */
		protected function ocean_hb_required() {
			$dir = OCEANWP_INC_DIR;
			require_once $dir . 'builder/header/structure.php';
			require_once $dir . 'builder/header/common.php';
		}

		/**
		 * Load styles
		 */
		public function ocean_hb_css() {
			wp_enqueue_style( 'oceanwp-header-builder', OCEANWP_INC_DIR_URI . 'builder/header/assets/css/ocean-header-builder.css', false, OCEANWP_THEME_VERSION );
		}

		/**
		 * Remove default action to load OceanWP header builder
		 */
		public function ocean_hb_do_header() {

			$did_location = $this->location_manager( 'header' );
			if ( $did_location ) {
				remove_action( 'ocean_header', 'oceanwp_header_template' );
			}
		}

		/**
		 * Add location
		 */
		public function location_manager( $location ) {

			if ( 'header' === $location ) {

				if ( ! did_action( 'ocean_hb_header' ) ) {
					do_action( 'ocean_hb_header', $this );
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}

		}

		/**
		 * Content
		 */
		public function ocean_hb_html_wrapper() {

			// Header height, used for local scrolling.
			$header_height = get_theme_mod( 'ocean_header_height', '74' );

			if ( class_exists( 'Ocean_Sticky_Header' ) ) {

				if ( 'shrink' === get_theme_mod( 'osh_sticky_header_style', 'shrink' ) ) {
					$header_height = get_theme_mod( 'osh_shrink_header_height', '54' );
				}
			}

			// Add container class if the header is not full width.
			$class = '';
			if ( true !== get_theme_mod( 'ocean_header_full_width', false ) ) {
				$class = 'container';
			}

			do_action( 'ocean_before_header' );

			?>
			<header id="site-header" class="ocean-header-builder <?php echo esc_attr( oceanwp_header_classes() ); ?>" data-height="<?php echo esc_attr( $header_height ); ?>"<?php oceanwp_schema_markup( 'header' ); ?> role="banner">
				<?php do_action( 'ocean_before_header_inner' ); ?>
				<div id="site-header-inner" class="clr <?php echo esc_attr( $class ); ?>">
					<?php do_action( 'ocean_hb_header_inner' ); ?>
				</div>
				<?php do_action( 'ocean_after_header_inner' ); ?>
			</header>
			<?php

			do_action( 'ocean_after_header' );
		}
	}

	new OceanWP_Header_Builder();

}