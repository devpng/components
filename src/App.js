import "./styles/global.scss";
import ReportTemplateList from './components/ReportTemplateList';
import ReportTableList from "./components/ReportTableList";
import UserManagementTable from "./components/UserManagementTable";

function App() {
  return (
    <div className="App">
      <UserManagementTable />
    </div>
  );
}

export default App;
