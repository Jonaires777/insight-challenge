import { Space, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

const Fornecedores: React.FC = () => {
  const fornecedores = [
    { id: 0, nome: "jhon doe", email: "johndoe@email.com", endereço: "rua bonita" },
    { id: 1, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 2, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 3, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 4, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 5, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 6, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 7, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 8, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 9, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 10, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 11, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 12, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
    { id: 13, nome: "jhon doe", email: "johndoe@email.com" ,endereço: "rua bonita"},
  ];

  const collumns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Endereço",
      dataIndex: "endereço",
      key: "endereço",
    },
    {
      title: "Ação",
      key: "ação",
      render: () => (
        <Space size="middle">
          <a className="">
            <DeleteOutlined onClick={() => console.log('deleted')} className="hover:text-red-500"/>{" "}
          </a>
        </Space>
      ),
    },
  ];

  return <Table dataSource={fornecedores} columns={collumns} />;
};

export default Fornecedores;
