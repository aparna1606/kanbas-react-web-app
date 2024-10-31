// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "./index.css";

// export default function AccountNavigation() {
//   // Extracting the current user state from Redux
//   const { currentUser } = useSelector((state) => state.accountReducer);

//   // Defining links based on whether the user is logged in
//   const links = currentUser
//     ? [{ label: "Profile", path: "/Kanbas/Account/Profile", id: "wd-account-profile-link" }]
//     : [
//         { label: "Signin", path: "/Kanbas/Account/Signin", id: "wd-account-signin-link" },
//         { label: "Signup", path: "/Kanbas/Account/Signup", id: "wd-account-signup-link" },
//       ];

//   const { pathname } = useLocation();

//   return (
//     <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
//       {links.map((link) => (
//         <Link
//           key={link.id}
//           to={link.path}
//           id={link.id}
//           className={`list-group-item border border-0 ${
//             pathname === link.path ? "active" : "text-danger"
//           }`}
//         >
//           {link.label}
//         </Link>
//       ))}
//     </div>
//   );
// }

import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
    const { pathname } = useLocation();
    const links = ["Signin", "Signup", "Profile"];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link to={`./${link}`}
                    className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}  