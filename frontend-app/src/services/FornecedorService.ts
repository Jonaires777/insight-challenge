import apiProvider from "../providers/ApiProviver";

export type Fornecedor = {
  id: string;
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  nomeRepresentante: string;
  produtosServicos: string;
  dataCadastro: string;
  endereco: string;
};

type CreateRequest = {
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  nomeRepresentante: string;
  produtosServicos: string;
  endereco: string;
};

type EditRequest = {
  id: string | undefined;
  nome: string;
  cnpjCpf: string;
  email: string;
  celular: string;
  nomeRepresentante: string;
  produtosServicos: string;
  endereco: string;
};

const createFornecedor = async (
  createRequest: CreateRequest
): Promise<Fornecedor> => {
  try {
    console.log(createRequest);
    const response = await apiProvider.post<Fornecedor, CreateRequest>(
      "/api/fornecedores/create",
      {
        nome: createRequest.nome,
        celular: createRequest.celular,
        cnpjCpf: createRequest.cnpjCpf,
        email: createRequest.email,
        endereco: createRequest.endereco,
        nomeRepresentante: createRequest.nomeRepresentante,
        produtosServicos: createRequest.produtosServicos,
      }
    );
    console.log(response)
    return response;
  } catch (error) {
    throw error;
  }
};

const getAllFornecedores = async (): Promise<Fornecedor[]> => {
  try {
    const response = await apiProvider.get<Fornecedor[]>("/api/fornecedores");
    return response;
  } catch (error) {
    throw error;
  }
};

const getFornecedor = async (id: string): Promise<Fornecedor> => {
  try {
    const response = await apiProvider.get<Fornecedor>(
      `/api/fornecedores/${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// Ainda necessita de revisão
const editFornecedor = async (
  editRequest: EditRequest
): Promise<Fornecedor> => {
  try {
    const response = await apiProvider.put<Fornecedor, EditRequest>(
      `/api/fornecedores/edit/${editRequest.id}`,
      editRequest
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteForecedor = async (id: string): Promise<void> => {
  try {
    await apiProvider.delete<void>(`/api/fornecedores/${id}`);
  } catch (error) {
    throw error;
  }
};

const fornecedorService = {
  createFornecedor,
  getAllFornecedores,
  getFornecedor,
  editFornecedor,
  deleteForecedor,
};

export default fornecedorService;
