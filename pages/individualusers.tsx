import React from "react";
import MainLayout from "../components/MainLayout";
import AdminSidebar from "../components/admin-sidebar";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

export default function individualusers() {
  return (
    <MainLayout>
      <AdminSidebar />
      <div>
      <i className="fa fa-chevron-circle-right openicon mr-5"
                id="openicon"
                onClick={() => openNav()}
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
      </div>
      <div className="userlistpage" id="main">
        <div>
          <div className="page-header">
          <h3 className="page-title">Users List</h3>
            <div className="mt-0 row">
              <div className="inner-addon right-addon mr-2">
                <i className="fe fe-search fa-lg" />
                <input
                  id="searchmember"
                  className="form-control form-rounded"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div>
                <button className="btn btn-primary add-user-btn" style={{backgroundColor: "blueviolet"}}>
                  <i className="fe fe-plus" /> Add User
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="table-responsive table-lg"
          style={{
            background: "#ffffff",
            marginBottom: "100px",
          }}
        >
          <h5 className="mt-5 mb-5 ml-5 table-title">
            <div className="row ">
              <div className="selectusers">
                <DropdownButton
                  variant="outline-primary"
                  title="Select Users"
                  className="seluser"
                >
                  <Dropdown.Item href="#">Deactivate Users</Dropdown.Item>
                </DropdownButton>
              </div>
              <div>
                <button className="btn btn-primary gobtn ml-2" style={{backgroundColor: "blueviolet"}}>GO</button>
              </div>
            </div>
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-muted"><i className="fe fe-circle mr-2"></i>
                  Name<i className="fe fe-align-left"></i>
                </th>
                <th scope="col" className="text-muted">
                  Email
                </th>
                <th scope="col" className="text-muted">
                  Telephone
                </th>
                <th scope="col" className="text-muted">
                  Town
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />
              AB Jones Ent </td>
                <td>abjones@gmail.com</td>
                <td>050001234</td>
                <td>Anaji</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Abdul Salam</td>
                <td>abdul.salam@yahoo.com</td>
                <td>**********</td>
                <td>Lagos Town</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Amalitech Services</td>
                <td>info@amalitech.org</td>
                <td>0575679860</td>
                <td>Sekondi</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Bagels LTD</td>
                <td>info@bagels.com</td>
                <td>0508739843</td>
                <td>Daboase</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Dennis Bran</td>
                <td>dennisbran@gmail.com</td>
                <td>050001234</td>
                <td>Anaji</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Fiby & Moby Ent</td>
                <td>info@fibymoby.com</td>
                <td>0549847321</td>
                <td>Anaji</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Planet Hub</td>
                <td>info@planethub.com</td>
                <td>050001234</td>
                <td>Anaji</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />AB Jones Ent </td>
                <td>abjones@gmail.com</td>
                <td>050001234</td>
                <td>Anaji</td>
              </tr>

              <tr>
                <td><i className="fe fe-circle mr-2"></i><img src="/assets/images/pic.png"
                className="header-brand-img login-logo"
              />Abdul Salam</td>
                <td>abdul.salam@yahoo.com</td>
                <td>**********</td>
                <td>Lagos Town</td>
              </tr>
            </tbody>
          </table>

          <div
            className="row"
            style={{ margin: "10px", background: "#ffffff" }}
          ></div>
        </div>
      </div>
    </MainLayout>
  );
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "220px";
  document.getElementById("openicon").style.display = "none";
}
