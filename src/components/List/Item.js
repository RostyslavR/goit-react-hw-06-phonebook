import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem, Paragraf } from 'components/List/List.styled';

export const Item = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <Paragraf>{name}</Paragraf>
      <Paragraf>{phone}</Paragraf>
      <button type="button" aria-label="delete contact" onClick={handleDelete}>
        Delete
      </button>
    </ContactItem>
  );
};
