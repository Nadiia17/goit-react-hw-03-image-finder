import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ButtonLabel,
  SearchForm,
  SearchFormInput,
  ErrorMessageWrapper,
  SearchbarWrapper,
  IconWrapper,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

const PhonebookSchema = Yup.object().shape({
  query: Yup.string().min(2).required('Enter serach query'),
});

export const Searchbar = ({ onSubmit }) => (
  <SearchbarWrapper>
    <Formik
      initialValues={{
        query: '',
      }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <SearchForm>
        <Button type="submit">
          <IconWrapper>
            <AiOutlineSearch />
          </IconWrapper>
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <ErrorMessage name="searchQuery" component={ErrorMessageWrapper} />
      </SearchForm>
    </Formik>
  </SearchbarWrapper>
);
