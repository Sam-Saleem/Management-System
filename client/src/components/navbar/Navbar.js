import { Button, Layout } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth-Context";
import logo from "../../assets/images/algolix_technologies_logo.jpeg"

const Navbar = () => {
    const {token} = useContext(AuthContext);
    console.log("nav token",token)
    const { Header } = Layout;
  return (
    <div>
       <Layout>
        <Header className="headerStyle flex bg-black justify-between">
            <h1 className="text-white">HR Portal</h1>
            {/* <img src={logo} width={100}/> */}
          { token &&  <Button className="btn mt-4" type="primary">{token?.user.name}</Button>}
        </Header>
      </Layout>
    </div>
  )
}

export default Navbar
