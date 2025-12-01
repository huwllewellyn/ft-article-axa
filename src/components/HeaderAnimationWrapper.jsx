import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LottieAnimation from './LottieAnimation';

const HeaderAnimationContainer = styled.div`
    width: 100%;
    height: ${props => props.$height || '150px'};
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function HeaderAnimationWrapper({ filename = 'AXA_HEAD_01_Optimised', animationPath }) {
    const path = animationPath || `/lottie/headers/${filename}.json`;
    const [height, setHeight] = useState('150px');

    useEffect(() => {
        const fetchAspectRatio = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();

                if (data.w && data.h) {
                    const aspectRatio = data.w / data.h;
                    const viewportWidth = window.innerWidth;
                    // Account for padding (40px on each side = 80px total)
                    const availableWidth = viewportWidth - 80;
                    const calculatedHeight = availableWidth / aspectRatio;
                    setHeight(`${calculatedHeight}px`);
                }
            } catch (err) {
                console.warn('Could not fetch header animation aspect ratio', err);
            }
        };

        fetchAspectRatio();
        window.addEventListener('resize', fetchAspectRatio);
        return () => window.removeEventListener('resize', fetchAspectRatio);
    }, [path]);

    return (
        <HeaderAnimationContainer $height={height}>
            <LottieAnimation
                path={path}
                height={height}
                width="100%"
                loop={true}
                autoplay={true}
            />
        </HeaderAnimationContainer>
    );
}
