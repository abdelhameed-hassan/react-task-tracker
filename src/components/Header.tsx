import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import React from "react";

interface Props {
  title: 'string' | any,
  onAdd: any,
  showAdd: 'string'
}

const Header :React.FC<Props> = ({ title, onAdd, showAdd }) => {
  const location = useLocation<HTMLInputElement>();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

// const location = useLocation();

// export default class Tasks extends React.Component {
//   render() {
//     const { title, onAdd, showAdd } = this.props;

//     this.defaultProps = {
//       title: "Task Tracker",
//     };

//     this.propTypes = {
//       title: PropTypes.string.isRequired,
//     };

//     return (
//       <header className="header">
//         <h1>{title}</h1>
//         {location.pathname === "/" && (
//           <Button
//             color={showAdd ? "red" : "green"}
//             text={showAdd ? "Close" : "Add"}
//             onClick={onAdd}
//           />
//         )}
//       </header>
//     );
//   }
// }

// CSS IN JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
