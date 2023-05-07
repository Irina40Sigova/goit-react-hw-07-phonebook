import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectVisibleContacts } from 'redux/selectors';

import { Box, Title, Div } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Title>Contacts</Title>
      <Box>
        {visibleContacts.map(e => (
          <Div key={e.id}>
            <p>
              {e.name}: {e.phone}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(e.id))}>
              Delete
            </button>
          </Div>
        ))}
      </Box>
    </>
  );
};
