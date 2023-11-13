import React, { useState } from "react";

const initialForm = {
  fruit: "",
};

const FruitForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fruit) {
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="pagination abajo">
        <input
          className="page-link page-linkx pagex "
          type="text"
          name="fruit"
          placeholder="Name's fruit"
          onChange={handleChange}
          value={form.fruit}
        />
        <input type="submit" value="search" className ="page-link page-linkx"/>
      </form>
    </div>
  );
};

export default FruitForm;