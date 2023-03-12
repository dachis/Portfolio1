import React from 'react'
import { css } from 'twin.macro'

const App = () => {
  return (
    <>
      <div tw="text-blue-300">Tailwind CSS</div>
      <div
        css={css`
          color: purple;
        `}
      >
        Emotion
      </div>
    </>
  )
}

export default App
