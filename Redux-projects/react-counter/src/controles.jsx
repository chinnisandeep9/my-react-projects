import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controles = () => {
  const dispatch = useDispatch();
  const dispatchIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const dispatchDicrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const inputElement = useRef();
  const dispatchAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };

  const dispatchSUBB = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const dispatchPrivate = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={dispatchIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={dispatchDicrement}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center button-2">
        <input
          type="text"
          className="input-no"
          placeholder="Enter Number"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={dispatchAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={dispatchSUBB}>
          Subtract
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={dispatchPrivate}
        >
          Private
        </button>
      </div>
    </>
  );
};

export default Controles;
