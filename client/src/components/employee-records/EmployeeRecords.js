import moment from "moment";
import { useQuery } from "@apollo/client";
import { getAllUsers } from "../../queries/queries";
import { Table } from "antd";
import { useEffect, useState } from "react";
const EmployeeRecords = () => {
  const [users, setUsers] = useState([]);
  const { data } = useQuery(getAllUsers);
  useEffect(() => {
    setUsers(data?.users);
  }, [data]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Shift Id",
      dataIndex: "shiftId",
    },
    {
      key: "3",
      title: "Role Id",
      dataIndex: "roleId",
    },
    {
      key: "4",
      title: "Department Id",
      dataIndex: "departmentId",
    },
    {
      key: "5",
      title: "Employee Id",
      dataIndex: "employeeId",
    },
    {
      key: "6",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "7",
      title: "Mobile No",
      dataIndex: "mobileNo",
    },
    {
      key: "8",
      title: "CNIC",
      dataIndex: "cnic",
    },
    {
      key: "9",
      title: "Email",
      dataIndex: "email",
    },
    // {
    //   key: "10",
    //   title: "Password",
    //   dataIndex: "password",
    // },
    {
      key: "11",
      title: "address",
      dataIndex: "address",
    },
    {
      key: "12",
      title: "Job Title",
      dataIndex: "jobTitle",
    },
    {
      key: "13",
      title: "Hire Date",
      dataIndex: "hireDate",
    },
    {
      key: "14",
      title: "DOB",
      dataIndex: "dob",
      render: (text) => (
        <p>{text ? moment(Number(text)).format("lll") : "No date available"}</p>
      ),
    },
    {
      key: "15",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "16",
      title: "Leaves",
      dataIndex: "leaves",
    },
    {
      key: "17",
      title: "Available Leaves",
      dataIndex: "availableLeaves",
    },
    {
      key: "18",
      title: "Commission Flag",
      dataIndex: "commissionFlag",
      render: (value) => (value ? "true" : "false"),
    },
    {
      key: "19",
      title: "Commission Percentage",
      dataIndex: "commissionPercentage",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={users}></Table>
    </>
  );
};

export default EmployeeRecords;
