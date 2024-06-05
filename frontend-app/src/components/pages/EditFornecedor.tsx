import fornecedorService, {
  Fornecedor,
} from "../../services/FornecedorService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type FormData = {
    name: string;
    cnpjCpf: string;
    email: string;
    cellphone: string;
    produtosServicos: string;
    endereco: string;
    nomeRepresentante: string;
}

const EditFornecedor: React.FC = () => {
  const location = useLocation();
  const [selectedfornecedor, setSelectedFornecedor] = useState<Fornecedor>();

  const [formData, setFormData] = useState({
    name: selectedfornecedor?.nome,
    email: selectedfornecedor?.email,
    cnpjCpf: selectedfornecedor?.cnpjCpf,
    cellphone: selectedfornecedor?.celular,
    produtosServicos: selectedfornecedor?.produtosServicos,
    endereco: selectedfornecedor?.endereco,
    nomeRepresentante: selectedfornecedor?.nomeRepresentante,
  } as FormData)

  useEffect(() => {
    const fetchFornecedor = async () => {
      const pathSegments = location.pathname.split("/");
      const id = pathSegments[pathSegments.length - 1];
      const fornecedor = await fornecedorService.getFornecedor(id);
      setSelectedFornecedor(fornecedor);
    };

    fetchFornecedor();
  }, [location]);

  return <div>{selectedfornecedor?.nome}</div>;
};

export default EditFornecedor;
