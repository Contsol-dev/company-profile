import TeamCard from "./TeamCard";
import iqbalPhoto from '../../assets/members/iqbal.png';
import dikiPhoto from '../../assets/members/diki.png';
import gustianPhoto from '../../assets/members/gustian.png';
import husnanPhoto from '../../assets/members/husnan.png';
import lakhaPhoto from '../../assets/members/islakha.png';
import sevaPhoto from '../../assets/members/seva.png';
import rizalPhoto from '../../assets/members/rizal.png';
import farelPhoto from '../../assets/members/farel.png';
import athayaPhoto from '../../assets/members/athaya.png';
import vanyaPhoto from '../../assets/members/vanya.png';
import nekiPhoto from '../../assets/members/neki.png';
import totiPhoto from '../../assets/members/toti.png';
import jujungPhoto from '../../assets/members/jujung.png';
import muslimPhoto from '../../assets/members/muslim.png';

export default function Team() {
  return(
    <div className="relative p-4 lg:px-16 lg:py-12 w-screen flex flex-col mb-12 gap-4">
      <h3 className="relative z-10 text-cont-primary font-black uppercase text-center">Our Team</h3>
      <h2 className="relative z-10 text-black font-bold uppercase text-4xl text-center mb-4">
        We Work With <span className="text-cont-secondary">Team</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
        <TeamCard 
          memberName="Muhammad Iqbal G." 
          memberSpecialist="Software engineer & IoT Engineer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Muhammad Islakha" 
          memberSpecialist="AI Engineer & Data Analyst" 
          memberPhoto={lakhaPhoto}
        />
        <TeamCard 
          memberName="Rizky Gustiantoro" 
          memberSpecialist="Mobile Developer & Website Developer" 
          memberPhoto={gustianPhoto}
        />
        <TeamCard 
          memberName="Rizal Hanifa P." 
          memberSpecialist="Project Manager & Business Development" 
          memberPhoto={rizalPhoto}
        />
        <TeamCard 
          memberName="Seva Giantama F." 
          memberSpecialist="UI/UX Design & Mobile Developer" 
          memberPhoto={sevaPhoto}
        />
        <TeamCard 
          memberName="Refanda Dicky P." 
          memberSpecialist="Network Engineer & Field Technician" 
          memberPhoto={dikiPhoto}
        />
        <TeamCard 
          memberName="Farel Abid Y." 
          memberSpecialist="Creative Developer" 
          memberPhoto={farelPhoto}
        />
        <TeamCard 
          memberName='Aditya "Alex" P.' 
          memberSpecialist="Network Engineer" 
          memberPhoto={iqbalPhoto}
        />
        <TeamCard 
          memberName="Husnan Maulana S." 
          memberSpecialist="Graphic Designer" 
          memberPhoto={husnanPhoto}
        />
        <TeamCard 
          memberName="Athaya Nuha A." 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={athayaPhoto}
        />
        <TeamCard 
          memberName="Vanya Desitarina D." 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={vanyaPhoto}
        />
        <TeamCard 
          memberName="Neki Ardriana" 
          memberSpecialist="Social Media Specialist" 
          memberPhoto={nekiPhoto}
        />
        <TeamCard 
          memberName='Totik "Totot"' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={totiPhoto}
        />
        <TeamCard 
          memberName='Munyo "Jujung" Jr.' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={jujungPhoto}
        />
        <TeamCard 
          memberName='Muslim "Musmus" Nekokuro' 
          memberSpecialist="Emotional Support Specialist" 
          memberPhoto={muslimPhoto}
        />
      </div>
    </div>
  ); 
}