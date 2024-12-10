
const Contact = () => {
  return (
    <section id="contact" className="min-h-96 bg-zinc-50 py-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <form className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 border rounded-lg shadow-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 border rounded-lg shadow-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 border rounded-lg shadow-lg"
          />
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
