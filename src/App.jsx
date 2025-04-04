import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  
  const openExpenseForm = () => {
    setDisplayForm(true);
  }

  const closeExpenseForm = () => {
    setDisplayForm(false);
  }

  return (
    <>
      <Header openExpenseForm={ openExpenseForm }></Header>
      {displayForm && <Form closeExpenseForm={ closeExpenseForm } />}
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App;