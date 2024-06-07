import React, { useState } from "react";
import { Button, Flex, Form, Input, Layout, Menu, message, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import SubmitButton from "../common/SubmitButton";
import CommomFooter from "../common/CommomFooter";
import CommomHeader from "../common/CommomHeader";
import fornecedorService from "../../services/FornecedorService";

type FormData = {
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  produtosServicos: string;
  endereco: string;
  nomeRepresentante: string;
};

const NewFornecedor: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [submittable, setSubmittable] = useState<boolean>(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  const handleSubmit = async (values: FormData) => {
    try {
      await fornecedorService.createFornecedor(values);
      message.success("Fornecedor criado com sucesso!");
    } catch (error) {
      message.error("Erro ao criar fornecedor!");
    }
  };

  return (
    <Layout className="!flex min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="sm"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
      >
        <div />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <ArrowLeftOutlined />,
              label: "Voltar",
              onClick: () => handleNavigate("/"),
            },
          ]}
        />
      </Sider>
        <CommomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="flex justify-center h-2/4 md:h-full">
          <Flex className="w-full" align="center" justify="center">
              <Form
                form={form}
                layout="vertical"
                variant="filled"
                className="border-2 p-2 m-2 rounded-md w-full md:w-2/4"
                onFinish={handleSubmit}
              >
                <Form.Item
                  label="Nome"
                  name="nome"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="CPF/CNPJ"
                  name="cnpjCpf"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Celular"
                  name="celular"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Produtos/Serviços"
                  name="produtosServicos"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Endereço"
                  name="endereco"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Representante"
                  name="nomeRepresentante"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, preencha este campo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                  <Space>
                    <SubmitButton
                      form={form}
                      setSubmittable={setSubmittable}
                      submittable={submittable}
                    >
                      Criar
                    </SubmitButton>
                    <Button htmlType="reset">Limpar</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Flex>
        </Content>
        <CommomFooter />
    </Layout>
  );
};

export default NewFornecedor;
