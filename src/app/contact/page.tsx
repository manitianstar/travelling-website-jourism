"use client";

import React, { useState } from "react";

export default function ContactUs() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "Support",
    subscribe: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement; // Explicitly cast to HTMLInputElement
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    let tempErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      tempErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid; submit the data
      console.log("Form Submitted:", formData);
      alert("Your message has been sent!");
      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
        category: "Support",
        subscribe: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Reach out to us with your inquiries or feedback. We'd love to hear from you!
      </p>

      <div className="mt-8 w-full max-w-lg">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full p-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full p-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-600 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Support</option>
              <option>General Question</option>
              <option>Feedback</option>
            </select>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="subscribe" className="text-gray-600">
              Subscribe to our newsletter
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Company Contact Details */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
        <p className="mt-2 text-gray-600">Email: support@travelplanner.com</p>
        <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
}
