import styled from "styled-components";

export const OVERLAY_IMAGE_WIDTH = 177;
export const OVERLAY_IMAGE_HEIGHT = 245;

const OverlayImageWrapper = styled.img`
    position: absolute;
    width: ${OVERLAY_IMAGE_WIDTH}px;
    height: ${OVERLAY_IMAGE_HEIGHT}px;
    object-fit: cover;

    /* Center the image by offsetting by half its dimensions */
    left: ${(props) => props.left || `calc(50% - ${OVERLAY_IMAGE_WIDTH / 2}px)`};
    top: ${(props) => props.top || `calc(50% - ${OVERLAY_IMAGE_HEIGHT / 2}px)`};

    /* Allow override via props */
    ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) => props.right && `right: ${props.right};`}
`;

export default function OverlayImage({
    src,
    alt = "Overlay image",
    top,
    left,
    bottom,
    right,
    ...props
}) {
    return (
        <OverlayImageWrapper
            src={src}
            alt={alt}
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            {...props}
        />
    );
}
