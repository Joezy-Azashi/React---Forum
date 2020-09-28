const AdminSidebar = () => {
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <div className="heading">
          <a href="#dashboard">
            <li>
              <i className="fe fe-grid mr-5"></i>
              Dashboard
            </li>
          </a>
          <br />
          <br />
          
        </div>
        <a onClick={() => closeNav()}>
          <i className="fa fa-chevron-circle-left closebtn" />
        </a>

        <div className="sidenavmenu">
          <a href="#analytics">
            <li>
              <i className="fe fe-activity mr-5"></i> Posts
              <i id="i" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>

        <div className="sidenavmenu">
          <a href="#" onClick={() => hideshow()}>
            <li>
              <i className="fe fe-users mr-5"></i>
              Users<i id="i" className="fe fe-chevron-right mt-1"></i>
            </li>
          </a>
        </div>
        <ul id="list">
          <a href="/individualusers">
            <li>Individual Users</li>
          </a>
          <a href="/organizationalusers">
            <li>Organizational Users</li>
          </a>
        </ul>

        
        <div className="sidenavmenu">
          <a href="#forum">
            <li>
              <i className="fe fe-message-square mr-5"></i>
              Forum
            </li>
          </a>
        </div>

        <div className="sidenavmenu">
          <a href="#">
            <li>
              <i className="fe fe-users mr-5"></i>
              Super Users
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

function closeNav() {
  document.getElementById("mySidenav").style.width = "60px";
  document.getElementById("main").style.marginLeft = "30px";
  document.getElementById("list").style.display = "none";
  document.getElementById("openicon").style.display = "block";
}

function hideshow() {
  var toggle = document.getElementById("list");
  toggle.style.display = toggle.style.display == "block" ? "none" : "block";
}
