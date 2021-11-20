export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const titleAnim = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
}
export const fade = {
  hidden: {
    opacity: 0,
  },
  show : {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const imageAnim = {
  hidden: {
    scale: 1.4,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
export const lineAnim = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: {
      duration: 1,
    },
  },
};
export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}
export const sliderContainer = {
  hidden: { opacity: 1, },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
      ease: 'easeOut',
    },
  },
}