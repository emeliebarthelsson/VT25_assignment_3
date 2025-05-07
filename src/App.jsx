import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import FormModal from './components/FormModal/FormModal';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const visibleExpenses = filterCategory ? expenses.filter(item => item.category === filterCategory) : expenses;
  
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
      <Header openExpenseForm={ openExpenseForm } setItemToEdit={ setItemToEdit }></Header>
      {displayForm && <FormModal closeExpenseForm={ closeExpenseForm } setExpenses={ setExpenses } itemToEdit={ itemToEdit }/>}
      <Main expenses={ visibleExpenses } setExpenses={ setExpenses } setItemToEdit={ setItemToEdit } openExpenseForm={ openExpenseForm } filterCategory={ filterCategory } setFilterCategory={ setFilterCategory }></Main>
      <Footer></Footer>
    </>
  )
}

export default App;