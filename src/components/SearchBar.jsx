import { Formik, Field, Form } from 'formik';
import { toast } from 'react-toastify';
import { GrSearch } from 'react-icons/gr';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        title: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.title.trim());
        if (values.title.trim() === '') {
          return toast.warn('Enter the title!');
        }
        resetForm();
      }}
    >
      <FormField>
        <Input
          id="name"
          name="title"
          placeholder="Choose the movie to search"
          type="text"
        />
        <SubmitBtn type="submit">
          <GrSearch />
        </SubmitBtn>
      </FormField>
    </Formik>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const FormField = styled(Form)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  background: #65000b;
  height: 40px;
  border-radius: 40px;
  padding: 10px;

  &:hover > SubmitBtn {
    background: white;
    color: #65000b;
  }

  &:hover > Input {
    width: 240px;
    padding: 0 6px;
  }
`;

const Input = styled(Field)`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: black;
  font-size: 16px;
  transition: all 0.4s;
  line-height: 40px;
  width: 0;
`;

const SubmitBtn = styled.button`
  color: white;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #65000b;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;
