<?php
/**
 * OceanWP theme icons
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'oceanwp_theme_icons' ) ) {

	/**
	 * OceanWP Theme Icons
	 *
	 * @since 2.0
	 */
	function oceanwp_theme_icons() {

		$oceanwp_theme_icons = array(
			'home'     => array(
				'sili' => 'icon-home',
				'fai'  => 'fas fa-home',
				'svg'  => 'homepage',
			),
			'search'   => array(
				'sili' => 'icon-magnifier',
				'fai'  => 'fas fa-search',
				'svg'  => 'search',
			),
			'user'     => array(
				'sili' => 'icon-user',
				'fai'  => 'fas fa-user-circle',
				'svg'  => 'author',
			),
			'date'     => array(
				'sili' => 'icon-clock',
				'fai'  => 'far fa-calendar-alt',
				'svg'  => 'date-published',
			),
			'm_date'   => array(
				'sili' => 'icon-note',
				'fai'  => 'far fa-calendar-check',
				'svg'  => 'date-modified',
			),
			'category' => array(
				'sili' => 'icon-folder',
				'fai'  => 'far fa-folder-open',
				'svg'  => 'categories',
			),
			'r_time'   => array(
				'sili' => 'icon-cup',
				'fai'  => 'fas fa-mug-hot',
				'svg'  => 'reading-time-hourglass',
			),
			'comment'  => array(
				'sili' => 'icon-bubble',
				'fai'  => 'far fa-comments',
				'svg'  => 'comments',
			),
			'quote'    => array(
				'sili' => 'icon-speech',
				'fai'  => 'far fa-comment-dots',
				'svg'  => 'quotes',
			),
			's_quote'  => array(
				'sili' => 'icon-speech',
				'fai'  => 'fas fa-quote-right',
				'svg'  => 'quotes',
			),
			'link'     => array(
				'sili' => 'icon-link',
				'fai'  => 'fas fa-link',
				'svg'  => 'link',
			),
			'close'    => array(
				'sili' => 'icon-close',
				'fai'  => 'fas fa-times-circle',
				'svg'  => 'close',
			),
			'close_x'  => array(
				'sili' => 'icon-close',
				'fai'  => 'fas fa-times',
				'svg'  => 'close',
			),
			'eye'      => array(
				'sili' => 'icon-eye',
				'fai'  => 'far fa-eye',
				'svg'  => 'eye',
			),
			'menu'       => array(
				'sili' => 'icon-menu',
				'fai'  => 'fas fa-bars',
				'svg'  => 'mobile-menu',
			),
			'grid'       => array(
				'sili' => 'icon-grid',
				'fai'  => 'fas fa-th',
				'svg'  => 'grid-view',
			),
			'list'       => array(
				'sili' => 'icon-list',
				'fai'  => 'fas fa-list',
				'svg'  => 'list-view',
			),
			'angle_up' => array(
				'sili' => 'fa fa-angle-up',
				'fai'  => 'fa fa-angle-up',
				'svg'  => 'small-arrow-up',
			),
			'angle_down' => array(
				'sili' => 'fa fa-angle-down',
				'fai'  => 'fa fa-angle-down',
				'svg'  => 'small-arrow-down',
			),
			'angle_left' => array(
				'sili' => 'arrow-left',
				'fai'  => 'fa fa-angle-left',
				'svg'  => 'small-arrow-left',
			),
			'angle_right' => array(
				'sili' => 'fa fa-angle-right',
				'fai'  => 'fa fa-angle-right',
				'svg'  => 'small-arrow-right',
			),
			'chevron_up'     => array(
				'sili' => 'arrow-up',
				'fai'  => 'fa fa-chevron-up',
				'svg'  => 'chevron-up',
			),
			'caret_up'     => array(
				'sili' => 'fa fa-caret-up',
				'fai'  => 'fa fa-caret-up',
				'svg'  => 'caret-up',
			),
			'double_arrows_up'     => array(
				'sili' => 'fa fa-angle-double-up',
				'fai'  => 'fa fa-angle-double-up',
				'svg'  => 'double-arrows-up',
			),
			'long_arrow_alt_up'     => array(
				'sili' => 'fas fa-long-arrow-alt-up',
				'fai'  => 'fas fa-long-arrow-alt-up',
				'svg'  => 'long-arrow-alt-up',
			),
			'long_arrow_alt_down'     => array(
				'sili' => 'fas fa-long-arrow-alt-down',
				'fai'  => 'fas fa-long-arrow-alt-down',
				'svg'  => 'long-arrow-alt-down',
			),
			'long_arrow_alt_left'     => array(
				'sili' => 'fas fa-long-arrow-alt-left',
				'fai'  => 'fas fa-long-arrow-alt-left',
				'svg'  => 'long-arrow-alt-left',
			),
			'long_arrow_alt_right'     => array(
				'sili' => 'fas fa-long-arrow-alt-right',
				'fai'  => 'fas fa-long-arrow-alt-right',
				'svg'  => 'long-arrow-alt-right',
			),
			'arrow_alt_circle_up'     => array(
				'sili' => 'fa fa-arrow-alt-circle-up',
				'fai'  => 'fa fa-arrow-alt-circle-up',
				'svg'  => 'arrow-alt-circle-up',
			),
			'arrow_up'     => array(
				'sili' => 'fa fa-arrow-up',
				'fai'  => 'fa fa-arrow-up',
				'svg'  => 'arrow-up',
			),
			'level_up_alt'     => array(
				'sili' => 'fa fa-level-up-alt',
				'fai'  => 'fa fa-level-up-alt',
				'svg'  => 'level-up-alt',
			),
			'caret_square_up'     => array(
				'sili' => 'fa fa-caret-square-up',
				'fai'  => 'fa fa-caret-square-up',
				'svg'  => 'caret-square-up',
			),
			'heart'  => array(
				'sili' => 'far fa-heart',
				'fai'  => 'far fa-heart',
				'svg'  => 'wishlist',
			),

			// Cart icon.
			'icon_basket'     => array(
				'sili' => 'icon-basket',
				'fai'  => 'icon-basket',
				'svg'  => 'cart-menu-1',
			),
			'icon_handbag'     => array(
				'sili' => 'icon-handbag',
				'fai'  => 'icon-handbag',
				'svg'  => 'cart-menu-4',
			),
			'shopping_basket'     => array(
				'sili' => 'fas fa-shopping-basket',
				'fai'  => 'fas fa-shopping-basket',
				'svg'  => 'cart-menu-2',
			),
			'shopping_bag'     => array(
				'sili' => 'fas fa-shopping-bag',
				'fai'  => 'fas fa-shopping-bag',
				'svg'  => 'shopping-bag',
			),
			'shopping_cart'     => array(
				'sili' => 'fas fa-shopping-cart',
				'fai'  => 'fas fa-shopping-cart',
				'svg'  => 'shopping-cart',
			),

			// Social icons.
			'twitter'     => array(
				'sili' => 'fab fa-twitter',
				'fai'  => 'fab fa-twitter',
				'svg'  => 'twitter',
			),
			'facebook'    => array(
				'sili' => 'fab fa-facebook',
				'fai'  => 'fab fa-facebook',
				'svg'  => 'facebook',
			),
			'pinterest'     => array(
				'sili' => 'fab fa-pinterest-p',
				'fai'  => 'fab fa-pinterest-p',
				'svg'  => 'pinterest',
			),
			'dribbble'     => array(
				'sili' => 'fab fa-dribbble',
				'fai'  => 'fab fa-dribbble',
				'svg'  => 'dribbble',
			),
			'vk'         => array(
				'sili' => 'fab fa-vk',
				'fai'  => 'fab fa-vk',
				'svg'  => 'vkontakte',
			),
			'instagram'     => array(
				'sili' => 'fab fa-instagram',
				'fai'  => 'fab fa-instagram',
				'svg'  => 'instagram',
			),
			'linkedin'     => array(
				'sili' => 'fab fa-linkedin',
				'fai'  => 'fab fa-linkedin',
				'svg'  => 'linkedin',
			),
			'tumblr'     => array(
				'sili' => 'fab fa-tumblr',
				'fai'  => 'fab fa-tumblr',
				'svg'  => 'tumblr',
			),
			'github'     => array(
				'sili' => 'fab fa-github-alt',
				'fai'  => 'fab fa-github-alt',
				'svg'  => 'github',
			),
			'flickr'     => array(
				'sili' => 'fab fa-flickr',
				'fai'  => 'fab fa-flickr',
				'svg'  => 'flickr',
			),
			'skype'     => array(
				'sili' => 'fab fa-skype',
				'fai'  => 'fab fa-skype',
				'svg'  => 'skype',
			),
			'youtube'     => array(
				'sili' => 'fab fa-youtube',
				'fai'  => 'fab fa-youtube',
				'svg'  => 'youtube',
			),
			'vimeo'     => array(
				'sili' => 'fab fa-vimeo-square',
				'fai'  => 'fab fa-vimeo-square',
				'svg'  => 'vimeo',
			),
			'vine'     => array(
				'sili' => 'fab fa-vine',
				'fai'  => 'fab fa-vine',
				'svg'  => 'vine',
			),
			'xing'     => array(
				'sili' => 'fab fa-xing',
				'fai'  => 'fab fa-xing',
				'svg'  => 'xing',
			),
			'yelp'     => array(
				'sili' => 'fab fa-yelp',
				'fai'  => 'fab fa-yelp',
				'svg'  => 'yelp',
			),
			'tripadvisor'     => array(
				'sili' => 'fab fa-tripadvisor',
				'fai'  => 'fab fa-tripadvisor',
				'svg'  => 'tripadvisor',
			),
			'rss'     => array(
				'sili' => 'fa fa-rss',
				'fai'  => 'fa fa-rss',
				'svg'  => 'rss',
			),
			'envelope'     => array(
				'sili' => 'fa fa-envelope',
				'fai'  => 'fa fa-envelope',
				'svg'  => 'gmail',
			),
			'tiktok'     => array(
				'sili' => 'fab fa-tiktok',
				'fai'  => 'fab fa-tiktok',
				'svg'  => 'tiktok',
			),
			'medium'     => array(
				'sili' => 'fab fa-medium-m',
				'fai'  => 'fab fa-medium-m',
				'svg'  => 'medium',
			),
			'stackoverflow'  => array(
				'sili' => 'fab fa-stack-overflow',
				'fai'  => 'fab fa-stack-overflow',
				'svg'  => 'stackoverflow',
			),
			'twitch'  => array(
				'sili' => 'fab fa-twitch',
				'fai'  => 'fab fa-twitch',
				'svg'  => 'twitch',
			),
		);

		return apply_filters( 'oceanwp_theme_icons', $oceanwp_theme_icons );
	}
}

