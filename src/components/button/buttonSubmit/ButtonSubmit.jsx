import cl from "./ButtonSubmit.module.css";

const ButtonSubmit = ({children,...props}) => {
  return (
    <button className={cl.button_submit} {...props} type="submit">
      {children}
    </button>
  );
};

export default ButtonSubmit;