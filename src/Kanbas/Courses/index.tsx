import CoursesNavigation from "./Navigation";
import Assignments from "./Assisgnments";
import AssignmentEditor from "./Assisgnments/Editor";
import Modules from "./Modules";
import Home from "./Home";
import { Route, Routes, useLocation, useParams } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";
import PeopleTable from "./People/Table";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">

  <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1" /> 
      {course && course.name} &gt; {pathname.split("/")[4]}</h2>
  <hr />
  
  <div className="d-flex">

    <div className="d-none d-md-block">
      <CoursesNavigation />
    </div>

    <div className="flex-fill">
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        <Route path="People" element={<PeopleTable />} />
      </Routes>
    </div>

  </div>

</div>

 );}