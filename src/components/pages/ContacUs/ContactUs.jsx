
export const ContactUs = () => {
  return (
    <section className="bg-gray-100 text-gray-600 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-8">¡Contact Us!</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
      Do you have any questions or need assistance with a project? We're here to help!
      </p>
      <div className="flex flex-col items-center max-w-md mx-auto space-y-6">
        <input
          className="w-full px-4 py-3 bg-gray-100 text-black placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          type="text"
          placeholder="your name"
        />
        <input
          className="w-full px-4 py-3 bg-gray-100 text-black placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          type="email"
          placeholder="Correo Electrónico"
        />
        <textarea
          className="w-full px-4 py-3 bg-gray-100 text-black placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          cols="30"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        >
         Send Message
        </button>
      </div>
    </section>
  );
};
