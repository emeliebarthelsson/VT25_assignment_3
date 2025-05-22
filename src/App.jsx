import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import FormModal from './components/FormModal/FormModal';

function App() {
  // declare state variables
  const [displayForm, setDisplayForm] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [filterMonth, setFilterMonth] = useState("");

  // filter list based on month if filter is set
  const visibleExpenses = filterMonth ? expenses.filter(item => {
    const month = new Date(item.date).toISOString().slice(5, 7)
    return month === filterMonth
  }) : expenses;
  
  // open expense form
  const openExpenseForm = () => {
    setDisplayForm(true);
  }

  // close expense form
  const closeExpenseForm = () => {
    setDisplayForm(false);
  }

  // if any, get expenses from localStorage
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
      <Main expenses={ visibleExpenses } setExpenses={ setExpenses } setItemToEdit={ setItemToEdit } openExpenseForm={ openExpenseForm } filterMonth={ filterMonth } setFilterMonth={ setFilterMonth }></Main>
      <Footer></Footer>
    </>
  )
}

export default App;