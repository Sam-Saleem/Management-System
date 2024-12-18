import { useContext } from "react";
import { AuthContext } from "../../context/Auth-Context";
import EmployeeRecords from "../employee-records/EmployeeRecords";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  console.log("tokennnn for dashboard", token);
  return (
    <div>
      {/* <h1>Token Value:</h1>
      <p>{token ? token.user.id : "No token found"}</p> */}
      {/* <EmployeeRecords/> */}
    </div>
  );
};

export default Dashboard;