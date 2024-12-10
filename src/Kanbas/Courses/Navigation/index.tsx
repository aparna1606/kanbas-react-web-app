// import { Link } from "react-router-dom";
// import { courses } from "../../Database";
// import { useLocation, useParams } from "react-router";
// import "./index.css";

// export default function CoursesNavigation() {

//   const { cid } = useParams();
//   courses.find((course) => course._id === cid);
//   const { pathname } = useLocation();
//   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

//     return (
//       <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">

//       {links.map((link: any) => (
//         <Link key={link} to={link} 
//         className={`list-group-item border border-0
//               ${pathname.includes(link) ? "active" : "text-danger"}`}>
          
//           <br />
//           {link}
//         </Link>
//       ))}
//   </div> 
//   );}

import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          id={`wd-course-${link.toLowerCase()}-link`}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item list-group-item-action border border-0
          ${pathname.includes(link) ? "active text-black" : "text-danger"} `}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}