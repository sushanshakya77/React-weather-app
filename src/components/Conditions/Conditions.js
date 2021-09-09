import React from "react";

const Conditions = (props) => {
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;
