import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return reactDom.createPortal(
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          props.onSetCartVisibility(false);
        }}
      />
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>,
    document.getElementById("overlays")
  );
};

export default Modal;
