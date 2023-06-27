import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <div>
      <h1>newCycleForm {activeCycle}</h1>
      <button onClick={() => setActiveCycle(activeCycle + 1)}>+</button>
    </div>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>Countdown {activeCycle}</h1>
}

export function Example() {
  const [activeCycle, setActiveCycle] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
