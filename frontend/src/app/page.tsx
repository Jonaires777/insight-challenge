import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fornecedores from "./components/Fornecedores";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-2 gap-2 flex flex-col items-center">
        <h1 className="text-lg md:text-2xl">
          Bem vindo ao <span className="text-sky-500">Insight hub</span>
        </h1>
        <p className="md:text-xl text-sm">
          Gerencie seus fornecedores de{" "}
          <span className="flex justify-center text-sky-500">
            forma rápida e fácil
          </span>
        </p>
          <Fornecedores />
      </div>
      <Footer />
    </main>
  );
}
