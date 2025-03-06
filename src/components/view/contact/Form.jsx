'use client';
import { FormControl, Grid2, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';

const ContactForm = (props) => {
  const { createContactRequest } = props;
  const validationSchema = () => {
    return Yup.object().shape({
      name: Yup.string().required('Required'),
      phone: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      message: Yup.string().required('Required')
    });
  };

  return <Formik
    initialValues={{ name: '', phone: '', email: '', message: '' }}
    onSubmit={async (values, actions) => {
      await createContactRequest(values);
      actions.setSubmitting(false);
    }}
    validationSchema={validationSchema()}
  >
    {formikProps => {
      const { values, errors, handleChange, handleSubmit } = formikProps;
      return (
        <Grid2 container spacing={1}>
          <Grid2 size={12}>
            <FormControl fullWidth={true}>
              <TextField
                name="name"
                size="small"
                variant="outlined"
                placeholder="Name"
                value={values?.name}
                onChange={handleChange}
              />
              {errors.name ? (
                <div>{errors.name}</div>
              ) : null}
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl fullWidth={true}>
              <TextField
                name="phone"
                size="small"
                variant="outlined"
                placeholder="Phone"
                value={values?.phone}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl fullWidth={true}>
              <TextField
                name="email"
                size="small"
                variant="outlined"
                placeholder="Email"
                value={values?.email}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl fullWidth={true}>
              <TextField
                name="message"
                size="small"
                variant="outlined"
                placeholder="Message"
                value={values?.message}
                onChange={handleChange}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={12}>
            <FormControl fullWidth={true}>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                disabled={!formikProps.dirty || !formikProps.isValid}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormControl>
          </Grid2>
        </Grid2>)
    }}
  </Formik>
}
export default ContactForm;