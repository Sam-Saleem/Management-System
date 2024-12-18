import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { loginUser } from "../../queries/queries";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth-Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [addUser] = useMutation(loginUser);
  const [isError, setError] = useState(false);
  const {getUserToken} = useContext(AuthContext);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("valuees", values);
    const { email, password } = values;
    try {
      const { data } = await addUser({
        variables: { email, password },
      });
      setError(false);
    //   const token = Cookies.get("authToken");
    //   console.log("login tokennnn", token);
      console.log("dataaaa:::", data);
    const token = await getUserToken();
    console.log("users token",token);
    if(token.user.roleId === 1){
        navigate("/dashboard")
    }
    } catch (error) {
      console.log("Error logging in!", error.message);
      setError(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md h-96">
        <h1 className="text-2xl text-center font-medium p-3 mb-3 ">Login</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          {isError && (
            <div className="text-red-600 text-center p-4">
              Please enter valid credentials
            </div>
          )}
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
