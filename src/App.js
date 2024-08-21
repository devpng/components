import "./styles/global.scss";
// import ReportTemplateList from './components/ReportTemplateList';
// import ReportTableList from "./components/ReportTableList";
import UserManagementTable from "./components/UserManagementTable";
import PageHeader from "./components/PageHeader";
import Form from "./components/Form";
import PanelRightSide from "./components/PanelRightSide";

function App() {
  return (
    <div className="App">
      <UserManagementTable />

      <PageHeader />

      <br></br>

      {/* <Form /> */}

      <br></br>
      <PanelRightSide />
    </div>
  );
}

export default App;
