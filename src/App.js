import './App.css';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Content from './components/Content';

function App() {
  return (
    <section className="todoapp">
      <Header />
      <TodoForm />
      <Content />
    </section>
  );
}

export default App;