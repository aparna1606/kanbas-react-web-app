
// import { FaPlus, FaEye, FaSquareFull, FaBan } from "react-icons/fa6";
// import { FaCheckCircle } from "react-icons/fa";
// export default function ModulesControls() {
//   return (
//     <div id="wd-modules-controls" className="text-nowrap">
      
//       <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
//         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//         Module
//       </button>
//       <div className="dropdown d-inline me-1 float-end">
//         <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
//           type="button" data-bs-toggle="dropdown">
//           <FaCheckCircle 
//         className="text-success me-1 fs-5" />
//           Publish All
//         </button>
//         <ul className="dropdown-menu">
//           <li>
//             <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
//             <FaCheckCircle style={{ top: "2px" }}
//         className="text-success me-1 fs-5" />

//               Publish all modules and items
//             </a>
//           </li>
//           <li>
//             <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
//             <FaCheckCircle style={{ top: "2px" }}
//         className="text-success me-1 fs-5" />

//               Publish modules only
//             </a>
//           </li>
//           {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
//               wd-unpublish-modules-only with labels Unpublish all modules and items
//               and Unpublish modules only */}

// <li>
//     <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
//       <FaBan style={{ top: "2px" }} className="text-danger me-1 fs-5" />
//       Unpublish all modules and items
//     </a>
//   </li>
//   <li>
//     <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
//       <FaBan style={{ top: "2px" }} className="text-danger me-1 fs-5" />
//       Unpublish modules only
//     </a>
//   </li>
//         </ul>
//       </div>
//       <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
//         <FaEye className="position-relative me-2" style={{ bottom: "1px" }} />
//         View Progress
//       </button>
//       <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
//         <FaSquareFull className="position-relative me-2" style={{ bottom: "1px" }} />
//         Collapse All
//       </button>
//     </div>
//   );
// }

import { FaPlus, FaEye, FaSquareFull, FaBan } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} aria-label="Add Module" />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <FaCheckCircle 
        className="text-success me-1 fs-5" aria-label="Publish All" />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <button id="wd-publish-all-modules-and-items-btn" className="dropdown-item" type="button">
              <FaCheckCircle style={{ top: "2px" }}
                className="text-success me-1 fs-5" aria-label="Publish all modules and items" />
              Publish all modules and items
            </button>
          </li>
          <li>
            <button id="wd-publish-modules-only-button" className="dropdown-item" type="button">
              <FaCheckCircle style={{ top: "2px" }}
                className="text-success me-1 fs-5" aria-label="Publish modules only" />
              Publish modules only
            </button>
          </li>
          <li>
            <button id="wd-unpublish-all-modules-and-items" className="dropdown-item" type="button">
              <FaBan style={{ top: "2px" }} className="text-danger me-1 fs-5" aria-label="Unpublish all modules and items" />
              Unpublish all modules and items
            </button>
          </li>
          <li>
            <button id="wd-unpublish-modules-only" className="dropdown-item" type="button">
              <FaBan style={{ top: "2px" }} className="text-danger me-1 fs-5" aria-label="Unpublish modules only" />
              Unpublish modules only
            </button>
          </li>
        </ul>
      </div>
      <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaEye className="position-relative me-2" style={{ bottom: "1px" }} aria-label="View Progress" />
        View Progress
      </button>
      <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaSquareFull className="position-relative me-2" style={{ bottom: "1px" }} aria-label="Collapse All" />
        Collapse All
      </button>
    </div>
  );
}
