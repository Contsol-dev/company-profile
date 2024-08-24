import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: '',
    country: '',
    wanumber: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsLoading(false);
    } else {
      alert('Failed to send email.');
    }
  };

  return(
    <form className="flex flex-col gap-4 w-full lg:w-2/4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="fullname" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Full Name
        </label>
        <input 
            id="fullname"
            type="text" 
            placeholder="please enter your name" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.fullname}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="wanumber" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Whatsapp Number
        </label>
        <div className="flex gap-4">
          <input
              id="country" 
              type="number" 
              placeholder="country code" 
              className="text-gray-900 w-1/4 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
              onChange={handleChange}
              value={formData.country}
          />
          <input 
              id="wanumber"
              type="number" 
              placeholder="phone number" 
              className="text-gray-900 w-2/4 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
              onChange={handleChange}
              value={formData.wanumber}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="email" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Active Email
        </label>
        <input 
            id="email"
            type="email" 
            placeholder="email" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.email}
        />
      </div>
      <div className="flex flex-col gap-1">
          <label 
              htmlFor="message" 
              className="relative z-10 text-cont-primary font-black uppercase"
          >
              Message
          </label>
          <textarea 
              id="message"
              placeholder="write your message..." 
              className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:outline-none h-40 flex items-start resize-none"
              onChange={handleChange}
              value={formData.message}
          />
      </div>
      <button
          type="submit"
          className="self-end w-36 py-2 bg-cont-secondary hover:bg-cont-primary hover:scale-105 hover:transition-all text-white font-bold capitalize rounded-full"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}