import "../stilos/style.css";
import { useForm } from "../hooks/useForm";
import Message from "./mensaje";
import Loader from "./Loader";

const initialForm = {
  name: "",
  email: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  //validando que sea el formulario o la linea
  let validation_on_blour = Object.keys(form).length;
  console.log(validation_on_blour);
  if (validation_on_blour === 3) {
    //aqui valido el formulario completo
    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "El campo 'Email' es incorrecto";
    }

    if (!form.comments.trim()) {
      errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments =
        "El campo 'Comentarios' no debe exceder los 255 caracteres";
    }
  } else {
    //aqui valido uno por uno
    if (form.valiName === "name") {
      if (!form.valiValue.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
      } else if (!regexName.test(form.valiValue.trim())) {
        errors.name =
          "El campo 'Nombre' sólo acepta letras y espacios en blanco";
      }
    } else if (form.valiName === "email") {
      if (!form.valiValue.trim()) {
        errors.email = "El campo 'Email' es requerido";
      } else if (!regexEmail.test(form.valiValue.trim())) {
        errors.email = "El campo 'Email' es incorrecto";
      }
    } else {
      if (!form.valiValue.trim()) {
        errors.comments = "El campo 'Comentarios' es requerido";
      } else if (!regexComments.test(form.valiValue.trim())) {
        errors.comments =
          "El campo 'Comentarios' no debe exceder los 255 caracteres";
      }
    }
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Formx = () => {
  const {
    form,
    errors,
    response,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Contact me</h1>
      <form className="foot__container container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input"
          placeholder="Nombre"
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          className="form__input"
          placeholder="Gmail"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <textarea
          className="form__input form__input--mensage"
          placeholder="Mensaje"
          cols="50"
          rows="5"
          name="comments"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" className="form__cta" />
      </form>
      {loading && <Loader />}
      {response && <Message msg="Los datos han sido enviados" />}
    </>
  );
};

export default Formx;
