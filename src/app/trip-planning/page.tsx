"use client";

import React, { useState } from "react";
import NavBar from "../../Components/NavBar"; // Adjust the path as necessary

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    activities: "",
    transport: "flight",
    accommodation: "hotel",
  });

  const [isEditing, setIsEditing] = useState(false); // Track if the form is in editing mode
  const [submitted, setSubmitted] = useState(false); // Track if form has been submitted

  // Disable previous dates for start and end date
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Mark the form as submitted
    setIsEditing(false); // Disable editing after submitting
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable editing mode
    setSubmitted(false); // Allow user to edit the form after clicking "Edit"
    alert("You can now edit the form."); // Inform the user they can now edit
  };
  return (
    <div className="bg-blue-600">
      <section>
        <NavBar />
      </section>
      <br />
      <div className="max-w-lg mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">{submitted ? "Trip Details" : "Plan Your Trip"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
              disabled={submitted && !isEditing} // Disable when submitted, unless editing
              required
            />
          </div>

          {/* Start & End Date */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                min={today} // Disable previous dates
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
                disabled={submitted && !isEditing}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                min={formData.startDate || today} // Disable dates earlier than the start date
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
                disabled={submitted && !isEditing}
                required
              />
            </div>
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block text-sm font-medium mb-1">Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
              disabled={submitted && !isEditing}
              required
            />
          </div>

          {/* Activities */}
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Activities</label>
            <textarea
              name="activities"
              value={formData.activities}
              onChange={handleChange}
              placeholder="E.g., hiking, sightseeing, food tours"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
              disabled={submitted && !isEditing}
            />
          </div>

          {/* Travel Preferences */}
          <div className="flex gap-4">
            {/* Transport */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Mode of Transport</label>
              <select
                name="transport"
                value={formData.transport}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
                disabled={submitted && !isEditing}
              >
                <option value="flight">Flight</option>
                <option value="train">Train</option>
                <option value="bus">Bus</option>
                <option value="car">Car Rental</option>
              </select>
            </div>

            {/* Accommodation */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Accommodation</label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-400"
                disabled={submitted && !isEditing}
              >
                <option value="hotel">Hotel</option>
                <option value="hostel">Hostel</option>
                <option value="apartment">Apartment</option>
                <option value="resort">Resort</option>
              </select>
            </div>
          </div>

          {/* Submit or Edit Button */}
          <div className="flex justify-between">
            {submitted ? (
              <button
                type="button"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-4 transition"
                onClick={handleEdit} // Enable edit mode
              >
                Edit Trip Details
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4 transition"
              >
                Submit Trip Details
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripForm;
