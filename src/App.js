import ContactForm from './Component/ContactForm/ContactForm';
import ContactList from './Component/ContactList/ContactList';
import Container from './Component/Container/Container';
import Filter from './Component/Filter/Filter';

const App = () => {

   return(
     <Container>
     <h1>Phonebook</h1>
    <ContactForm/>
    <h2>Contacts</h2>
       <Filter/>
         <ContactList />
    </Container>
   );
 }

export default App;
