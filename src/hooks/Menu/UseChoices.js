import {useEffect, useState} from "react";

const UseChoices = () => {

  const [hookChoice, setChoice] = useState(null);

  useEffect(() => {
    if (hookChoice === null) {
      setChoice('500ml')
    }

  }, [hookChoice])

  const changeChoice = e => {
    setChoice(e.target.value)
  }
  return {hookChoice, changeChoice, setChoice}
}

export default UseChoices;