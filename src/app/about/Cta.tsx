"use client"

export default function Cta() {
  return (
    <div className="relative p-4 lg:px-16 w-screen flex flex-col mb-12 gap-4">
      <a 
        href="/documents/company-profile.pdf"
        target="_blank"
        className="
          border-2 border-cont-secondary bg-white px-8 py-4 rounded-lg w-fit mx-auto
          text-cont-secondary font-medium
          hover:bg-cont-secondary hover:text-white hover:scale-105
          transition-all duration-150
          shadow-md
        "
      >See More...</a>
    </div>
  );
}
