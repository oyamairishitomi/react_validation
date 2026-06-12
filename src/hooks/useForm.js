import { useState } from "react";

export function useForm(initialValue, validate) {
  const [values, setValue] = useState(initialValue);
  const errors = validate(values);

  const handleChange = (e) => {
    setValue({
        ...values,
        [e.target.name]: e.target.value,
      });
    };

  return [values, errors, handleChange];
}