import { useState } from "react";

const contact = () =>{
    const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!subject || !name || !email || !message || !rating) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const mailtoLink = `mailto:shrey3639@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ARating: ${rating}/5%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl sm:text-4xl font-extrabold text-custom">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-custom">
            We would love to hear from you!
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSendMail}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-custom2 text-gray-900 focus:outline-none focus:ring-custom2 focus:border-custom2 sm:text-sm"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border
                 border-gray-300 placeholder-custom2 text-gray-900 focus:outline-none focus:ring-custom2 focus:border-custom2 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-custom2 text-gray-900 focus:outline-none focus:ring-custom2 focus:border-custom2 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-custom2 text-gray-900 focus:outline-none focus:ring-custom2 focus:border-custom2 sm:text-sm"
                placeholder="Your Message"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="rating" className="block text-sm pt-2 pl-2 font-medium text-custom">
                Rate Your Experience
              </label>
              <select
                id="rating"
                name="rating"
                required
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-auto pl-2 pr-10 py-2 text-base border-custom2 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm rounded-md "
              >
                <option value="" disabled>Select a rating</option>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-custom hover:bg-custom2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};


export default contact;