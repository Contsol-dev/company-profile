import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: '',
    date_of_birth: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    languages: '',
    certifications: '',
    linkedin: '',
    portfolio: '',
    socmed: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
    };
    console.log(dataToSend)

    try {
      setIsLoading(true);
      const response = await fetch(`https://script.google.com/macros/s/AKfycbwgghVZIneNa3lN2r9HboRny8KdH2W3B1gc24TIyARxCdYWlWKDGxFdkfxgZLUg16UD3g/exec`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      console.log(response.status);
      setIsLoading(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return(
    <form className="w-screen lg:w-2/4 p-4 lg:px-16 lg:py-12  flex flex-col mb-12 gap-4" onSubmit={handleSubmit}>
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
            placeholder="Full Name" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.fullname}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="date_of_birth" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Date of Birth
        </label>
        <input
            id="date_of_birth" 
            type="date"
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.date_of_birth}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="gender" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
            Gender
        </label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="male" 
                className="form-radio text-cont-primary"
            />
            <label htmlFor="male" className="text-sm text-cont-primary">Male</label>
          </div>
          <div className="flex items-center gap-2">
            <input 
                type="radio" 
                id="female" 
                name="gender" 
                value="female" 
                className="form-radio text-cont-primary"
            />
            <label htmlFor="female" className="text-sm text-cont-primary">Female</label>
          </div>
          <div className="flex items-center gap-2">
            <input 
                type="radio" 
                id="g700" 
                name="gender" 
                value="gulfstream_g700" 
                className="form-radio text-cont-primary"
            />
            <label htmlFor="g700" className="text-sm text-cont-primary">Gulfstream G700</label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label 
            htmlFor="address" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Alamat
        </label>
        <input 
            id="address"
            type="text" 
            placeholder="Address" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.address}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="email" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Email
        </label>
        <input 
            id="email"
            type="email" 
            placeholder="Email" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.email}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="phone" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Phone
        </label>
        <input 
            id="phone"
            type="text" 
            placeholder="Phone Number" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.phone}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="phone" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Area of Expertise
        </label>
        <select required name="expertise" id="expertise" className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none">
          <option value="Product Development">Product Development</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="Mobile App Developer">Mobile App Developer</option>
          <option value="IoT Developer">IoT Developer</option>
          <option value="Data Analist">Data Analyst</option>
          <option value="Network Engineer">Network Engineer</option>
          <option value="AI Engineering">AI Engineering</option>
          <option value="UI / UX Design">UI / UX Design</option>
          <option value="System Analist">System Analyst</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Video Editor">Video Editor</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="experience" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Years of Experience
        </label>
        <input 
            id="experience"
            type="text" 
            placeholder="2 years" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.experience}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="phone" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Tech Stack
        </label>
        <input 
            id="languages"
            type="text" 
            placeholder="Tech stacks, separate with comma" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.languages}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="certifications" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Link Certifications (if any)
        </label>
        <input 
            id="certifications"
            type="text" 
            placeholder="Certification links, separate with comma" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.certifications}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="linkedin" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Linkedin Profile
        </label>
        <input 
            id="linkedin"
            type="text" 
            placeholder="linkedin.com/in/john-doe" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.linkedin}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="portfolio" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Portfolio
        </label>
        <input 
            id="portfolio"
            type="text" 
            placeholder="Portfolio Link" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.portfolio}
            required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label 
            htmlFor="socmed" 
            className="relative z-10 text-cont-primary font-black uppercase"
        >
          Instagram, facebook, tiktok, or X (if any)
        </label>
        <input 
            id="socmed"
            type="text" 
            placeholder="Social Media Account" 
            className="text-gray-900 py-1 px-2 border border-gray-400 rounded-lg focus:stroke-none"
            onChange={handleChange}
            value={formData.socmed}
        />
      </div>
      <div className="flex flex-row-reverse justify-between">
        <button
            type="submit"
            className="self-end w-36 py-2 bg-cont-secondary hover:bg-cont-primary hover:scale-105 hover:transition-all text-white font-bold capitalize rounded-lg"
            >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
}