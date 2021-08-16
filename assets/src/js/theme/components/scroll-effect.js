import { DOM } from "../../constants";
import { isSelectorValid, offset } from "../../lib/utils";

class ScrollEffect {
    #targetElem;
    #lastScrollTop = 0;

    constructor() {
        if (!DOM.body.classList.contains("single-product") && !DOM.body.classList.contains("no-local-scroll")) {
            this.#setupEventListeners();
        }
    }

    #setupEventListeners = () => {
        document
            .querySelectorAll(
                'a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])'
            )
            .forEach((scrollItem) => {
                scrollItem.addEventListener("click", this.#onScrollItemClick);
            });
    };

    #onScrollItemClick = (event) => {
        const scrollItem = event.currentTarget;

        if (
            !scrollItem.classList.contains("omw-open-modal") &&
            !scrollItem.closest(".omw-open-modal") &&
            !scrollItem.classList.contains("opl-link") &&
            !scrollItem.parentNode.classList.contains("opl-link") &&
            !scrollItem.classList.contains("sidr-class-opl-link") &&
            !scrollItem.parentNode.classList.contains("sidr-class-opl-link")
        ) {
            const href = scrollItem.getAttribute("href");
            const id = href.substring(href.indexOf("#")).slice(1);

            if (isSelectorValid(id)) {
                this.#targetElem = document.querySelector(`#${id}`);
            }

            if (id != "" && !!this.#targetElem) {
                event.preventDefault();
                event.stopPropagation();

                let scrollPosition =
                    offset(this.#targetElem).top -
                    this.#getAdminBarHeight() -
                    this.#getTopbarHeight() -
                    this.#getStickyHeaderHeight();

                DOM.html.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });

                if (
                    !DOM.header.site.classList.contains("top-header") &&
                    !DOM.header.site.classList.contains("medium-header") &&
                    !DOM.header.site.classList.contains("custom-header") &&
                    !DOM.header.site.classList.contains("vertical-header")
                ) {
                    window.addEventListener("scroll", this.#fixMultiMenu);
                }
            }
        }
    };

    #getAdminBarHeight = () => (!!DOM.WPAdminbar ? DOM.WPAdminbar.offsetHeight : 0);

    #getTopbarHeight = () =>
        !!DOM.header.topbarWrapper && DOM.header.topbarWrapper.classList.contains("top-bar-sticky")
            ? DOM.header.topbarWrapper.offsetHeight
            : 0;

    #getStickyHeaderHeight = () => {
        const stickyHeader = document.querySelector("#site-header-sticky-wrapper");

        if (!!stickyHeader) {
            if (DOM.header.site?.classList.contains("top-header")) {
                return Number.parseInt(getComputedStyle(stickyHeader).height);
            }

            if (DOM.header.site?.classList.contains("medium-header")) {
                let height = 0;
                const menu = DOM.header.site.querySelector(".bottom-header-wrap");

                if (menu.classList.contains("fixed-scroll")) {
                    height = menu.offsetHeight;
                } else if (DOM.header.site.classList.contains("hidden-menu")) {
                    height = DOM.header.site.dataset.height;
                } else {
                    height = DOM.header.site.offsetHeight;
                }

                return height;
            }

            if (DOM.header.site?.classList.contains("fixed-header")) {
                return DOM.header.site.offsetHeight;
            }

            if (DOM.header.site?.classList.contains("up-effect")) {
                return 0;
            }

            if (!DOM.header.site && !!document.querySelector(".elementor-sticky")) {
                return 100;
            }

            return DOM.header.site?.dataset.height ?? 54;
        }

        if (!!document.querySelector(".elementor-sticky")) {
            return 80;
        }
    };

    #fixMultiMenu = (event) => {
        const fixedOffset =
            offset(this.#targetElem).top -
            this.#getAdminBarHeight() -
            this.#getTopbarHeight() -
            this.#getStickyHeaderHeight();

        if (window.pageYOffset.toFixed() === fixedOffset.toFixed()) {
            window.removeEventListener("scroll", this.#fixMultiMenu);

            if (DOM.header.site?.offsetHeight - 1 > this.#getStickyHeaderHeight()) {
                const scrollPosition =
                    offset(this.#targetElem).top -
                    this.#getAdminBarHeight() -
                    this.#getTopbarHeight() -
                    DOM.header.site?.offsetHeight;

                DOM.html.scrollTo({
                    top: scrollPosition,
                    behavior: window.pageYOffset > this.#lastScrollTop ? "smooth" : "auto",
                });

                this.#lastScrollTop = window.pageYOffset;
            }
        }
    };
}

export default ScrollEffect;
