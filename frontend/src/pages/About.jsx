
import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 text-gray-800">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600">
          At <span className="font-semibold">Sheela Decor's</span>, we bring elegance and comfort to your home. Our mission is to provide quality decor solutions that transform spaces into beautiful, functional works of art.
        </p>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Story</h2>
          <p>
            Founded with a passion for design and a dedication to quality, we started our journey to offer unique and stylish home decor pieces that reflect your personality. From humble beginnings to a beloved brand, our story is built on creativity, craftsmanship, and a commitment to our customers.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Values</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><span className="font-semibold">Quality:</span> We source only the finest materials for durable, beautiful pieces.</li>
            <li><span className="font-semibold">Customer Satisfaction:</span> We prioritize our customers’ needs and aim to exceed their expectations.</li>
            <li><span className="font-semibold">Innovation:</span> We embrace new ideas to bring fresh designs to our collection.</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-8 text-center">
        <p className="text-lg font-semibold text-gray-800">Thank you for choosing Sheela Decor's. We look forward to being part of your journey to make your home truly yours.</p>
      </section>
    </div>
  );
}

export default About;

