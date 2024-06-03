import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Layout, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const NewFornecedor: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen">
      <Header
        className="flex gap-4 border-b-2"
        style={{ padding: 0, background: colorBgContainer }}
      >
        <h1 onClick={() => navigate("/")} className="pl-2 hover:text-sky-500 cursor-pointer">Voltar</h1>
      </Header>
      <Content
        className=""
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Form
          name="basic"
          wrapperCol={{ offset: 2, span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col justify-center m-auto overflow-y-auto"
        >
          <h1 className="m-auto text-2xl">Cadastre um Fornecedor</h1>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer className="border-t-2">
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
  );
};

export default NewFornecedor;
