import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    e.preventDefault();
    handleChange(e);
    const validationOne = {
      valiName: e.target.name,
      valiValue: e.target.value,
    };
    setErrors(validateForm(validationOne));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let response = validateForm(form);
    setErrors(response);

    if (Object.keys(response).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/henryfuerte560@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
