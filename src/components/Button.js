import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

// import React from "react";

// export default class Task extends React.Component {
//   render() {
//     const { color, text, onClick } = this.props;

//     this.defaultProps = {
//       color: "steelblue",
//     };

//     this.propTypes = {
//       text: PropTypes.string,
//       color: PropTypes.string,
//       onClick: PropTypes.func,
//     };

//     return (
//       <button
//         onClick={onClick}
//         style={{ backgroundColor: color }}
//         className="btn"
//       >
//         {text}
//       </button>
//     );
//   }
// }
