import React from "react";

const Budget = (props) => {
  return (
    <div className="centerText profileComponent">
      Budget: ${props.profile.budget || 0}
    </div>
  );
};

export default Budget;
