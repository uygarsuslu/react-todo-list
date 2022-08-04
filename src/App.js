import './App.css';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Content from './components/Content';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <TodoForm />
        <Content />
        <Footer />
      </section>
    </TodoProvider>
  );
}

export default App;