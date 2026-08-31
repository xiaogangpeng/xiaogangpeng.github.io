/**
 * Divider-band motion element — produced by the `oil-motion` skill.
 *
 * Route: background_owner=video -> baked-video, driver=pointer,
 * parameter_space=linear, time_control=scrub -> frame-scrub controller.
 * Sources of truth live in motion/dogs-pointer/ (contract, brief, budget) and
 * the compiled timeline is read at runtime from `timeline` — never restated here.
 */
export const motionBand = {
  enabled: true,

  /** Compiled all-keyframe videos. Desktop is used above `mobileBreakpoint`. */
  desktop: '/motion/dogs-desktop.mp4',
  mobile: '/motion/dogs-mobile.mp4',
  mobileBreakpoint: 640,

  /**
   * The band background must stay #FAFAFA: that is the exact colour baked into
   * the compiled video's backdrop, so matching it hides the video's edges.
   * Set in MotionBand.astro.
   */
  bakedBackdrop: '#FAFAFA',

  /**
   * Static rest state: the 50% frame of the compiled timeline (near-frontal
   * gaze). Shown to no-JS visitors, touch devices with no pointer, and anyone
   * who asked for reduced motion. Never K0/K1 — those are the two extremes and
   * would leave the dog staring off-screen.
   */
  poster: '/motion/dogs-poster.webp',

  /** compile_scroll_video.py output. The runtime reads fps/frameCount from it. */
  timeline: '/motion/dogs-timeline.json',

  /**
   * Typed out below the dog. Kept here so the copy is editable without touching
   * the component. NOTE: "six months old" will go stale — update it, or drop the
   * age if you would rather not maintain it.
   */
  caption: 'This is my puppy, Luna. She is a female Dachshund and is currently 9 months old.',

  alt: 'Illustrated long-haired dachshund that follows the cursor',
} as const;
