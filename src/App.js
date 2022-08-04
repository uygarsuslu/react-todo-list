import './App.css';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <section className="todoapp">
      <Header />
      <TodoForm />
      <Content />
      <Footer />
    </section>
  );
}

export default App;