/**
 * Get correct icon class
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_icon_class' ) ) {

	function oceanwp_theme_icon_class() {

		$i_class = get_theme_mod( 'ocean_theme_default_icons', 'svg' );

		if ( 'sili' === $i_class  ) {
			$ti_class = 'sili';
		} elseif ( 'fai' === $i_class ) {
			$ti_class = 'fai';
		} elseif ( 'svg' === $i_class ) {
			$ti_class = 'svg';
		} else {
			return __( 'Please select an icon type.', 'oceanwp' );
		}

		return apply_filters( 'oceanwp_theme_icon_class', $ti_class );
	}
}

/**
 * Blog Entries Meta Separator Style
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_blog_meta_separator' ) ) {

	function oceanwp_theme_blog_meta_separator() {

		$meta_style = get_theme_mod( 'ocean_blog_meta_separator', 'default' );

		$meta_style = $meta_style ? $meta_style : 'default';

		return apply_filters( 'oceanwp_theme_blog_meta_separator', $meta_style );
	}
}

/**
 * Single Blog Post Meta Separator
 *
 * @since 2.0
 */
if ( ! function_exists( 'oceanwp_theme_single_post_separator' ) ) {

	function oceanwp_theme_single_post_separator() {

		$sep_style = get_theme_mod( 'ocean_blog_single_meta_separator', 'default' );

		$sep_style = $sep_style ? $sep_style : 'default';

		return apply_filters( 'oceanwp_theme_single_post_separator', $sep_style );
	}
}

