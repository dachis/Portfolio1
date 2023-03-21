import React from 'react'
import 'twin.macro'
import { css } from 'twin.macro'
import {
  red1,
  red2,
  red3,
  black1,
  black2,
  blue1,
  blue2,
  blue3,
  blue4,
  yellow1,
  yellow2,
  yellow3,
  text1,
} from './variants'
import MotionDiv from './MotionDiv'

interface TopProps {
  playAnimation: boolean
}

const Top = ({ playAnimation }: TopProps) => {
  return (
    <div tw="relative flex w-full h-[calc(100% - 48px)]">
      <div tw="relative flex-1">
        <MotionDiv
          tw="absolute w-1/5 bg-red-700"
          css={css`
            aspect-ratio: 1 / 4;
          `}
          playAnimation={playAnimation}
          variants={red1}
        />
        {[...Array(13)].map((_, i) => (
          <MotionDiv
            key={i}
            tw="absolute left-1 w-1/12 bg-black"
            css={css`
              aspect-ratio: 4 / 1;
            `}
            playAnimation={playAnimation}
            variants={black1(i)}
          />
        ))}
        <MotionDiv
          tw="absolute w-4/5"
          css={css`
            aspect-ratio: 1 / 1;
          `}
          variants={blue1}
          playAnimation={playAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <circle cx={60} cy={60} r={60} fill={'#2563EB'} />
          </svg>
        </MotionDiv>
      </div>
      <div tw="relative flex-1">
        <MotionDiv
          tw="absolute bottom-16 w-[125%] bg-yellow-300"
          css={css`
            aspect-ratio: 20 / 1;
          `}
          variants={yellow1}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-[170%] bg-blue-600"
          css={css`
            aspect-ratio: 28 / 1;
          `}
          variants={blue2}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-[5%] bg-black"
          css={css`
            aspect-ratio: 1 / 24;
          `}
          variants={black2}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-[250%] bg-yellow-300 top-[30vw] left-1/2"
          css={css`
            aspect-ratio: 16 / 1;
          `}
          variants={yellow2}
          playAnimation={playAnimation}
          style={{ originX: 1 }}
        />
      </div>
      <div tw="relative flex-1">
        <MotionDiv
          tw="absolute w-1/4 bg-red-700 rounded-full"
          css={css`
            aspect-ratio: 1 / 1;
          `}
          variants={red2}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-1/4 bg-blue-600 -left-1/3 rounded-full"
          css={css`
            top: 15vw;
            aspect-ratio: 1 / 1;
          `}
          variants={blue3}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-1/4 bg-yellow-300 left-0 rounded-full"
          css={css`
            top: 15vw;
            aspect-ratio: 1 / 1;
          `}
          variants={yellow3}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute w-4/5 bg-red-700"
          css={css`
            border-radius: 0 0 50vw 50vw;
            aspect-ratio: 2 / 1;
          `}
          variants={red3}
          playAnimation={playAnimation}
        />
      </div>
      <div tw="relative flex-1">
        <MotionDiv
          tw="absolute w-[200%] bg-blue-600"
          css={css`
            aspect-ratio: 12 / 1;
          `}
          variants={blue4}
          playAnimation={playAnimation}
        />
        <MotionDiv
          tw="absolute font-titillium -left-1/2 text-9xl"
          css={css`
            top: 11vw;
          `}
          variants={text1}
          playAnimation={playAnimation}
        >
          Nico Klaus
          <br />
          Art Works
          <div tw="text-4xl mt-6">based in Tokyo</div>
          <div tw="text-4xl mt-6">Bauhaus 2017-2023</div>
          <div tw="text-4xl mt-6">Graphic Designer 2023-</div>
        </MotionDiv>
      </div>
    </div>
  )
}

export default Top
