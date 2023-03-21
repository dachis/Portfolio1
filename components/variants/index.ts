export const red1 = {
  initial: {
    opacity: 0,
    bottom: '-7.4vw',
    left: '10vw',
    rotate: '-90deg',
  },
  animate: {
    opacity: 1,
    top: '5vw',
    left: '0',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const red2 = {
  initial: {
    opacity: 0,
    top: '-200px',
    left: '-66%',
  },
  animate: {
    opacity: 1,
    top: '15vw',
    left: '-66%',
    transition: {
      duration: 4,
      type: 'spring',
      delay: 3,
      damping: 7,
      velocity: 0.1,
      mass: 1,
      stiffness: 30,
    },
  },
}

export const red3 = {
  initial: {
    opacity: 0,
    bottom: '-4vw',
    right: '-120%',
    rotate: '90deg',
  },
  animate: {
    opacity: 1,
    top: '31vw',
    left: '-55%',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const black1 = (i: number) => {
  return {
    initial: {
      opacity: 0,
      bottom: '0',
      left: `calc(3vw * ${i})`,
    },
    animate: {
      opacity: 1,
      top: `calc(2vw + 1.2vw * ${i})`,
      left: '3px',
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1 + i / 15,
      },
    },
  }
}

export const black2 = {
  initial: {
    opacity: 0,
    bottom: '-14.2vw',
    left: '220%',
    rotate: '90deg',
  },
  animate: {
    opacity: 1,
    top: '10vw',
    left: '15%',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const blue1 = {
  initial: {
    opacity: 0,
    bottom: '-8.5vw',
    left: '100%',
  },
  animate: {
    opacity: 1,
    top: '9px',
    left: '25%',
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const blue2 = {
  initial: {
    opacity: 0,
    bottom: '1.6vw',
    left: '100%',
    rotate: '-180deg',
  },
  animate: {
    opacity: 1,
    top: '25vw',
    left: '-42%',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const blue3 = {
  initial: {
    opacity: 0,
    top: '-200px',
    left: '-33%',
  },
  animate: {
    opacity: 1,
    top: '15vw',
    left: '-33%',
    transition: {
      duration: 4,
      type: 'spring',
      delay: 3.5,
      damping: 7,
      velocity: 0.1,
      mass: 1,
      stiffness: 30,
    },
  },
}

export const blue4 = {
  initial: {
    opacity: 0,
    top: '-1000px',
    right: '0%',
    rotate: '-90deg',
  },
  animate: {
    opacity: 1,
    top: '0',
    right: '0%',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const yellow1 = {
  initial: {
    opacity: 0,
    bottom: '0',
    left: '80%',
    rotate: '180deg',
  },
  animate: {
    opacity: 1,
    top: '35vw',
    left: '-90%',
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
}

export const yellow2 = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 2, ease: 'easeOut', delay: 1 },
  },
}

export const yellow3 = {
  initial: {
    opacity: 0,
    top: '-200px',
    left: '0',
  },
  animate: {
    opacity: 1,
    top: '15vw',
    left: '0',
    transition: {
      duration: 4,
      type: 'spring',
      delay: 2.5,
      damping: 7,
      velocity: 0.1,
      mass: 1,
      stiffness: 30,
    },
  },
}

export const text1 = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 5.4 } },
}
