import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 text-gray-800">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Whether you have questions about our products, need assistance, or just want to provide feedback, feel free to reach out.
        </p>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button type="submit" className="bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-200">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
          <p><span className="font-semibold">Address:</span> 123 Decor Lane, Interior City, IC 45678</p>
          <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
          <p><span className="font-semibold">Email:</span> support@sheeladecors.com</p>
          <p><span className="font-semibold">Business Hours:</span> Mon - Fri, 9am - 6pm</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
