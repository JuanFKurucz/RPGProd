import React from "react";
import PropTypes from 'prop-types';

const Budget = ({profile}) => (
  <div className="centerText profileComponent">
    Budget: $
    {profile.budget || 0}
  </div>
);

Budget.propTypes = {
  profile: PropTypes.shape({
    budget: PropTypes.number,
  }).isRequired
}

export default Budget;
