export default function BootstrapNavigation() {
  return (
      <>
          <div id="wd-css-navigating-with-tabs">
              <h2>Tabs</h2>
              <ul className="nav nav-tabs">
                  <li className="nav-item">
                      <a className="nav-link active" href="#active">Active</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#link1">Link 1</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#link2">Link 2</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link disabled" href="#Lab2" aria-disabled="true">Disabled</a>
                  </li>
              </ul>
          </div>

          <div id="wd-css-navigating-with-cards">
              <h2>Cards</h2>
              <div className="card" style={{ width: "18rem" }}>
                  <img src="stacked.jpg" className="card-img-top" alt="Stacked Starship" />
                  <div className="card-body">
                      <h5 className="card-title">Stacking Starship</h5>
                      <p className="card-text">
                          Stacking the most powerful rocket in history. Mars or bust!
                      </p>
                      <a href="#boldly-go" className="btn btn-primary">
                          Boldly Go
                      </a>
                  </div>
              </div>
          </div>
      </>
  );
}
