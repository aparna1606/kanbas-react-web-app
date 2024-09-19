export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button id="wd-collapse-all" type="button">
              Collapse All
        </button>

        <button id="wd-view-progress" type="button">
              View Progress
        </button>

        {/* <label htmlFor="wd-publish"> Publish All </label><br/> */}
        <select id="wd-publish-some-all">
        <option disabled selected hidden>Publish all</option>
          <option value="Publish all modules and items">Publish all modules and items</option>
          <option value="Publish modules only">Publish modules only</option>
          <option value="Unpublish all modules and items">
          Unpublish all modules and items</option>
          <option value="Unpublish modules only">Unpublish modules only</option>
        </select>


        <button id="wd-add-module" type="button">
              +Module
        </button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-l">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer Chapter 2 - Creating User Slides</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  