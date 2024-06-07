'use client';
import { Grid } from '@mui/material';
import Head from 'next/head';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Toast from 'components/Toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmailIcon from '@mui/icons-material/Email';
import { FormEvent, useEffect, useReducer, useState } from 'react';
import TextField from './components/TextField';
import styles from './ContactUs.module.scss';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
  },
});

type FormState = {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  description: string;
};

interface EmailParams {
  user_name: string;
  company: string;
  message: string;
}
const initState: FormState = {
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  description: '',
};

type Action = {
  payload: string;
  name: string;
};

const formReducer = (state: FormState, action: Action): FormState => {
  return {
    ...state,
    [action.name]: action.payload,
  };
};

const ContactUs = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const [submitting, setSubmitting] = useState(false);

  const { open, vertical, horizontal } = state;
  // const salesforceUrl = 'https://webto.salesforce.com/test/test.WebToLead?encoding=UTF-8';

  const [form, setForm] = useState(initState);

  const toggleTost = () => {
    setSuccess((value) => !value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleCloseSnackbar = () => {
    setState({ ...state, open: false });
  };
  const sendEmail = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    const res = await axios.post('/api/sendmail', form);
    if (res.data.success) {
      setState({ vertical: 'top', horizontal: 'right', open: true });
      setForm(initState);
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* <Head>
        <title>Contact SDS Enclave - Real Estate in Jamshedpur</title>
        <meta
          name="description"
          content="Get in touch with SDS Enclave for inquiries about our properties in Jamshedpur, Adityapur, and Pardih. Call us or email us today!"
        />
      </Head> */}
      <section id="contactus">
        <section className={styles['cta']} style={{ paddingTop: '0px', top: '100px' }}>
          <div className={styles['cta-content']}>
            <div className={styles['cta-content-part']} style={{ textAlign: 'center' }}>
              <h4>Contact Us SDS Enclave</h4>
              <p>Speak to a team member to learn more about Our Offering .</p>
              {/* 
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <EmailIcon />
              <span style={{ marginLeft: '20px' }}>
                <a href="mailto:info@pillarmarkets.com">info@pillarmarkets.com</a>
              </span>
            </div> */}
            </div>
            <ThemeProvider theme={theme}>
              <div className={styles['cta-content-part']}>
                <form onSubmit={sendEmail}>
                  {/* <input type="hidden" name="oid" value="00D5f000006OVNu" /> */}
                  {/* <input type="hidden" name="retURL" value={`${baseUrl}?success=true&cta=true`} />​ */}
                  <Grid container spacing={2} columnSpacing={4}>
                    <Grid item xs={12}>
                      <TextField
                        id="first_name"
                        label="First Name"
                        inputProps={{ maxLength: 80 }}
                        name="first_name"
                        type="text"
                        value={form.first_name}
                        onChange={(event) => handleChange(event)}
                        placeholder="First Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="last_name"
                        label="Last Name"
                        inputProps={{ maxLength: 80, color: 'white' }}
                        name="last_name"
                        color="secondary"
                        type="text"
                        value={form.last_name}
                        onChange={(event) => handleChange(event)}
                        placeholder="Last Name"
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                    <TextField
                      id="company"
                      label="Company"
                      inputProps={{ maxLength: 40 }}
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(event) => handleChange(event, 'company')}
                      placeholder="Company"
                    />
                  </Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        inputProps={{ maxLength: 80 }}
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => handleChange(event)}
                        placeholder="Email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        sx={{
                          '& .MuiInputBase-input': { color: '#fff' }, // Text color for input
                          '& .MuiInputLabel-root': { color: '#fff' }, // Label color
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#fff' }, // Border color
                          },
                        }}
                        style={{ height: 'auto', color: '#fff !important' }}
                        id="description"
                        label="Message"
                        value={form.description}
                        onChange={(event) => handleChange(event)}
                        inputProps={{
                          color: '#fff',
                        }}
                        multiline
                        minRows={2}
                        maxRows={7}
                        InputProps={{
                          required: false,
                          disableUnderline: true,
                        }}
                        name="description"
                        type="text"
                        placeholder={'Message'.toUpperCase()}
                      />
                    </Grid>
                    <Grid item xs={12} className={styles.containerWidth}>
                      <p className={styles['small']}>
                        By submitting your information, you agree to the{' '}
                        <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers
                        and promotions from Pillar.
                      </p>
                      <button
                        className="ui-button secondary"
                        type="submit"
                        name="submit"
                        disabled={submitting}>
                        {' '}
                        {submitting ? 'Submiting...' : 'Submit'}
                      </button>
                    </Grid>
                  </Grid>
                  {/* <input
                  className="ui-button secondary"
                  type="submit"
                  name="submit"
                  value={'Submit'}
                  onClick={() => sendEmail()}
                /> */}
                </form>
              </div>
            </ThemeProvider>
          </div>
          {/* <Toast
          open={success}
          content="Your information has been received. A team member will reach out to you soon."
          //subContent={'A team member will reach out to you soon.'}
          title="Message sent successfully"
        /> */}
        </section>
        <Snackbar
          open={state.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
            Thank You ! We Have Received Your Details
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default ContactUs;

// 'use client';
// import { Grid } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// // import Toast from 'components/Toast';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import EmailIcon from '@mui/icons-material/Email';
// import { FormEvent, useEffect, useReducer, useState } from 'react';
// import TextField from './components/TextField';
// import styles from './ContactUs.module.scss';

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: '#fff',
//       light: '#fff',
//       dark: '#fff',
//     },
//   },
// });

// type FormState = {
//   first_name: string;
//   last_name: string;
//   company: string;
//   email: string;
//   description: string;
// };

// const initState: FormState = {
//   first_name: '',
//   last_name: '',
//   company: '',
//   email: '',
//   description: '',
// };

// type Action = {
//   payload: string;
//   name: string;
// };

// const formReducer = (state: FormState, action: Action): FormState => {
//   return {
//     ...state,
//     [action.name]: action.payload,
//   };
// };

// const ContactUs = () => {
//   const router = useRouter();
//   const [success, setSuccess] = useState(false);
//   const [baseUrl, setBaseUrl] = useState('');
//   const salesforceUrl = 'https://webto.salesforce.com/test/test.WebToLead?encoding=UTF-8';

//   const [form, setForm] = useReducer(formReducer, initState);

//   const toggleTost = () => {
//     setSuccess((value) => !value);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setSuccess(false);
//     }, 3000);
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [success]);

