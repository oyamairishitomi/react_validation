import { useState } from "react"

export function useToggle(initialValue) {
    const [isOn, setIsOn] = useState(initialValue);
    const toggle = () => setIsOn((current) => !current);
    return [isOn, toggle]
}
