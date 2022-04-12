import { useState } from "react";

export default function useForm() {
  const [formVisible, setformVisible] = useState(false);

  function toggleForm() {
    setformVisible(!formVisible);
  }

  return {
    formVisible,
    toggleForm,
  };
}