//   useEffect(() => {
//     setBaseUrl(
//       typeof window !== 'undefined' && window.location.origin
//         ? window.location.origin
//         : 'https://www.test.com'
//     );

//     setSuccess(router.query.success ? true : false);
//   }, [router]);

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, name: string) => {
//     setForm({
//       name,
//       payload: event.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     const { first_name, last_name, company, description, email } = form;
//     if (!first_name || !last_name || !company || !email) {
//       return;
//     }
//     console.log('formData', form);
//     toggleTost();
//   };

//   return (
//     <section id="contactus">
//       <section className={styles['cta']} style={{ paddingTop: '140px' }}>
//         <div className={styles['cta-content']}>
//           <div className={styles['cta-content-part']}>
//             <h4>Connect With Us</h4>
//             <p>Speak to a team member to learn more about the Pillar commercial real estate marketplace.</p>
//             {/*
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
//               <EmailIcon />
//               <span style={{ marginLeft: '20px' }}>
//                 <a href="mailto:info@pillarmarkets.com">info@pillarmarkets.com</a>
//               </span>
//             </div> */}
//           </div>
//           <ThemeProvider theme={theme}>
//             <div className={styles['cta-content-part']}>
//               <form action={salesforceUrl} method="POST" target="_blank">
//                 <input type="hidden" name="oid" value="00D5f000006OVNu" />
//                 <input type="hidden" name="retURL" value={`${baseUrl}?success=true&cta=true`} />​
//                 <Grid container spacing={2} columnSpacing={4}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="first_name"
//                       label="First Name"
//                       inputProps={{ maxLength: 80 }}
//                       name="first_name"
//                       type="text"
//                       value={form.first_name}
//                       onChange={(event) => handleChange(event, 'first_name')}
//                       placeholder="First Name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="last_name"
//                       label="Last Name"
//                       inputProps={{ maxLength: 80, color: 'white' }}
//                       name="last_name"
//                       color="secondary"
//                       type="text"
//                       value={form.last_name}
//                       onChange={(event) => handleChange(event, 'last_name')}
//                       placeholder="Last Name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="company"
//                       label="Company"
//                       inputProps={{ maxLength: 40 }}
//                       name="company"
//                       type="text"
//                       value={form.company}
//                       onChange={(event) => handleChange(event, 'company')}
//                       placeholder="Company"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       id="email"
//                       label="Email"
//                       inputProps={{ maxLength: 80 }}
//                       name="email"
//                       type="email"
//                       value={form.email}
//                       onChange={(event) => handleChange(event, 'email')}
//                       placeholder="Email"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       color="secondary"
//                       style={{ height: 'auto', color: '#fff' }}
//                       id="description"
//                       label="Message"
//                       value={form.description}
//                       onChange={(event) => handleChange(event, 'description')}
//                       inputProps={{
//                         color: '#fff',
//                       }}
//                       multiline
//                       minRows={2}
//                       maxRows={7}
//                       InputProps={{
//                         required: false,
//                         disableUnderline: true,
//                       }}
//                       name="description"
//                       type="text"
//                       placeholder={'Message'.toUpperCase()}
//                     />
//                   </Grid>
//                 </Grid>
//                 <p className={styles['small']}>
//                   By submitting your information, you agree to the{' '}
//                   <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers and
//                   promotions from Pillar.
//                 </p>
//                 <input
//                   className="ui-button secondary"
//                   type="submit"
//                   name="submit"
//                   value={'Submit'}
//                   onClick={() => handleSubmit()}
//                 />
//               </form>
//             </div>
//           </ThemeProvider>
//         </div>
//         {/* <Toast
//           open={success}
//           content="Your information has been received. A team member will reach out to you soon."
//           //subContent={'A team member will reach out to you soon.'}
//           title="Message sent successfully"
//         /> */}
//       </section>
//     </section>
//   );
// };

// export default ContactUs;
