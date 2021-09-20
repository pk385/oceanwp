<?php
/**
 * Isolation Customizer Options
 *
 * @package OceanWP WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'OceanWP_Isolation_Customizer' ) ) :

	class OceanWP_Isolation_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {
			add_action( 'customize_register', array( $this, 'unload_default_components' ), -1 );
			add_action( 'customize_register', array( $this, 'optimize_customizer' ), 100 );
		}

		/**
		 * Unload Default Components
		 *
		 * @since 1.0.0
		 */
		public function unload_default_components( $wp_customize ) {
			$default_type = 'all';
			$type  = isset ( $_REQUEST['oceanwp-customizer-part'] ) ? $_REQUEST['oceanwp-customizer-part'] : $default_type;
			if( $type !== 'all' && $type !== 'default') {
				// Unload Nav Menu Panel
				if ( isset( $wp_customize->nav_menus ) && is_object( $wp_customize->nav_menus ) ) {
					remove_filter( 'customize_refresh_nonces', array( $wp_customize->nav_menus, 'filter_nonces' ) );
					remove_action( 'wp_ajax_load-available-menu-items-customizer', array( $wp_customize->nav_menus, 'ajax_load_available_items' ) );
					remove_action( 'wp_ajax_search-available-menu-items-customizer', array( $wp_customize->nav_menus, 'ajax_search_available_items' ) );
					remove_action( 'customize_controls_enqueue_scripts', array( $wp_customize->nav_menus, 'enqueue_scripts' ) );
					remove_action( 'customize_register', array( $wp_customize->nav_menus, 'customize_register' ), 11 );
					remove_filter( 'customize_dynamic_setting_args', array( $wp_customize->nav_menus, 'filter_dynamic_setting_args' ), 10, 2 );
					remove_filter( 'customize_dynamic_setting_class', array( $wp_customize->nav_menus, 'filter_dynamic_setting_class' ), 10, 3 );
					remove_action( 'customize_controls_print_footer_scripts', array( $wp_customize->nav_menus, 'print_templates' ) );
					remove_action( 'customize_controls_print_footer_scripts', array( $wp_customize->nav_menus, 'available_items_template' ) );
					remove_action( 'customize_preview_init', array( $wp_customize->nav_menus, 'customize_preview_init' ) );
					remove_filter( 'customize_dynamic_partial_args', array( $wp_customize->nav_menus, 'customize_dynamic_partial_args' ), 10, 2 );
				}

				// Unload Widget Panel
				if ( isset( $wp_customize->widgets ) && is_object( $wp_customize->widgets ) ) {
					remove_filter( 'customize_dynamic_setting_args', array( $wp_customize->widgets, 'filter_customize_dynamic_setting_args' ), 10, 2 );
					remove_action( 'widgets_init', array( $wp_customize->widgets, 'register_settings' ), 95 );
					remove_action( 'customize_register', array( $wp_customize->widgets, 'schedule_customize_register' ), 1 );
				}

			}
		}

		/**
		 * Isolate options for customizer
		 *
		 * @since 1.0.0
		 */
		public function optimize_customizer( $wp_customize ) {
			$default_type = 'all';
			$type  = isset ( $_REQUEST['oceanwp-customizer-part'] ) ? $_REQUEST['oceanwp-customizer-part'] : $default_type;
			if( $type !== 'all' && $type !== 'default') {
				$wp_customize->remove_section( 'title_tagline' );
				$wp_customize->remove_section( 'colors' );
				$wp_customize->remove_section( 'header_image' );
				$wp_customize->remove_section( 'background_image' );
				$wp_customize->remove_section( 'static_front_page' );
				// $wp_customize->remove_panel( 'nav_menus' );
				// $wp_customize->remove_panel( 'widgets' );
				// $wp_customize->get_panel( 'nav_menus' )->active_callback = '__return_false';
				// $wp_customize->get_panel( 'widgets' )->active_callback = '__return_false';


				$wp_customize->remove_section( 'custom_css' );
			}
		}
	}

endif;

return new OceanWP_Isolation_Customizer();