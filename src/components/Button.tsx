// import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";

interface Props {
  color: string,
  text: string, 
  onClick: MouseEventHandler<HTMLElement>
}

const Button :React.FC<Props> = ({ color, text, onClick }) => {
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
