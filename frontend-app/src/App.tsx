import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import Fornecedores from "./components/layout/Fornecedores";
import { useNavigate } from "react-router-dom";
import { Fornecedor } from "./services/FornecedorService";

const { Header, Sider, Content } = Layout;

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
              onClick: () => handleNavigate("/api/fornecedores"),
            },
            {
              key: "2",
              icon: <EditOutlined />,
              label: "Editar",
              onClick: () => handleNavigate("/api/edit/:id"),
            },
            {
              key: "3",
              icon: <EyeOutlined />,
              label: "Visualizar",
              onClick: () => handleNavigate("/api/fornecedor/:id"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex gap-4"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1>Insight HUB</h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Fornecedores
            fornecedores={fornecedores}
            setFornecedores={setFornecedores}
          />
        </Content>
        <Footer>
          <div className="flex gap-2 items-center justify-center">
            <Link className="flex gap-2 items-center">
              <p>Linkedin</p>
              <LinkedinOutlined size={24} />
            </Link>
            <Link className="flex gap-2 items-center">
              <p>Github</p>
              <GithubOutlined size={24} />
            </Link>
            <Link className="flex gap-2 items-center">
              <p>Instagram</p>
              <InstagramOutlined size={24} />{" "}
            </Link>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
