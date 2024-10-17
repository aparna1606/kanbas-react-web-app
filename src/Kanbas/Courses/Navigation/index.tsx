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

        {/* <a id="wd-course-home-link"    
        href={`#/Kanbas/Courses/${course?._id}/Home`}
        className="list-group-item active border border-0">Home</a>

        <a id="wd-course-modules-link"    
        href={`#/Kanbas/Courses/${course?._id}/Modules`}
        className="list-group-item text-danger border border-0">Modules</a>

        <a id="wd-course-piazza-link"  
        href={`#/Kanbas/Courses/${course?._id}/Piazza`}
        className="list-group-item text-danger border border-0">Piazza</a>

        <a id="wd-course-zoom-link"    
        href={`#/Kanbas/Courses/${course?._id}/Zoom`}
        className="list-group-item text-danger border border-0">Zoom</a>

        <a id="wd-course-assignments-link"    
        href={`#/Kanbas/Courses/${course?._id}/Assignments`}
        className="list-group-item text-danger border border-0">Assignments</a>

        <a id="wd-course-assignments-link" 
        href={`#/Kanbas/Courses/${course?._id}/Quizzes`}
        className="list-group-item text-danger border border-0">Quizzes</a>

        <a id="wd-course-grades-link"  
        href={`#/Kanbas/Courses/${course?._id}/Grades`}
        className="list-group-item text-danger border border-0">Grades</a> */}

  </div> 
  );}