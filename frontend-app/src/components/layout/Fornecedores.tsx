import { Space, Table } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { TableColumnsType } from "antd";
import fornecedorService, {
  Fornecedor,
} from "../../services/FornecedorService";
import FornecedorModal from "./FornecedorModal";

type FornecedoresProps = {
  fornecedores: Fornecedor[] | undefined;
  setFornecedores: Dispatch<SetStateAction<Fornecedor[] | undefined>>;
};

interface DataType {
  key: string;
  id: string;
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  nomeRepresentante: string;
  produtosServicos: string;
  dataCadastro: string;
  endereco: string;
}

const Fornecedores = ({ fornecedores, setFornecedores }: FornecedoresProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFornecedor, setSeletectedFornecedor] = useState<Fornecedor>();

  useEffect(() => {
    const fetchAllFornecedores = async () => {
      try {
        const response = await fornecedorService.getAllFornecedores();
        setFornecedores(response);
      } catch (error) {
        console.log("Falha ao buscar fornecedores: ", error);
        throw error;
      }
    };

    fetchAllFornecedores();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fornecedorService.deleteForecedor(id);
      setFornecedores((prev) =>
        prev?.filter((fornecedor) => fornecedor.id != id)
      );
    } catch (error) {
      throw error;
    }
  };

  const handleVisualize = async (id: string) => {
    try {
      showLoading();
      const fornecedor = await fornecedorService.getFornecedor(id);
      setSeletectedFornecedor(fornecedor);
    } catch (error) {
      throw error;
    }
  };

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const collumns: TableColumnsType<DataType> = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      responsive: ["sm"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["sm"],
    },
    {
      title: "Produtos/Serviços",
      dataIndex: "produtosServicos",
      key: "produtosServicos",
      responsive: ["sm"],
    },
    {
      title: "Endereço",
      dataIndex: "endereco",
      key: "endereco",
      responsive: ["sm"],
    },
    {
      title: "Ação",
      key: "ação",
      render: (record: Fornecedor) => (
        <Space size="middle">
          <a className="">
            <DeleteOutlined onClick={() => handleDelete(record.id)} />{" "}
          </a>
          <a>
            <EyeOutlined onClick={() => handleVisualize(record.id)} />
          </a>
        </Space>
      ),
      responsive: ["sm"],
    },
  ];

  return (
    <>
      <Table
        dataSource={fornecedores?.map((fornecedor) => ({
          ...fornecedor,
          key: fornecedor.id,
        }))}
        columns={collumns}
      />
      <FornecedorModal
        content={selectedFornecedor}
        open={open}
        loading={loading}
        setOpen={setOpen}
      />
    </>
  );
};

export default Fornecedores;
