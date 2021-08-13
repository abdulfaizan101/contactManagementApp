import logo from './logo.svg';
import './App.css';

function App() {
  return (<>

    <div className="wrapper">
      <div className="container">
        <aside>
          <ul>
            <li><a href>Link 1</a></li>
            <li><a href>Link 2</a></li>
          </ul>
        </aside>
        <div className="my-navbar">
          <div className="hamburger" id="nav-icon1">
            <span />
            <span />
            <span />
          </div>
          <h2 className="float-start">Contact</h2>
        </div>
        <div className="main-container">
          <h2 className="main-heading">Emergency contacts</h2>
          <div className="my-card">
            <h4>Description: Dad</h4>
            <h4>Phone Number: <a href className="tel:+10000000000">+1(000)000-0000</a> </h4>
            <h4>Priority: 1</h4>
            <p className="text-end mb-0"><a href className="btn btn-link"> EDIT</a></p>
          </div>
          <div className="my-card">
            <form action>
              <div className="input-group-fix">
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Phone number" />
                  <label htmlFor="floatingInput">Phone number</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingPassword" placeholder="Description" />
                  <label htmlFor="floatingPassword">Description</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingPassword" placeholder="Priority" />
                  <label htmlFor="floatingPassword">Priority</label>
                </div>
              </div>
              <div className="btn-row d-flex justify-content-between">
                <button className="btn btn-link" type="submit">CANCEL</button>
                <button className="btn btn-link" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
          <p className="text-center my-5"><a href className="text-blue">BACK TO PROFILE</a></p>
        </div>
      </div>
    </div></>
  );
}

export default App;
