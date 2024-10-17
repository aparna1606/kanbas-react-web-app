// import { Link } from "react-router-dom";
// import "./index.css"

// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <Link 
//         to="/Kanbas/Account/Signin" 
//         id="wd-account-signin-link" 
//         className="wd-account-navigation"
//         >
//         Signin
//       </Link>
//       <Link 
//         to="/Kanbas/Account/Signup" 
//         id="wd-account-signup-link" 
//         className="wd-account-navigation"
//         >
//         Signup
//       </Link>
//       <Link 
//         to="/Kanbas/Account/Profile" 
//         id="wd-account-profile-link" 
//         className="wd-account-navigation"
//         >
//         Profile
//       </Link>
//     </div>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import "./index.css";

const links = [
  { label: "Signin", path: "/Kanbas/Account/Signin", id: "wd-account-signin-link"},
  { label: "Signup", path: "/Kanbas/Account/Signup", id: "wd-account-signup-link"},
  { label: "Profile", path: "/Kanbas/Account/Profile", id: "wd-account-profile-link" },
];

export default function AccountNavigation() {
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border border-0 ${
            pathname === link.path ? "active" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
