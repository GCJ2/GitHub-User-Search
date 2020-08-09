import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";
import propTypes from "prop-types";
import "./FollowerCard.scss";

const FollowerCard = ({ follower, getUser }) => {
  const handleClick = () => {
    getUser(follower.login);
  };

  return (
    <div className="follower-card" onClick={handleClick}>
      <img src={follower.avatar_url} alt="" />
      <p>{follower.login}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

FollowerCard.propTypes = {
  follower: propTypes.object.isRequired,
  getUser: propTypes.func.isRequired,
};

// export default FollowerCard;
export default connect(mapStateToProps, { getUser })(FollowerCard);
