import { Link } from "react-router-dom";
import React from "react";

export default class Task extends React.Component {
  render() {
    return (
      <footer>
        <p>Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
      </footer>
    );
  }
}

// const Footer = () => {
//   return (
//     <footer>
//       <p>Copyright &copy; 2021</p>
//       <Link to="/about">About</Link>
//     </footer>
//   );
// };

// export default Footer;
