import "./styles/global.scss";
import ReportTemplateList from './components/ReportTemplateList';
import ReportTableList from "./components/ReportTableList";
import UserManagementTable from "./components/UserManagementTable";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <div className="App">
      <UserManagementTable />

      <PageHeader />
    </div>
  );
}

export default App;
