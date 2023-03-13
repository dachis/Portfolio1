import { motion } from 'framer-motion'
import 'twin.macro'
import { css } from 'twin.macro'

const App = () => (
  <div>
    <motion.div
      tw="absolute w-96 h-96 bg-yellow-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    />
    <motion.div
      tw="absolute left-96"
      css={[
        css`
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 384px solid rgb(153, 27, 27);
        `,
      ]}
      initial={{ rotate: 0 }}
      // whileInView={{ rotate: [0, -120, -80, -90] }}
      animate={{
        x: [0, 0, 0, 0, 0, 0, -200],
        rotate: [0, -140, -60, -110, -80, -90, -90],
      }}
      transition={{ duration: 1.5, times: [0, 0.25, 0.5, 0.7, 0.9, 1] }}
    />
    <div tw="h-[1800px] bg-gray-200"></div>
  </div>
)

export default App
