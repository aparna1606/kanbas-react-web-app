import { Link } from "react-router-dom";
import { courses } from "../../Database";
import { useLocation, useParams } from "react-router";
import "./index.css";

export default function CoursesNavigation() {

  const { cid } = useParams();
  courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">

      {links.map((link: any) => (
        <Link key={link} to={link} 
        className={`list-group-item border border-0
              ${pathname.includes(link) ? "active" : "text-danger"}`}>
          
          <br />
          {link}
        </Link>
      ))}
  </div> 
  );}