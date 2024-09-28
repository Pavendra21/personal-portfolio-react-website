import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formSent, setFormSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        setFormSent(true);
    };

    return (
        <section id="contact" className="bg-gray-900 text-gray-100 p-16 rounded-lg shadow-lg max-w-lg mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
            {formSent ? (
                <p className="text-green-400 text-center text-lg">Thank you for your message!</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-gray-200 resize-none"
                            required
                            rows="4"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
                    >
                        Send
                    </button>
                </form>
            )}
        </section>
    );
};

export default Contact;
