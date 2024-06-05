import { Button, Form, Input, Layout, Menu, message, Space } from "antd";
import fornecedorService from "../../services/FornecedorService";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { FileAddOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import SubmitButton from "../common/SubmitButton";
import CommomFooter from "../common/CommomFooter";
import CommomHeader from "../common/CommomHeader";

type FormData = {
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  produtosServicos: string;
  endereco: string;
  nomeRepresentante: string;
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const EditFornecedor: React.FC = () => {
  const location = useLocation();
  const [submittable, setSubmittable] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split("/");
  const id = pathSegments[pathSegments.length - 1];

  useEffect(() => {
    const fetchFornecedor = async () => {
      const fornecedor = await fornecedorService.getFornecedor(id);
      form.setFieldsValue({
        nome: fornecedor.nome,
        email: fornecedor.email,
        cnpjCpf: fornecedor.cnpjCpf,
        celular: fornecedor.celular,
        produtosServicos: fornecedor.produtosServicos,
        endereco: fornecedor.endereco,
        nomeRepresentante: fornecedor.nomeRepresentante,
      });
    };

    fetchFornecedor();
  }, [location]);

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  const handleSubmit = async (values: FormData) => {
    try {
      const editRequest = {
        id,  
        ...values
      };
      await fornecedorService.editFornecedor(editRequest);
      message.success("Fornecedor editado com sucesso!");
    } catch (error) {
      console.log(error)
      message.error("Erro ao editar fornecedor!");
    }
  };

  return (
    <div>
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
                icon: <ArrowLeftOutlined />,
                label: "Voltar",
                onClick: () => handleNavigate("/"),
              },
              {
                key: "2",
                icon: <FileAddOutlined />,
                label: "Adicionar",
                onClick: () => handleNavigate("/api/create"),
              },
            ]}
          />
        </Sider>
        <Layout>
          <CommomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content className="flex justify-center">
            <div className="flex flex-col justify-center w-2/4 ">
              <div>
                <Form
                  form={form}
                  {...formItemLayout}
                  variant="filled"
                  style={{ maxWidth: 600 }}
                  className="border-2 p-2 rounded-md"
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
                        Editar
                      </SubmitButton>
                      <Button htmlType="reset">Limpar</Button>
                    </Space>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Content>
          <CommomFooter />
        </Layout>
      </Layout>
    </div>
  );
};

export default EditFornecedor;
