import { useState } from "react"

export function useToggle(initialValue) {
    const [values, setValue] = useState(initialValue);
    const toggle = () => setValue((current) => !current);
    return [values, toggle]
}
