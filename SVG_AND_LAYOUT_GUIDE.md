# SVG and Layout Implementation Guide

This document outlines the patterns and techniques used for implementing SVG elements, line work, and quote wrappers in the RisksSection component.

## SVG Core Principles

### 1. Responsive SVG Scaling

All SVGs use `preserveAspectRatio="none"` to allow full responsive scaling without maintaining aspect ratio:

```jsx
<SVGWrapper
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1037 667"
    fill="none"
    preserveAspectRatio="none"
>
    <path
        d="..."
        stroke="black"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
    />
</SVGWrapper>
```

### 2. Stroke Width Preservation

All SVG paths use `vectorEffect="non-scaling-stroke"` to maintain consistent stroke width regardless of scaling:

```jsx
<path
    d="M..."
    stroke="black"
    strokeWidth="1"
    vectorEffect="non-scaling-stroke"
/>
```

This prevents stroke distortion when SVGs are stretched horizontally or vertically.

## SVG Wrapper Patterns

### Standard SVG Wrapper (Positioned)

For SVGs that occupy space in the normal flow:

```jsx
const SVGWrapper = styled(motion.svg)`
    width: 50%;
    height: 150px;
    pointer-events: none;
    display: block;
`;
```

**Key Properties:**

-   `pointer-events: none` - Prevents SVG from blocking interactions
-   `display: block` - Removes inline spacing
-   Width/height define the container size
-   Motion.svg enables animation support

### Absolute SVG Wrapper (Background Pattern)

For decorative SVGs layered behind content:

```jsx
const QuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;
```

Used within an absolutely positioned container:

```jsx
const LeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
`;

const QuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
```

## Line Work (Vertical/Horizontal Lines)

### Vertical Line SVG

For left-border line work:

```jsx
<SVGWrapper
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1 121"
    fill="none"
    preserveAspectRatio="none"
>
    <path
        d="M0 0L0 121"
        stroke="black"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
    />
</SVGWrapper>
```

**ViewBox Strategy:**

-   Use `viewBox="0 0 1 HEIGHT"` for vertical lines
-   The `1` width makes the line sit at the left edge
-   HEIGHT matches the actual design height

### Positioning Line Work

Vertical lines are typically positioned:

-   `width: 50%` - Takes up half the container width
-   At the left border of content sections
-   Used in CirclesWrapper pattern for visual flow

## Circle Implementation

### Circle Size Management

Define a constant for the circle size to maintain consistency:

```jsx
const CIRCLE_SIZE = 22.8;

const Circle = styled.div`
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    border-radius: 50%;
    background-color: #000000;
    flex-shrink: 0;
    margin-right: 16px;
    transform: translateX(-50%);
`;
```

### Circle Positioning Variants

**Centered Left Circle:**

```jsx
const FirstCircle = styled(Circle)`
    transform: translateX(-50%);
`;
```

**Top Right Circle:**

```jsx
const TopRightCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;
```

**Bottom Left Circle:**

```jsx
const BottomLeftCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: 40px;
    margin-right: 0;
    transform: none;
`;
```

## Quote Wrapper Pattern

### Two-Layer Pattern

Quote wrappers use an SVG background layer with an absolutely positioned content layer:

```jsx
<LeftToBottomQuoteWrapper>
    {/* SVG Background Layer */}
    <QuoteSVGWrapper
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1037 667"
        fill="none"
        preserveAspectRatio="none"
    >
        <path d="..." stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </QuoteSVGWrapper>

    {/* Content Layer */}
    <QuoteContent>
        <Quote ... />
    </QuoteContent>
</LeftToBottomQuoteWrapper>
```

### Styling Structure

```jsx
const LeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
    height: 720px; // Fixed height needed for layout
`;

const QuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;

const QuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 40px;
`;
```

**Key Design Decision:**

-   SVG is NOT a motion component (avoids opacity/transform issues)
-   Content is a motion component (handles animations)
-   Absolute positioning layers them perfectly

## Circles Wrapper Pattern

For sections with visual flow indicators:

```jsx
const CirclesWrapper = styled(motion.div)`
    padding-left: ${CIRCLE_SIZE / 2}px;
`;
```

This adds left padding equal to half the circle width, providing visual breathing room for centered circles.

## Motion Animation Handling

### Transform Overrides

When motion is overriding CSS transforms, use custom variants:

```jsx
const paragraphFourVariants = {
    hidden: { opacity: 0, y: 20, x: "40%", scaleX: 1 },
    visible: {
        opacity: 1,
        y: -20,
        x: "40%",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

<ParagraphFour variants={paragraphFourVariants}>...</ParagraphFour>;
```

**Why:** Motion.svg and motion.div apply animation transforms that can conflict with CSS. Define transforms in variants instead.

### SVG Motion Caution

Avoid `motion.svg` when possible. Use regular `styled.svg` for static decorative elements:

```jsx
// ❌ Problematic
const QuoteSVGWrapper = styled(motion.svg)`...`;

// ✅ Better
const QuoteSVGWrapper = styled.svg`...`;
```

## Common Measurements

-   Circle size: 22.8px (managed via `CIRCLE_SIZE` constant)
-   Default padding/margins: 40px
-   Standard gap between elements: 32px
-   Line work stroke width: 1px
-   Max content widths: 400-800px
-   Section max width: 1036px

## Responsive Considerations

### Mobile Adjustments

-   Reduce padding on smaller screens
-   Stack flex layouts vertically
-   Adjust SVG proportions via viewBox
-   Use media queries for CircleSize adjustments if needed

### Viewport Units

The Lottie components use viewport width (vw) for sizing. Standard wrappers should not be used with them - instead, the Lottie component itself should be configured for responsive sizing.

## Anti-Patterns to Avoid

1. ❌ Using `motion.svg` with static decorative elements
2. ❌ Setting CSS transforms when motion is handling animations
3. ❌ Forgetting `vectorEffect="non-scaling-stroke"` on paths
4. ❌ Using `preserveAspectRatio="xMidYMid meet"` for full-stretch designs
5. ❌ Not using `pointer-events: none` on background SVGs
6. ❌ Hardcoding circle sizes instead of using `CIRCLE_SIZE` constant

## Summary

The core approach is:

1. Use `preserveAspectRatio="none"` for responsive SVG stretching
2. Always include `vectorEffect="non-scaling-stroke"` for consistent strokes
3. Layer SVGs absolutely behind content for decorative effects
4. Manage circles through a single constant (`CIRCLE_SIZE`)
5. Handle transforms through motion variants, not CSS
6. Avoid `motion.svg` for static decorative elements
