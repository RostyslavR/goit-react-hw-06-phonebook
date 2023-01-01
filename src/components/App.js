import { Container } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { List } from 'components/List/List';

export const App = () => {
  return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <Filter />
      <List />
    </Container>
  );
};
