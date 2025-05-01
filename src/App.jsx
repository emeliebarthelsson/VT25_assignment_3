import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  
  const openExpenseForm = () => {
    setDisplayForm(true);
  }

  const closeExpenseForm = () => {
    setDisplayForm(false);
  }

  useEffect(() => {
    const localStorageExpenses = localStorage.getItem("expenses");
    if (localStorageExpenses) {
      setExpenses(JSON.parse(localStorageExpenses));
    }
  }, []);

  return (
    <>
      <Header openExpenseForm={ openExpenseForm }></Header>
      {displayForm && <Form closeExpenseForm={ closeExpenseForm } setExpenses={ setExpenses } />}
      <Main expenses={ expenses }></Main>
      <Footer></Footer>
    </>
  )
}

export default App;