import React, { useState } from "react";
import {
  FileAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Fornecedores from "./components/layout/Fornecedores";
import { useNavigate } from "react-router-dom";
import { Fornecedor } from "./services/FornecedorService";
import CommomHeader from "./components/common/CommomHeader";
import CommomFooter from "./components/common/CommomFooter";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>();

  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <FileAddOutlined />,
              label: "Adicionar",
              onClick: () => handleNavigate("/create"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <CommomHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="border-2"
        >
          <Fornecedores
            fornecedores={fornecedores}
            setFornecedores={setFornecedores}
          />
        </Content>
        <CommomFooter />
      </Layout>
    </Layout>
  );
};

export default App;
