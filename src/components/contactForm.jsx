import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqkybgn");
  if (state.succeeded) {
      return <h1 className="text-6xl md:text-9xl mb-10 tracking-widest flex flex-wrap ">Dankö</h1>;
  }
  return (
    <form id='contact' className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email Adresse
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>
      <div className="mb-6">
      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Deine Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs italic"
        />
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" disabled={state.submitting}>
        Abschicken
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div className='bg-[#2568fb] flex justify-center items-center h-screen'>
      <ContactForm /> 
    </div>
  );
}

export default Contact;
