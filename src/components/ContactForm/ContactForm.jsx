import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number is not valid. Must be XXX-XX-XX'
    )
    .required('Phone number is required'),
});

export const ContactForm = ({ onFormSubmit, currentContacts }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={PhonebookSchema}
    onSubmit={(values, actions) => {
      const isContactExists = currentContacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );
      if (isContactExists) {
        alert(`${values.name} is already in the phonebook`);
      } else {
        const newContact = { ...values, id: nanoid() };
        onFormSubmit(newContact);
        actions.resetForm();
      }
    }}
  >
    <StyledForm>
      <StyledLabel>
        Name
        <StyledField name="name" placeholder="Enter name" />
        <StyledErrorMessage name="name" component="div" />
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledField name="number" placeholder="Enter number XXX-XX-XX" />
        <StyledErrorMessage name="number" component="div" />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  </Formik>
);

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       ...this.state,
//     };

//     this.props.onSubmit(newContact);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter login"
//             value={name}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             placeholder="Enter number"
//             value={number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
