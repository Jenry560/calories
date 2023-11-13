import '../stilos/style.css'
import { useForm } from "../hooks/useForm";
import Message from "./mensaje";
import Loader from './Loader';

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
    
    return(
        <>
        <form className="foot__container container" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="form__input" 
            placeholder="Nombre" 
            name="name" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.name} 
            required
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
            required ></textarea>
            {errors.comments && <p style={styles}>{errors.comments}</p>}
            <input type="submit" value="Enviar" className="form__cta"/>
        </form>
        { loading && (<Loader />)}
        {response && (<Message msg="Los datos han sido enviados" />)}
        
        </>
    )
}


export default Formx