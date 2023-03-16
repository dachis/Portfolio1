import { motion } from 'framer-motion'
import { useState } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false)

  const handleClick = () => {
    setPlayAnimation(!playAnimation)
  }

  return (
    <div
      tw="h-screen w-full"
      css={css`
        background-color: #e8d5af;
      `}
    >
      <div tw="relative h-12 bg-black text-white pr-3 flex items-center justify-end">
        <button onClick={handleClick}>リセット</button>
      </div>
      <div tw="relative flex w-full h-[600px]">
        <div tw="relative flex-1">
          <motion.div
            tw="absolute top-24 w-1/5 bg-red-700"
            css={css`
              aspect-ratio: 1 / 4;
            `}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
          {[...Array(13)].map((_, i) => (
            <motion.div
              key={i}
              tw="absolute left-1 w-1/12 bg-black"
              css={css`
                top: calc(30px + 1.2vw * ${i});
                aspect-ratio: 4 / 1;
              `}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          ))}
          <motion.div
            tw="absolute w-3/5 bg-blue-600 rounded-full top-3"
            css={css`
              left: 40%;
              aspect-ratio: 1 / 1;
            `}
          />
        </div>
        <div tw="relative flex-1">
          <motion.div
            tw="absolute bottom-16 w-full bg-yellow-300"
            css={css`
              left: -50%;
              aspect-ratio: 20 / 1;
            `}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
          <motion.div
            tw="absolute w-[200%] bg-blue-600 top-96"
            css={css`
              left: -30%;
              aspect-ratio: 16 / 1;
            `}
          />
          <motion.div
            tw="absolute w-[5%] bg-black top-36"
            css={css`
              left: 32%;
              aspect-ratio: 1 / 24;
            `}
          />
          <motion.div
            tw="absolute left-1/2 w-[250%] h-12 bg-yellow-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
        </div>
        <div tw="relative flex-1">
          <motion.div
            tw="absolute w-1/4 bg-red-700 -left-1/4 rounded-full top-60"
            css={css`
              aspect-ratio: 1 / 1;
            `}
          />
          <motion.div
            tw="absolute w-1/4 bg-blue-600 left-[12%] rounded-full top-60"
            css={css`
              aspect-ratio: 1 / 1;
            `}
          />
          <motion.div
            tw="absolute w-1/4 bg-yellow-300 left-1/2 rounded-full top-60"
            css={css`
              aspect-ratio: 1 / 1;
            `}
          />
        </div>
        <div tw="relative flex-1">
          <motion.div
            tw="absolute w-1/2 bg-red-700 top-52"
            css={css`
              border-radius: 0 192px 192px 0;
              aspect-ratio: 1 / 2;
            `}
          />
        </div>
        {/* <motion.div
            tw="absolute left-[500px]"
            css={[
              css`
                width: 0;
                height: 0;
                border-left: 100px solid transparent;
                border-right: 100px solid transparent;
                border-bottom: 384px solid rgb(200, 27, 27);
              `,
            ]}
            initial={{ rotate: 0 }}
            animate={{
              x: [0, 0, 0, 0, 0, 0, -150],
              rotate: [0, -140, -60, -110, -80, -90, -90],
            }}
            transition={{ duration: 1.5, times: [0, 0.25, 0.5, 0.7, 0.9, 1] }}
            key={playAnimation ? 'play' : 'stop'}
          /> */}
      </div>
    </div>
  )
}

export default App
