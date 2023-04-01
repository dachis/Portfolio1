import { useRef, useState } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'
import Top from '../components/Top'
import {
  useMotionValue,
  useMotionValueEvent,
  motion,
  useTransform,
} from 'framer-motion'

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const backgroundColor = useTransform(
    x,
    [0, 1000, 2000],
    ['rgb(10, 10, 10)', 'rgb(240, 240, 240)', 'rgb(240, 20, 240)'],
  )

  useMotionValueEvent(x, 'animationStart', () => {
    console.log('animation started on x')
  })

  useMotionValueEvent(x, 'change', latest => {
    console.log('x changed to', latest)
  })

  const handleClick = () => {
    setPlayAnimation(!playAnimation)
  }

  return (
    <>
      <div
        tw="h-screen w-full"
        css={css`
          background-color: #e8d5af;
        `}
      >
        <div tw="relative h-12 bg-black text-white pr-3 flex items-center justify-end">
          <button onClick={handleClick}>リセット</button>
        </div>
        <Top playAnimation={playAnimation} />
      </div>
      <div ref={ref} tw="h-screen">
        <motion.div
          tw="w-52 h-52"
          style={{ x, backgroundColor }}
          drag="x"
          dragConstraints={ref}
        />
      </div>
    </>
  )
}

export default App
