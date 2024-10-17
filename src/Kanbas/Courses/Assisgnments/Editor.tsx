import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const {cid} = useParams();
  const {aid} = useParams();
  const currentAssignment = assignments.filter((assignment) => assignment._id === aid);
  
  return (
    <div id="wd-assignments-editor">
      <tr><b><label htmlFor="wd-name">Assignment Name</label></b></tr>
      <br></br>
      <tr><input id="wd-name" className="form-control d-flex" value={currentAssignment[0].title} /></tr>
      <br></br>
          <table>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>

          <td>
            <input id="wd-points" className="form-control" value={100} />
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grp">Assignment Group</label>
          </td>
          <td>
            <select name="Assignment" id="Assignment" className="form-control dropdown-toggle show">
              <option value="Assignment">Assignment</option>
            </select>
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select name="Display-grade" id="Display-grade" className="form-control">
              <option value="Percentage">Percentage</option>
            </select >
          </td> </tr>
        <br></br>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <div className="p-1 d-flex flex-column gap-2" style={{
              border: "2px solid grey"
            }}>
              <select name="submission-type" id="submission-type" className="form-control">
                <option value="Online" >Online</option>
              </select>
              <div className="d-flex flex-column gap-2">
                <b>Online Entry Options</b>
                <label htmlFor="wd-text-entry">
                  <input type="checkbox"></input>
                  Text Entry</label>
                  <label htmlFor="wd-website-url">
            <input type="checkbox" />
              Website URL</label>
              <label htmlFor="wd-media-recordings">
            <input type="checkbox"></input>
              Media Recordings</label>
              <label htmlFor="wd-student-annotation">
            <input type="checkbox"></input>
              Student Annotations</label>
              <label htmlFor="wd-file-ipload">
            <input type="checkbox"></input>
              File Upload</label>
              </div>
            </div>
          </td> </tr>
        <br></br>
        <tr>
          <td></td>
          
        </tr>
        <tr>
          <td></td>
          
        </tr>

        
        <br />


        <tr>
          <td align="right" valign="top">Assign</td>
          <div className="p-2 d-flex flex-column gap-2" style={{
            border: "2px solid grey"
          }}>
            <label htmlFor="wd-assign-to">Assign to:</label>
            <input type="text" id="everyone" name="everyone" placeholder="Everyone" />
            <div className="">
              <label htmlFor="wd-assign-to">Due:</label>
              <input type="date" className="form-control" value="2024-05-01" />
            </div>
            <div className="d-flex flex-row gap-1">
              <div className="">
                <label htmlFor="wd-assign-to">Available From:</label>
                <input type="date" className="form-control" value="2024-05-06" />
              </div>
              <div className="">
                <label htmlFor="wd-assign-to">Until:</label>
                <input type="date" className="form-control" value="2024-03-04" />
              </div>
            </div>
          </div>
        </tr>




        <tr><td></td>
        </tr>


        <tr><td></td>
        </tr>

        <tr><td></td><div className="input-group mb-3">
        </div></tr> 
        <tr>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          {/* <td><input className="btn btn-secondary me-1" type="button" id="wd-points" value="CANCEL" />
            <input className="btn btn-danger me-1" type="button" id="wd-points" value="SAVE" /></td> */}
            <td>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1">Cancel</Link>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger me-1">Save</Link>
            </td>
        </tr>

      </table>
    </div>
  );
}