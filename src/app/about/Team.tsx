import TeamCard from "./TeamCard";
import iqbalPhoto from '../../assets/members/iqbal.jpg';

export default function Team() {
  return(
    <div className="relative p-4 lg:px-16 lg:py-12 w-screen flex flex-col mb-12 gap-4">
      <h3 className="relative z-10 text-cont-primary font-black uppercase">Our Team</h3>
      <h2 className="relative z-10 text-black font-bold uppercase text-4xl">
        We Work With Team
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TeamCard 
          memberName="Muhammad Iqbal G." 
          memberSpecialist="Software engineer & IoT Engineer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Muhammad Islakha" 
          memberSpecialist="AI Engineer & Data Analyst" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Rizky Gustiantoro" 
          memberSpecialist="Mobile Developer & Website Developer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Rizal Hanifa P." 
          memberSpecialist="Project Manager & Business Development" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Seva Giantama F." 
          memberSpecialist="UI/UX Design & Mobile Developer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Refanda Dicky P." 
          memberSpecialist="Network Engineer & Field Technician" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Farel Abid Y." 
          memberSpecialist="Creative Developer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName='Aditya "Alex" P.' 
          memberSpecialist="Network Engineer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Husnan Maulana S." 
          memberSpecialist="Graphic Designer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Athaya Nuha A." 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Vanya Desitarina D." 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Neki Ardriana" 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName='Totik "Totot"' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName='Munyo "Jujung" Jr.' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName='Muslim "Musmus" Nekokuro' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={iqbalPhoto}
        />
      </div>
    </div>
  ); 
}