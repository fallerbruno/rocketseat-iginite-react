import { FormContainer, MinutesAmoutInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="tasks"
        type="text"
        placeholder="Dê um nome a tarefa"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="tasks">
        <option value="Estudar" />
        <option value="Trabalhar" />
        <option value="Ler" />
      </datalist>

      <label htmlFor="minutesAmout">durante</label>
      <MinutesAmoutInput
        id="minutesAmout"
        placeholder="00"
        type="number"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmout', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
