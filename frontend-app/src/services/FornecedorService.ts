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
  dataCadastro: string;
  endereco: string;
};

type EditRequest = {
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
    const response = await apiProvider.post<Fornecedor, CreateRequest>(
      "/api/fornecedores/create",
      createRequest
    );
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
      "/api/fornecedores",
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
