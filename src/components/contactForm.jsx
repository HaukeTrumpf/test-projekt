import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqkybgn");
  if (state.succeeded) {
      return <h1 className="text-6xl md:text-9xl mb-10 tracking-widest flex flex-wrap ">Dankö</h1>;
  }
  return (
    <form id="contact" className="w-full max-w-lg bg-[#fecd45] shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-5" onSubmit={handleSubmit}>
  <div className="mb-4">
    <div className="relative float-label-input">
      <input 
        type="text"
        id="full-name"
        name="name"
        placeholder=" "
        className="block w-full bg-white border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:shadow-outline focus:border-blue-400"
      />
      <label htmlFor="full-name" className="absolute top-3 left-0 px-2 text-gray-400 transition duration-200 ease-in-out pointer-events-none">
        Vor und Nachname
      </label>
    </div>

    <div className="relative float-label-input">
      <input
        type="email"
        id="email"
        name="email"
        placeholder=" "
        className="block w-full bg-white border border-gray-300 rounded-md py-3 px-3 focus:outline-none focus:shadow-outline focus:border-blue-400"
      />
      <label htmlFor="email" className="absolute top-3 left-0 px-2 text-gray-400 transition duration-200 ease-in-out pointer-events-none">
        Email
      </label>
    </div>

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
    ></textarea>

    <ValidationError 
      prefix="Message"
      field="message"
      errors={state.errors}
      className="text-red-500 text-xs italic"
    />
  </div>

  <div className="text-right">
    <button  type="submit" disabled={state.submitting}>
      Abschicken
    </button>
  </div>
</form>

  );
}

function Contact() {
  return (
    <div className='z-10 relative bg-[#2568fb] flex justify-center items-center h-screen'>
      <ContactForm /> 
    </div>
  );
}

export default Contact;
