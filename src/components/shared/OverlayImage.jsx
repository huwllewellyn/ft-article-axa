import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

export const OVERLAY_IMAGE_WIDTH = 177;
export const OVERLAY_IMAGE_HEIGHT = 245;

/**
 * OverlayImage - Responsive overlay image/video component
 *
 * Positions an image or video absolutely with support for different positions, sizing, and visibility at different breakpoints.
 *
 * @example
 * // Image overlay
 * <OverlayImage
 *   src="/image.jpg"
 *   mobile={{ top: "20px", left: "10px" }}
 *   desktop={{ top: "50px", left: "100px" }}
 * />
 *
 * @example
 * // Video overlay (loops, muted, no controls)
 * <OverlayImage
 *   videoSrc="/video.mp4"
 *   mobile={{ top: "20px", left: "10px" }}
 *   desktop={{ top: "50px", left: "100px" }}
 * />
 *
 * @example
 * // Hide on mobile, show on desktop
 * <OverlayImage
 *   src="/image.jpg"
 *   mobile={{ display: "none" }}
 *   desktop={{ top: "50px", left: "100px" }}
 * />
 *
 * Props:
 * - src: Image file path (renders as <img>)
 * - videoSrc: Video file path (renders as <video> with loop, muted, no controls)
 * - alt: Alt text for images (default: "Overlay image")
 * - mobile, tablet, desktop, wide: Responsive style objects
 *
 * Supported style properties per breakpoint:
 * - top, left, bottom, right (positioning)
 * - width, height (sizing - overrides default 177x245px)
 * - display (visibility: "none" to hide at specific breakpoint)
 */

const getStylesForBreakpoint = (breakpointStyles) => {
    if (!breakpointStyles) return "";

    const { top, left, bottom, right, width, height, display } = breakpointStyles;
    let css = "";

    if (top !== undefined) css += `top: ${top};`;
    if (left !== undefined) css += `left: ${left};`;
    if (bottom !== undefined) css += `bottom: ${bottom};`;
    if (right !== undefined) css += `right: ${right};`;
    if (width !== undefined) css += `width: ${width};`;
    if (height !== undefined) css += `height: ${height};`;
    if (display !== undefined) css += `display: ${display};`;

    // Reset transform when positioning is provided
    if (top !== undefined || left !== undefined || bottom !== undefined || right !== undefined) {
        css += `transform: none !important;`;
    }

    return css;
};

const OverlayImageWrapper = styled(motion.img)`
    position: absolute;
    width: ${OVERLAY_IMAGE_WIDTH}px;
    height: ${OVERLAY_IMAGE_HEIGHT}px;
    object-fit: cover;

    /* Default centering */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    /* Apply mobile styles */
    ${(props) => props.$mobileStyles && media.mobile(getStylesForBreakpoint(props.$mobileStyles))}

    /* Apply tablet styles */
    ${(props) => props.$tabletStyles && media.tablet(getStylesForBreakpoint(props.$tabletStyles))}

    /* Apply desktop styles */
    ${(props) => props.$desktopStyles && media.desktop(getStylesForBreakpoint(props.$desktopStyles))}

    /* Apply wide styles */
    ${(props) => props.$wideStyles && media.wide(getStylesForBreakpoint(props.$wideStyles))}
`;

const OverlayVideoWrapper = styled(motion.video)`
    position: absolute;
    width: ${OVERLAY_IMAGE_WIDTH}px;
    height: ${OVERLAY_IMAGE_HEIGHT}px;
    object-fit: cover;

    /* Default centering */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    /* Apply mobile styles */
    ${(props) => props.$mobileStyles && media.mobile(getStylesForBreakpoint(props.$mobileStyles))}

    /* Apply tablet styles */
    ${(props) => props.$tabletStyles && media.tablet(getStylesForBreakpoint(props.$tabletStyles))}

    /* Apply desktop styles */
    ${(props) => props.$desktopStyles && media.desktop(getStylesForBreakpoint(props.$desktopStyles))}

    /* Apply wide styles */
    ${(props) => props.$wideStyles && media.wide(getStylesForBreakpoint(props.$wideStyles))}
`;

// Animation variants for scale-in effect
const overlayImageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function OverlayImage({
    src,
    videoSrc,
    alt = "Overlay image",
    decorative = false,
    mobile,
    tablet,
    desktop,
    wide,
    ...props
}) {
    // Determine if this is a video or image
    const isVideo = !!videoSrc;

    const commonProps = {
        $mobileStyles: mobile,
        $tabletStyles: tablet,
        $desktopStyles: desktop,
        $wideStyles: wide,
        initial: "hidden",
        whileInView: "visible",
        variants: overlayImageVariants,
        viewport: { once: true, margin: "-50px" },
        ...props,
    };

    if (isVideo) {
        return (
            <OverlayVideoWrapper
                {...commonProps}
                loop
                muted
                autoPlay
                playsInline
                aria-hidden={decorative}
            >
                <source src={videoSrc} type="video/mp4" />
            </OverlayVideoWrapper>
        );
    }

    return (
        <OverlayImageWrapper
            src={src}
            alt={decorative ? "" : alt}
            aria-hidden={decorative}
            {...commonProps}
        />
    );
}
