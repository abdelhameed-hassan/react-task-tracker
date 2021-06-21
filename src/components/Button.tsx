// import PropTypes from "prop-types";
import React, { MouseEventHandler } from "react";

interface Props {
  color: string;
  text: string;
  onClick: MouseEventHandler<HTMLElement>;
}

export default class Task extends React.Component<Props> {
  static defaultProps = {
    color: "steelblue",
  };

  render() {
    const { color, text, onClick } = this.props;

    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    );
  }
}

// const Button :React.FC<Props> = ({ color, text, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       style={{ backgroundColor: color }}
//       className="btn"
//     >
//       {text}
//     </button>
//   );
// };

// Button.defaultProps = {
//   color: "steelblue",
// };

// export default Button;
