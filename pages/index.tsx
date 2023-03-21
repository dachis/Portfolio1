import { useState } from 'react'
import 'twin.macro'
import { css } from 'twin.macro'
import Top from '../components/Top'

const App = () => {
  const [playAnimation, setPlayAnimation] = useState(false)

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
      <div tw="h-screen"></div>
    </>
  )
}

export default App
