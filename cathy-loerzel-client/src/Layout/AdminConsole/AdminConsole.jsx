import "../css/AdminConsole.css"
import SideBar from "./SideBar/SideBar"
import Dashboard from "./Dashboard/Dashboard"

export default function AdminConsole() {
  return(
    <div className="admin-console container-fluid">
      <h1>Admin Console</h1>
      <div className="row">
        <div className="col-3 side-bar">
          <SideBar />
        </div>
        <div className="col-9">
          <Dashboard />
        </div>
      </div>
    </div>
  )
}