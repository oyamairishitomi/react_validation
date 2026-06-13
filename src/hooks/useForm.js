import { useState, useMemo } from "react";

export function useForm(initialValue, validate) {
  const [values, setValue] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const errors = useMemo(() => validate(values), [values, validate]);

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  return [values, errors, handleChange, touched, handleBlur];
}
