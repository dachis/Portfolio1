import { motion } from 'framer-motion'
import 'twin.macro'
import { CSSInterpolation } from '@emotion/serialize'
import createUuid from '../util/uuid'
import { ReactNode } from 'react'

interface MotionDivProps {
  children?: ReactNode
  className?: string
  css: CSSInterpolation
  variants: {
    initial: object
    animate: object
  }
  playAnimation: boolean
  style?: object
}

const MotionDiv = ({
  children,
  className,
  css,
  variants,
  playAnimation,
  style,
}: MotionDivProps) => {
  const getKey = () => createUuid()
  return (
    <motion.div
      key={playAnimation ? getKey() : getKey()}
      className={className}
      css={css}
      variants={variants}
      initial="initial"
      animate="animate"
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv
