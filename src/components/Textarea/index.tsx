import { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { Label, Textarea } from '@rebass/forms'

const Option = styled.div`
  width: 100%;
  position: relative;
`
const TextareaOption = styled(Textarea)``
const Sum = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0;
  width: auto;
`
export default function Textareas({ maxLength }: { maxLength?: number }) {
  const ref = useRef<any>()
  const [langth, setLangth] = useState(0)
  const change = () => {
    console.log(ref.current.value.length)
    setLangth(ref.current.value.length)
  }
  return (
    <Option>
      <Label htmlFor="comment">Comment</Label>
      <TextareaOption ref={ref} maxLength={maxLength} onChange={change}></TextareaOption>
      <Sum>
        {langth} / {maxLength}
      </Sum>
    </Option>
  )
}
