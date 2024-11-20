import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/Lab5/welcome`}          
             className="list-group-item">
             Go to Lab 5
          </a>
          
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters />
        <QueryParameters />
        <WorkingWithObjects />
        <WorkingWithArrays />
        <HttpClient />
        <WorkingWithArraysAsynchronously />
      </div>
    );
  }
  