import type { FireworksOptions } from "fireworks-js/dist/fireworks";

// fireworks engine configuration
// defaults are commented
export const fireworksFxOptions: FireworksOptions = {
  hue: {
    min: 0, // 0
    max: 345, // 360
  },
  rocketsPoint: {
    min: 50, // 50
    max: 50, // 50
  },
  opacity: 0.5, // 0.5
  acceleration: 1.02, // 0.5
  friction: 0.97, // 0.95
  gravity: 1.5, // 1.5
  particles: 90, // 50
  trace: 3, // 3
  explosion: 6, // 5
  autoresize: true, // true
  mouse: {
    click: false, // false
    move: false, // false
    max: 3, // 3
  },
  boundaries: {
    visible: false, // false
  },
  sound: {
    enabled: false, // false
    files: [
      "https://fireworks.js.org/sounds/explosion0.mp3",
      "https://fireworks.js.org/sounds/explosion1.mp3",
      "https://fireworks.js.org/sounds/explosion2.mp3",
    ],
    volume: {
      min: 1, // 1
      max: 2, // 2
    },
  },
  delay: {
    min: 30, // 15
    max: 60, // 30
  },
  brightness: {
    min: 50, // 50
    max: 80, // 80
    decay: {
      min: 0.015, // 0.015
      max: 0.03, // 0.03
    },
  },
  flickering: 50, // 50
  intensity: 30, // 30
  traceSpeed: 10, // 10
  lineWidth: {
    explosion: {
      min: 1.0, // 0.0
      max: 4.0, // 0.0
    },
    trace: {
      min: 0.1, // 0.0
      max: 1.0, // 0.0
    },
  },
  lineStyle: "round", // 'round' | 'square'
};
