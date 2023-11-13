import { useModal } from "../hooks/useModal";
import Formx from "./form";
import Modalx from "./Modal";
import { MdEmail  } from "react-icons/md";




const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <div>
      <MdEmail onClick={openModal1} className="mdmail"/>
      <Modalx isOpen={isOpenModal1} closeModal={closeModal1}>
        <Formx/>
      </Modalx>
    </div>
  );
};

export default Modals;
