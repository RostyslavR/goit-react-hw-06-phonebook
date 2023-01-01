import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Item } from 'components/List/Item';
import { ContactList } from 'components/List/List.styled';

const filterOut = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterOut(contacts, filter);

  return (
    <ContactList>
      {filteredContacts.map(contact => (
        <Item key={contact.id} {...contact} />
      ))}
    </ContactList>
  );
};
