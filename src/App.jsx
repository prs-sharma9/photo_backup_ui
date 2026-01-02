import Form from "./components/Form";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <section className="w-full min-h-screen bg-gray-100">
        <Header />
        <Form />
      </section>
    </AuthProvider>
  );
}

export default App;
