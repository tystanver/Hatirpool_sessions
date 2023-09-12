
"use client"
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image'
import * as Yup from 'yup';

const ContactUsSecond = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'), // Name is required
    phone: Yup.string()
      .required('Phone number is required') // Phone number is required
      .matches(/^\d{11}$/, 'Phone number must be 11 digits'), // Match a 10-digit phone number
    message: Yup.string()
      .required('Message is required'), // Message is required
  });

  const {
    handleChange,
    handleBlur,
    values,
    handleSubmit,
    resetForm,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        console.log(data); // Log form values
        resetForm(); // Reset the form
      } catch (error) {
        // Handle error
        console.error(error);
      }
    },
  });

  return (
    <div className='lg:grid grid-cols-2 mt-5 lg:mt-10 gap-10'>
      <div className='grid grid-cols-2'>
        <Image src="/contactImage1.png" height={262} width={262} alt='tan' className='w-full'/>
        <Image src="/contactImage2.png" height={262} width={262} alt='tan' className='w-full'/>
        <Image src="/contactImage3.png" height={262} width={262} alt='tan' className='w-full'/>
        <Image src="/contactImage4.png" height={262} width={262} alt='tan' className='w-full'/>
      </div>
      <div className='flex items-center justify-center'>
      <div className='text-white'>
        <p className='text-amber-600 text-center lg:text-left mt-4 lg:mt-0 t'>Contact Us</p>
        <div className="mt-4 text-white text-[42px] font-normal  text-center lg:text-left">Book Us for a show</div>
        <p className='text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue mauris id placerat semper. 
          Suspendisse ac dapibus ligula, id interdum turpis. Nullam ac lacinia magna.</p>
        <div className='mt-10'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5'>
              <TextField
                name="name"
                label="Your Name"
                fullWidth
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ classes: { input: 'white-input' } }}
              />
              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                variant="outlined"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ classes: { input: 'white-input' } }}
              />
            </div>
            <TextField
            className='mt-5'
              id="fullWidth"
              name='message'
              label="Message Here"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ classes: { input: 'white-input' } }}
            />
            <div className='mt-5'>
              <button type='submit' className='w-full bg-gray-700 rounded-xl py-4'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUsSecond;
