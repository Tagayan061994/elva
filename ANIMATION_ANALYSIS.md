# Animation Libraries Analysis - Vitarum.net

## Main Animation Libraries Used

### 1. **GSAP (GreenSock Animation Platform)** - Primary Animation Library
- **Version**: 3.12.2
- **Core Library**: `gsap.min.js`
- **Usage**: Main animation engine for all animations

### 2. **GSAP Plugins** (All v3.12.2)

#### **ScrollTrigger**
- `ScrollTrigger.min.js`
- **Purpose**: Scroll-based animations and triggers
- **Features**:
  - Scroll-linked animations
  - Pin elements during scroll
  - Scroll progress tracking
  - Parallax effects

#### **ScrollSmoother**
- `ScrollSmoother.min.js`
- **Purpose**: Smooth scrolling experience
- **Features**:
  - Smooth scroll wrapper
  - Velocity-based scrolling
  - Scroll momentum

#### **SplitText**
- `SplitText.min.js`
- **Purpose**: Text animation and splitting
- **Features**:
  - Split text into words/chars/lines
  - Animate text word-by-word or char-by-char
  - Stagger text animations

#### **ScrollToPlugin**
- `ScrollToPlugin.min.js`
- **Purpose**: Smooth scroll to specific elements
- **Features**:
  - Animated scrolling to anchors
  - Smooth navigation

### 3. **Three.js** - 3D/WebGL Library
- **Version**: r154
- **Purpose**: 3D graphics and WebGL scenes
- **Usage**:
  - 3D background scenes
  - WebGL canvas animations
  - 3D object rendering
- **Evidence**: `<canvas data-engine="three.js r154">`

### 4. **ProgressBar.js**
- `progressbar.min.js`
- **Purpose**: Circular progress indicators
- **Usage**:
  - Preloader progress circle
  - Loading animations
  - Percentage displays

### 5. **jQuery**
- **Version**: 3.6.0
- **Purpose**: DOM manipulation and utilities

### 6. **Custom CSS Animations**
- Keyframe animations (`@keyframes shine`)
- CSS transitions
- Transform animations

## Animation Techniques Used

### 1. **GSAP Timeline Animations**
```javascript
const bqAnim = gsap.timeline({ paused: true });
bqAnim.from(bigVitarum, { height: "2rem", duration: 1.4, ease: "power4.inOut" });
```

### 2. **Scroll-Triggered Animations**
- Elements animate on scroll
- Parallax effects
- Scroll progress tracking

### 3. **Text Splitting & Stagger**
- SplitText for word-by-word animations
- Staggered text reveals
- Character-by-character animations

### 4. **Smooth Scrolling**
- ScrollSmoother for smooth scroll experience
- Custom scroll wrapper

### 5. **3D WebGL Backgrounds**
- Three.js for 3D scenes
- Interactive 3D elements
- WebGL canvas rendering

### 6. **Progress Indicators**
- Circular progress bars
- Loading animations
- Percentage counters

## Key Animation Features

1. **Preloader Animations**
   - GSAP timeline for logo reveal
   - ProgressBar.js for loading circle
   - Text fade animations

2. **Scroll Animations**
   - ScrollTrigger for scroll-based reveals
   - Parallax effects
   - Pin elements during scroll

3. **Text Animations**
   - SplitText for word splitting
   - Staggered reveals
   - Opacity animations

4. **3D Effects**
   - Three.js WebGL scenes
   - 3D camera movements
   - Interactive 3D elements

5. **Interactive Elements**
   - Magnetic button effects (GSAP)
   - Hover animations
   - Click interactions

## Summary

**Primary Libraries:**
- ✅ **GSAP 3.12.2** (Main animation library)
- ✅ **Three.js r154** (3D/WebGL)
- ✅ **ProgressBar.js** (Progress indicators)

**GSAP Plugins:**
- ScrollTrigger (Scroll animations)
- ScrollSmoother (Smooth scrolling)
- SplitText (Text animations)
- ScrollToPlugin (Smooth navigation)

**Supporting:**
- jQuery (DOM utilities)
- Custom CSS animations
- Custom sound library

This is a **high-end, premium animation setup** using professional-grade libraries for smooth, performant animations.

