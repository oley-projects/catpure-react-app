export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
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