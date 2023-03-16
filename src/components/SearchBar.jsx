// import { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

export const SearchBar = () => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="name">Search</label>
        <Field id="name" name="name" placeholder="Pulp fiction" type="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
