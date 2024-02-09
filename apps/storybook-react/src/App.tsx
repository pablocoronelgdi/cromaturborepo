import { Checkbox, PinInput, ThemeWrapper } from '@cromaui/react'

function App(): JSX.Element {
  return (
    <>
      <ThemeWrapper $theme="macro">
        <Checkbox />
        <PinInput length={4} disabled label="Hola" error onComplete={() => {}} type="" />
      </ThemeWrapper>
    </>
  )
}

export default App
