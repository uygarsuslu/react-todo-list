import './App.css';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <section className="todoapp">
      <Header />
      <TodoForm />
    </section>
  );
}

export default App;