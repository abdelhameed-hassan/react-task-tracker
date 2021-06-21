// import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import React from "react";

interface Props {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
  // location: string;
}

// class Tasks extends React.Component<Props> {
//   static defaultProps = {
//     title: "Task Tracker",
//   };

//   componentDidMount() {
//     console.log(this.props);
//   }

//   render() {
//     const { title, onAdd, showAdd } = this.props;

//     return (
//       <header className="header">
//         <h1>{title}</h1>
//         {this.props.location === "/" && (
//           <Button
//             color={showAdd ? "red" : "green"}
//             text={showAdd ? "Close" : "Add"}
//             onClick={onAdd.bind(this)}
//           />
//         )}
//       </header>
//     );
//   }
// }

// export default useLocation(Tasks);

const Header: React.FC<Props> = ({ title, onAdd, showAdd }) => {
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

export default Header;

// CSS IN JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
