<?php
/**
 * General Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_HB_General_Customizer' ) ) :

	/**
	 * Settings for general options
	 */
	class OceanWP_HB_General_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', array( $this, 'customizer_options' ) );
			add_filter( 'ocean_head_css', array( $this, 'head_css' ) );

		}

		/**
		 * Customizer options
		 *
		 * @param WP_Customize_Manager $wp_customize Reference to WP_Customize_Manager.
		 * @since 3.2.0
		 */
		public function customizer_options( $wp_customize ) {

			/**
			 * Panel
			 */
			$panel = 'ocean_hb_panel';
			$wp_customize->add_panel(
				new OceanWP_Customize_Panel(
					$wp_customize,
					$panel,
					array(
						'title'           => esc_html__( 'Header Builder', 'oceanwp' ),
						'priority'        => 210,
						'active_callback' => 'oceanwp_cac_has_header_builder',
					)
				)
			);

			$wp_customize->add_section(
				new OceanWP_Customize_Section(
					$wp_customize,
					'ocean_hb_section_general',
					array(
						'title'    => esc_html__( 'General', 'oceanwp' ),
						'priority' => 10,
						'panel'    => $panel,
					)
				)
			);

			/**
			 * Header Row
			 */
			$wp_customize->add_setting( 'ocean_hb_row_count', array(
				'default'           	=> '3',
				'sanitize_callback' 	=> 'oceanwp_sanitize_number',
			) );

			$wp_customize->add_control(
				new OceanWP_Customizer_Range_Control(
					$wp_customize,
					'ocean_hb_row_count',
					array(
						'label'	   				=> esc_html__( 'Header Row', 'oceanwp' ),
						'section'  				=> 'ocean_hb_section_general',
						'priority' 				=> 10,
						'input_attrs' 			=> array(
							'min'   => 1,
							'max'   => 3,
							'step'  => 1,
						),
					)
				)
			);

			$i = 0;
			$j = 0;
			for ( $i = 1; $i <= 3; $i++ ) {

				$wp_customize->add_panel(
					new OceanWP_Customize_Panel(
						$wp_customize,
						'ocean_hb_panel_row_' . $i . '',
						array(
							'title'    => esc_html__( 'Row '. $i .'', 'oceanwp' ),
							'priority' => 10,
							'panel'    => $panel,
							'active_callback' => 'oceanwp_cac_has_header_builder_row_' . $i . '',
						)
					)
				);

				$wp_customize->add_section(
					new OceanWP_Customize_Section(
						$wp_customize,
						'ocean_hb_row_' . $i . '_general',
						array(
							'title'    => esc_html__( 'General', 'oceanwp' ),
							'priority' => 10,
							'panel'    => 'ocean_hb_panel_row_' . $i . '',
						)
					)
				);

				/**
				 * HeaderInner Column
				 */
				$wp_customize->add_setting('ocean_hb_row_column_count_' . $i . '', array(
					'default'           	=> '3',
					'sanitize_callback' 	=> 'oceanwp_sanitize_number',
				) );

				$wp_customize->add_control(
					new OceanWP_Customizer_Range_Control(
						$wp_customize,
						'ocean_hb_row_column_count_' . $i . '',
						array(
							'label'	   				=> esc_html__( 'Columns', 'oceanwp' ),
							'section'  				=> 'ocean_hb_row_' . $i . '_general',
							'priority' 				=> 10,
							'input_attrs' 			=> array(
								'min'   => 1,
								'max'   => 3,
								'step'  => 1,
							),
						)
					)
				);

				for ( $j = 1; $j <= 3; $j++ ) {
					$wp_customize->add_panel(
						new OceanWP_Customize_Panel(
							$wp_customize,
							'ocean_hb_panel_column_' . $i . $j . '',
							array(
								'title'           => esc_html__( 'Column '. $j .'', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_row_' . $i . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '',
							)
						)
					);

					/**
					 * Column General Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_general',
							array(
								'title'    => esc_html__( 'General', 'oceanwp' ),
								'priority' => 10,
								'panel'    => 'ocean_hb_panel_column_' . $i . $j . '',
							)
						)
					);

					/**
					 * Blog Entries Elements Positioning
					 */
					$wp_customize->add_setting(
						'ocean_hb_column_' . $i . $j . '_general_elements',
						array(
							'default'           => array(),
							'sanitize_callback' => 'oceanwp_sanitize_multi_choices',
						)
					);

					$wp_customize->add_control(
						new OceanWP_Customizer_Sortable_Control(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_general_elements',
							array(
								'label'           => esc_html__( 'Elements Positioning', 'oceanwp' ),
								'section'         => 'ocean_hb_column_' . $i . $j . '_general',
								'priority'        => 10,
								'choices'         => oceanwp_hb_column_elements(),
							)
						)
					);

					/**
					 * Column Logo Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_logo',
							array(
								'title'           => esc_html__( 'Logo', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_column_' . $i . $j . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '_elements_logo',
							)
						)
					);

					/**
					 * Column Menu Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_menu',
							array(
								'title'           => esc_html__( 'Menu', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_column_' . $i . $j . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '_elements_menu',
							)
						)
					);

					/**
					 * Column Social Menu Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_social_menu',
							array(
								'title'           => esc_html__( 'Social Menu', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_column_' . $i . $j . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '_elements_social_menu',
							)
						)
					);

					/**
					 * Column Search Icon Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_search_icon',
							array(
								'title'           => esc_html__( 'Search Icon', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_column_' . $i . $j . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '_elements_search_icon',
							)
						)
					);

					/**
					 * Column Search Bar Section
					 */
					$wp_customize->add_section(
						new OceanWP_Customize_Section(
							$wp_customize,
							'ocean_hb_column_' . $i . $j . '_search_bar',
							array(
								'title'           => esc_html__( 'Search Bar', 'oceanwp' ),
								'priority'        => 10,
								'panel'           => 'ocean_hb_panel_column_' . $i . $j . '',
								'active_callback' => 'oceanwp_cac_has_header_builder_column_' . $i . $j . '_elements_search_bar',
							)
						)
					);

					/**
					 * HeaderInner Column
					 */
					$wp_customize->add_setting('ocean_hb_inner_column_count_' . $i . $j . '', array(
						'default'           	=> '3',
						'sanitize_callback' 	=> 'oceanwp_sanitize_number',
					) );

					$wp_customize->add_control(
						new OceanWP_Customizer_Range_Control(
							$wp_customize,
							'ocean_hb_inner_column_count_' . $i . $j . '',
							array(
								'label'	   				=> esc_html__( 'Column Settings', 'oceanwp' ),
								'section'  				=> 'ocean_hb_column_' . $i . $j . '_general',
								'priority' 				=> 10,
								'input_attrs' 			=> array(
									'min'   => 1,
									'max'   => 3,
									'step'  => 1,
								),
							)
						)
					);
				}

			}

		}

		/**
		 * Get CSS
		 *
		 * @param obj $output    css output.
		 * @since 1.0.0
		 */
		public function head_css( $output ) {

			$css = '';

			// Return CSS.
			if ( ! empty( $css ) ) {
				$output .= '/* OceanWP Header Builder CSS */' . $css;
			}

			// Return output css.
			return $output;
		}

	}

endif;

return new OceanWP_HB_General_Customizer();