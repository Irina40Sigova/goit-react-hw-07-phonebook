import { useSelector, useDispatch } from 'react-redux';

import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

import { Container, Title, SubTitle } from './App.styled';

import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title> Phonebook</Title>
      <LoginForm />

      <SubTitle>Contacts</SubTitle>
      {isLoading && !error && <b>Request in progress...</b>}

      {contacts.length > 0 ? (
        <>
          {/* <Filter /> */}
          <Contacts />
        </>
      ) : (
        ' NO CONTACTS'
      )}
    </Container>
  );
};
