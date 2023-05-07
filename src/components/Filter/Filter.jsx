import { useDispatch, useSelector } from 'react-redux';

import { FilterInput, Title } from './Filter.styled';
import { filterContact } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const getFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <FilterInput type="text" value={filter} onChange={getFilter} />
    </>
  );
};
