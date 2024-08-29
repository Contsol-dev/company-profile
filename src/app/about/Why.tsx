import WhyCard from "./WhyCard";
export default function Why() {
  return(
    <div className="p-4 lg:px-16 lg:py-12 w-screen flex flex-col lg:items-center mb-12 gap-4">
      <h3 className="relative z-10 text-cont-primary font-black uppercase text-center">Why Us</h3>
      <h2 className="relative z-10 text-black font-bold uppercase text-4xl mb-4 text-center">
        Why Choose <span className="text-cont-secondary">Cont Solutions</span>?
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <WhyCard 
          main="Consultation Services" 
          explanation="At Cont Solution, we understand that every project has unique needs. Therefore, we offer comprehensive consultation services to help you design the best solution. Our team works with you to understand your business requirements, formulate the right strategy, and ensure that every step in the development process runs smoothly and aligns with your goals."
        />
        <WhyCard 
          main="Meeting Update Reports" 
          explanation="We believe that effective communication is key to the success of any project. Cont Solution regularly holds meeting update reports to provide clients with the latest information on project progress. With clear and detailed reports, you will always be aware of the project’s development, challenges encountered, and the steps taken to overcome them."        />
        <WhyCard 
          main="Flexibility in Changes" 
          explanation="Change is an inherent part of any project. At Cont Solution, we are highly flexible in adapting to any changes that may occur. We are ready to accommodate client change requests quickly and efficiently without compromising quality or the agreed schedule. This flexibility ensures that the solutions we provide are always relevant to your dynamic business needs."        />
        <WhyCard 
          main="Budget Adjustment" 
          explanation="We understand the importance of budget in any software development project. Cont Solution offers solutions that can be adjusted to fit your budget without compromising the quality of the final result. With a transparent and efficient approach, we help you optimize the use of funds to achieve the best outcomes. We are committed to providing maximum value for your investment."
          />
      </div>
    </div>
  );
}