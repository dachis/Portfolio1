import { motion } from 'framer-motion'
import { useState } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'
import createUuid from '../util/uuid'

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false)

  const handleClick = () => {
    setPlayAnimation(!playAnimation)
  }

  const getKey = () => createUuid()

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
        <div tw="relative flex w-full h-[calc(100% - 48px)]">
          <div tw="relative flex-1">
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-1/5 bg-red-700"
              css={css`
                aspect-ratio: 1 / 4;
              `}
              initial={{
                bottom: '-7.4vw',
                left: '10vw',
                rotate: '-90deg',
              }}
              animate={{
                top: '5vw',
                left: '0',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
            {[...Array(13)].map((_, i) => (
              <motion.div
                key={playAnimation ? getKey() : getKey()}
                tw="absolute left-1 w-1/12 bg-black"
                css={css`
                  aspect-ratio: 4 / 1;
                `}
                initial={{
                  bottom: '0',
                  left: `calc(3vw * ${i})`,
                }}
                animate={{
                  top: `calc(2vw + 1.2vw * ${i})`,
                  left: '3px',
                  transition: {
                    duration: 1,
                    ease: 'easeOut',
                    delay: 1 + i / 15,
                  },
                }}
              />
            ))}
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-4/5"
              css={css`
                aspect-ratio: 1 / 1;
              `}
              initial={{
                bottom: '-8.5vw',
                left: '100%',
              }}
              animate={{
                top: '9px',
                left: '25%',
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <circle cx={60} cy={60} r={60} fill={'#2563EB'} />
              </svg>
            </motion.div>
          </div>
          <div tw="relative flex-1">
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute bottom-16 w-[125%] bg-yellow-300"
              css={css`
                aspect-ratio: 20 / 1;
              `}
              initial={{
                bottom: '0',
                left: '80%',
                rotate: '180deg',
              }}
              animate={{
                top: '35vw',
                left: '-90%',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-[170%] bg-blue-600"
              css={css`
                aspect-ratio: 28 / 1;
              `}
              initial={{
                bottom: '1.6vw',
                left: '100%',
                rotate: '-180deg',
              }}
              animate={{
                top: '25vw',
                left: '-42%',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-[5%] bg-black"
              css={css`
                aspect-ratio: 1 / 24;
              `}
              initial={{
                bottom: '-13vw',
                left: '220%',
                rotate: '95deg',
              }}
              animate={{
                top: '10vw',
                left: '15%',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-[250%] bg-yellow-300 top-[30vw] left-1/2"
              css={css`
                aspect-ratio: 16 / 1;
              `}
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
                transition: { duration: 2, ease: 'easeOut', delay: 1 },
              }}
              style={{ originX: 1 }}
            />
          </div>
          <div tw="relative flex-1">
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-1/4 bg-red-700 rounded-full"
              css={css`
                aspect-ratio: 1 / 1;
              `}
              initial={{
                top: '-200px',
                left: '-66%',
              }}
              animate={{
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
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-1/4 bg-blue-600 -left-1/3 rounded-full"
              css={css`
                top: 15vw;
                aspect-ratio: 1 / 1;
              `}
              initial={{
                top: '-200px',
                left: '-33%',
              }}
              animate={{
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
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-1/4 bg-yellow-300 left-0 rounded-full"
              css={css`
                top: 15vw;
                aspect-ratio: 1 / 1;
              `}
              initial={{
                top: '-200px',
                left: '0',
              }}
              animate={{
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
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-4/5 bg-red-700"
              css={css`
                border-radius: 0 0 50vw 50vw;
                aspect-ratio: 2 / 1;
              `}
              initial={{
                bottom: '-4vw',
                right: '-120%',
                rotate: '90deg',
              }}
              animate={{
                top: '31vw',
                left: '-55%',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
          </div>
          <div tw="relative flex-1">
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute w-[200%] bg-blue-600"
              css={css`
                aspect-ratio: 12 / 1;
              `}
              initial={{
                top: '-1000px',
                right: '0%',
                rotate: '-90deg',
              }}
              animate={{
                top: '0',
                right: '0%',
                rotate: 0,
                transition: { duration: 1, ease: 'easeOut', delay: 1 },
              }}
            />
            <motion.div
              key={playAnimation ? getKey() : getKey()}
              tw="absolute font-titillium -left-1/2 text-9xl"
              css={css`
                top: 11vw;
              `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 5.4 } }}
            >
              Nico Klaus
              <br />
              Art Works
              <div tw="text-4xl mt-6">based in Tokyo</div>
              <div tw="text-4xl mt-6">Bauhaus 2017-2023</div>
              <div tw="text-4xl mt-6">Graphic Designer 2023-</div>
            </motion.div>
          </div>
        </div>
      </div>
      <div tw="h-screen"></div>
    </>
  )
}

export default App
