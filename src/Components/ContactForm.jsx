import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      salutation: '',
      company: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      budget: '',
      message: '',
    },
    validationSchema: Yup.object({
      salutation: Yup.string().required('Required'),
      firstname: Yup.string().required('Required'),
      lastname: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      budget: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
        setSubmitting(true);
      setHasSubmitted(true);
      emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        '#contactForm',
        'YOUR_USER_ID'
      ).then(
        (result) => {
          console.log(result.text);
          alert('Message Sent!');
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
          setSubmitting(false);
        }
      );
    },
  });

  return (
    <form id="contactForm" onSubmit={(e) => { setHasSubmitted(true); formik.handleSubmit(e); }} className="space-y-8 lg:p-8 p-4 h-full  rounded bg-gray-100">
      {/* Salutation and Company */}
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='salutation'
                    onChange={formik.handleChange}
                    value={formik.values.salutation}
                    onBlur={formik.handleBlur}
                    required
                    id="salutation"
                    className="block px-2.5 pb-2.5 pt-4 border w-full text-sm text-gray-900 bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="salutation" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Salutation</label>
            </div>
          {formik.touched.salutation && formik.errors.salutation && hasSubmitted && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.salutation}</p>
          )}
        </div>

        {/* Company */}
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='company'
                    onChange={formik.handleChange}
                    value={formik.values.company}
                    onBlur={formik.handleBlur}
                    required
                    id="company"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Company</label>
            </div>
          {formik.touched.company && formik.errors.company && hasSubmitted &&  (
            <p className="text-red-500 text-xs mt-1">{formik.errors.company}</p>
          )}
        </div>
      </div>

      {/* First Name and Last Name */}
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='firstname'
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur}
                    required
                    id="firstname"
                    className="block px-2.5 pb-2.5 pt-4 border w-full text-sm text-gray-900 bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="firstname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">First Name</label>
            </div>
          {formik.touched.firstname && formik.errors.firstname &&  hasSubmitted && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.firstname}</p>
          )}
        </div>

        {/* Company */}
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='lastname'
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    onBlur={formik.handleBlur}
                    required
                    id="lastname"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="lastname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Last Name</label>
            </div>
          {formik.touched.lastname && formik.errors.lastname &&  hasSubmitted && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.lastname}</p>
          )}
        </div>
      </div>

      {/* Phone and Email */}
      <div className='flex gap-4 items-center justify-between'>
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='phone'
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    required
                    id="phone"
                    className="block px-2.5 pb-2.5 pt-4 border w-full text-sm text-gray-900 bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Phone</label>
            </div>
          {formik.touched.phone && formik.errors.phone &&  hasSubmitted && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    required
                    id="email"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
            </div>
          {formik.touched.email && formik.errors.email &&  hasSubmitted && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>
      </div>

      {/* Project Budget */}
      <div className='flex flex-col gap-1 w-full'>
        <div className="relative shadow-md bg-white">
                <input
                    type="text"
                    name='budget'
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                    onBlur={formik.handleBlur}
                    required
                    id="budget"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" " />
                <label htmlFor="budget" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Project Budget</label>
            </div>
          {formik.touched.budget && formik.errors.budget && hasSubmitted &&  (
            <p className="text-red-500 text-xs mt-1">{formik.errors.budget}</p>
          )}
        </div>

      {/* Message */}
      <div className="relative shadow-md bg-white w-full">
        <textarea
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows="4"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 border bg-transparent rounded-none border-1 border-gray-300 appearance-none  peer" placeholder=" "

        />
        <label htmlFor="message" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">

          Message *
        </label>
        {hasSubmitted && formik.errors.message && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" disabled={submitting} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {submitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
