import { FilterContainer, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <p>Find contacts by name</p>
    <FilterInput
      type="text"
      name="filter"
      placeholder="Enter name to find"
      value={value}
      onChange={onChange}
    />
  </FilterContainer>
);
