const Fornecedores = () => {
  const fornecedores = [
    { index: 1, nome: "jhon doe", email: "johndoe@email.com" },
    { index: 2, nome: "jhon doe", email: "johndoe@email.com" },
    { index: 3, nome: "jhon doe", email: "johndoe@email.com" },
  ];

  return (
    <div className="flex items-center justify-center">
      <table className="flex flex-col">
        <tbody className="border-2 border-sky-500 border-spacing-5 flex flex-col items-center rounded-md p-2">
          {fornecedores.map(({index ,nome, email }) => (
            <tr className="p-2" key={index}>
              <p>{nome} - {email} - cpf - telefone</p>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fornecedores;