function get_ocean_icon( $args = array() ) {

	// Make sure $args are an array.
	if ( empty( $args ) ) {
		return __( 'Please define default parameters in the form of an array.', 'oceanwp' );
	}

	// Define an icon.
	if ( false === array_key_exists( 'icon', $args ) ) {
		return __( 'Please define an icon class.', 'oceanwp' );
	}

	// Set defaults.
	$defaults = array(
		'icon'        => '',
		'class'       => '',
		'aria_hidden' => true,
	);

	// Get icon class.
	$theme_icons = oceanwp_theme_icons();
	$icon_class  = oceanwp_theme_icon_class();

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	if ( empty( $args['icon'] ) || 'none' === $args['icon'] ) {
		return;
	}

	// Set aria hidden.
	$aria_hidden = '';

	if ( true === $args['aria_hidden'] ) {
		$aria_hidden = ' aria-hidden="true"';
	}

	$class = '';
	if ( ! empty( $args['class'] ) ) {
		$class = $args['class'];
	}

	// Add SVG markup.
	$icon_html = '<i class="' . $class . ' ' . $theme_icons[ $args['icon'] ][ $icon_class ] . '"' . $aria_hidden . ' role="img"></i>';

	return $icon_html;
}

/**
 * Display the icons
 */
if ( ! function_exists( 'oceanwp_print_icon' ) ) {

	function oceanwp_print_icon( $args = array(), $echo = true ) {

		if ( empty( $args ) ) {
			return __( 'Please define default parameters in the form of an array.', 'oceanwp' );
		}

		$icon      = '';
		$icon_type = get_theme_mod( 'ocean_theme_default_icons', 'svg' );

		if ( isset( $icon_type ) && ! empty( $icon_type ) ) {

			if ( 'sili' === $icon_type || 'fai' === $icon_type ) {
				$icon = get_ocean_icon( $args );
			} elseif( 'svg' === $icon_type ) {
				$icon = ocean_svg_print_icon( $args, false );
			} else {
				return __( 'Please define an icon type.', 'oceanwp' );
			}
		}

		$icon = apply_filters( "oceanwp_print_icon_{$icon}", $icon );

		/**
		 * Print or return icon
		 */
		if ( $echo ) {
			echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $icon;
		}
	}
}

/**
 * OceanWP icon tag
 *
 * @param string  $icon        Icon class.
 * @param bool    $echo        Print string.
 * @param string  $class       Icon class.
 * @param string  $title       Optional SVG title.
 * @param string  $desc        Optional SVG description.
 * @param string  $aria_hidden Optional SVG description.
 * @param boolean $fallback    Fallback icon.
 *
 * @return string OceanWP Icon.
 */
if ( ! function_exists( 'oceanwp_icon' ) ) {

	function oceanwp_icon( $icon, $echo = true, $class = '', $title = '', $desc = '', $aria_hidden = true, $fallback = false ) {

		$icon = oceanwp_print_icon(
				array(
					'icon'        => $icon,
					'class'       => $class,
					'title'       => $title,
					'desc'        => $desc,
					'area_hidden' => $aria_hidden,
					'fallback'    => $fallback,
				), false
			);

		$icon = apply_filters( "oceanwp_icon_{$icon}", $icon );

		/**
		 * Print or return icon
		 */
		if ( $echo ) {
			echo $icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			return $icon;
		}
	}
}