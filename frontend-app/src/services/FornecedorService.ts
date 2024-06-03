type Endereco = {
  street: string;
};

type FornecedorResponse = {
  id: string;
  name: string;
  email: string;
  endereco: Endereco;
};

// Promise que retornará todos os fornecedores
const getAllFornecedores = (): Promise<void> => {
  try {
    // Add your code here
    return Promise.resolve();
  } catch (error) {
    throw error;
  }
};

// Promise que retornará um fornecedor
const getFornecedor = (): Promise<void> => {
  try {
    // Add your code here
    return Promise.resolve();
  } catch (error) {
    throw error;
  }
};

// Promise que retornará um fornecedor editado
const editFornecedor = (): Promise<void> => {
  try {
    // Add your code here
    return Promise.resolve();
  } catch (error) {
    throw error;
  }
};

// Promise que retornará um boolean
const deleteForecedor = (): Promise<void> => {
  try {
    // Add your code here
    return Promise.resolve();
  } catch (error) {
    throw error;
  }
};

const fornecedorService = {
  getAllFornecedores,
  getFornecedor,
  editFornecedor,
  deleteForecedor,
};

export default fornecedorService;
