<?php
/**
 * OceanWP header builder structure
 *
 * @package OceanWP WordPress theme
 */

// Start and run class
if ( ! class_exists( 'OceanWP_Header_Builder_Structure' ) ) {

	/**
	 * Var
	 *
	 * @var number
	 */
	$row = 0;

	/**
	 * Var
	 *
	 * @var string
	 */
	$column = 0;

	class OceanWP_Header_Builder_Structure {

		/**
		 * Main Class Constructor
		 *
		 * @since 3.2.0
		 */
		public function __construct() {

			add_action( 'ocean_hb_header_inner', array( $this, 'ocean_hb_add_row' ) );
			add_action( 'wp', array( $this, 'ocean_hb_add_inner_column' ), 11 );
			add_action( 'wp', array( $this, 'ocean_hb_add_inner_column_elements' ), 11 );

			$this->row = intval( get_theme_mod( 'ocean_hb_row_count', '3' ) );

		}

		/**
		 * Add row
		 */
		public function ocean_hb_add_row() {

			if ( ! empty( $this->row ) ) {

				for ( $i = 1; $i <= $this->row; $i++ ) {

					$this->column = intval( get_theme_mod( "ocean_hb_row_column_count_{$i}", '3' ) );

					$args = array (
						'row'    => $i,
						'column' => $this->column,
					);
					?>

					<div id="ocean-hb-row-<?php echo esc_attr( $i ); ?>" class="ocean-hb-row hb-row-<?php echo esc_attr( $i ); ?>">
						<?php do_action( "ocean_hb_row_{$i}", $i, $this->column ); ?>
					</div>

					<?php
				}
			}

		}

		/**
		 * Inner column
		 */
		public function ocean_hb_add_inner_column() {

			if ( ! empty( $this->row ) ) {

				for ( $i = 1; $i <= $this->row; $i++ ) {

					$this->column = intval( get_theme_mod( "ocean_hb_row_column_count_{$i}", '3' ) );

					if ( 1 === $this->column ) {
						$this->column = 10;
					}

					add_action( "ocean_hb_row_{$i}", array( $this, 'hb_inner_column' ), $i, $this->column );
				}
			}
		}

		/**
		 * Generate HTML for inner column
		 */
		public function hb_inner_column( $row, $col ) {

			if ( 10 === $col ) {
				$col = 1;
			}

			if ( $col ) {
				for ( $i = 1; $i <= $col; $i++ ) {
					?>
					<div class="col-<?php echo esc_attr( $row ); ?><?php echo esc_attr( $i ); ?> ocean-hb-inner-column hb-inner-column-<?php echo esc_attr( $i ); ?>">
						<?php do_action( "ocean_hb_inner_column_{$row}{$i}", $row, $i ); ?>
					</div>
					<?php
				}
			}
		}

		/**
		 * Inner column elements
		 */
		public function ocean_hb_add_inner_column_elements() {

			if ( ! empty( $this->row ) ) {

				for ( $i = 1; $i <= $this->row; $i++ ) {

					$this->column = intval( get_theme_mod( "ocean_hb_row_column_count_{$i}", '3' ) );

					for ( $j = 1; $j <= $this->column; $j++ ) {

						$k = $j;
						if ( 1 === $j ) {
							$k = 10;
						}

						add_action( "ocean_hb_inner_column_{$i}{$j}", array( $this, 'hb_inner_column_elements' ), $i, $k );
					}

				}
			}
		}

		/**
		 * Generate HTML for inner column elements
		 */
		public function hb_inner_column_elements( $row, $col ) {

			if ( 10 === $col ) {
				$col = 1;
			}

			if ( $col ) {
				echo $this->oceanwp_header_builder_html_wrapper( $row, $col );
			}
		}

		/**
		 * HTML Wrapper
		 */
		public function oceanwp_header_builder_html_wrapper( $row, $col ) {

			?>

			<div class="ocean-hb-elements-container clr">

				<?php
				// Get elements.
				$elements = oceanwp_hb_column_elements_positioning( $row, $col );


				// Loop through elements.
				foreach ( $elements as $element ) {

					// Featured Image.
					if ( 'logo' === $element ) {

						get_template_part( 'partials/header/logo' );

					}

					// Title.
					if ( 'menu' === $element ) {

						get_template_part( 'partials/header/nav' );

					}

					// Meta.
					if ( 'social_menu' === $element ) {

						get_template_part( 'partials/header/social' );

					}

				}
				?>

			</div>

			<?php
		}

	}

	new OceanWP_Header_Builder_Structure();

}