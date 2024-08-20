import { useState } from "react";
import HowButton from "./HowButtons";
import HowPoint from "./HowPoint";

export default function How() {
  const [section, setSection] = useState(1);

  return(
    <div className="p-4 lg:px-16 lg:py-12 w-screen flex flex-col mb-12 gap-4">
      <h2 className="relative z-10 text-black font-bold uppercase text-4xl text-center lg:text-left">
        How We Work
      </h2>
      <div className="relative flex flex-col lg:flex-row mb-12 gap-4 ">
        <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto gap-4">
          <HowButton 
            onClick={() => setSection(1)}
            active={section === 1}
            text="IT Manpower Sharing"
          />
          <HowButton 
            onClick={() => setSection(2)}
            active={section === 2}
            text="Development"
          />
          <HowButton 
            onClick={() => setSection(3)}
            active={section === 3}
            text="Network Installation"
          />
          <HowButton 
            onClick={() => setSection(4)}
            active={section === 4}
            text="Creative Development"
          />
        </div>
        <div className="w-full lg:w:2/3 flex flex-col text-black">
        {section === 1 &&
          <div className="flex flex-col">
            <HowPoint 
              num="01"
              title="Initial discussion with our account team"
              subtitle="Contact our account team to start discussing your talent needs and requirements."
            />
            <HowPoint 
              num="02"
              title="Based on the discussion, we will provide recommendations for suitable talent"
              subtitle="We will analyze your needs and recommend the most suitable talent."
            />
            <HowPoint 
              num="03"
              title="Send detailed proposal"
              subtitle="A proposal containing detailed information about the talent and services will be sent to you."
            />
            <HowPoint 
              num="04"
              title="Provide profiles & CVs of available talent"
              subtitle="We will provide profiles and CVs of available talent for you to choose from."
            />
            <HowPoint 
              num="05"
              title="Talent selection and matching process"
              subtitle="We assist you in selecting and matching talent that fits your project needs."
            />
            <HowPoint 
              num="06"
              title="Final agreement (End-Agreement)"
              subtitle="After discussions and talent selection, we draft and agree on the final agreement."
            />
            <HowPoint 
              num="07"
              title="Onboarding and remote talent support"
              subtitle="We provide support for onboarding and managing remote talent."
              end={true}
            />            
          </div>
        }
        {section === 2 &&
          <div className="flex flex-col">
            <HowPoint 
              num="01"
              title="Initial discussion with our account team"
              subtitle="Begin with a discussion to understand your project needs and scope."
            />        
            <HowPoint 
              num="02"
              title="Based on the discussion, we provide recommendations for suitable services"
              subtitle="We recommend the appropriate services based on the initial discussion."
            />        
            <HowPoint 
              num="03"
              title="Send detailed proposal"
              subtitle="A proposal outlining the services and costs will be sent for your review."
            />        
            <HowPoint 
              num="04"
              title="Design Sprint Phase: Analysis and design, ensuring requirements are met and approved by the client"
              subtitle="We conduct initial analysis and design to ensure all client requirements are met."
            />        
            <HowPoint 
              num="05"
              title="Development Sprint Phase: Implementing the design into the application"
              subtitle="The design is implemented into the application during this development phase."
            />        
            <HowPoint 
              num="06"
              title="Weekly CI/CD integration: Weekly application updates so clients can test directly"
              subtitle="Applying Continuous Integration and Continuous Deployment (CI/CD) weekly to allow clients to test the latest updates."
            />        
            <HowPoint 
              num="07"
              title="Testing Phase: Testing from sprint tests, integration, SIT, UAT, to penetration and load tests"
              subtitle="Thorough testing is conducted, including sprint tests, integration, and various quality tests."
            />        
            <HowPoint 
              num="08"
              title="Standard communication procedures: Weekly or bi-weekly project status updates"
              subtitle="Project status updates are provided regularly, weekly or bi-weekly."
            />        
            <HowPoint 
              num="09"
              title="Project completion: Application deployed after successful testing"
              subtitle="The application is deployed after all testing and validation phases are completed."
            />        
            <HowPoint 
              num="10"
              title="Free maintenance for 2 months: Ensuring the application is error-free and bug-free"
              subtitle="Free maintenance for 2 months to ensure the application runs without issues."
            />        
            <HowPoint 
              num="11"
              title="1-year extension option: System maintenance and ticket quota for changes"
              subtitle="Option to extend maintenance services for 1 year with a ticket quota for system changes."
              end={true}
            />        
          </div>
        }
        {section === 3 &&
          <div className="flex flex-col">
            <HowPoint 
              num="01"
              title="Initial discussion with our account team"
              subtitle="Discuss your network installation needs with our account team to understand the project scope."
            />       
            <HowPoint 
              num="02"
              title="Based on the discussion, we provide recommendations for suitable services"
              subtitle="We will recommend network installation services based on the discussion results."
            />       
            <HowPoint 
              num="03"
              title="Network installation process begins"
              subtitle="Network installation will proceed according to the agreed plan"
            />       
            <HowPoint 
              num="04"
              title="Network testing and troubleshooting"
              subtitle="After installation, we will perform testing and troubleshooting to ensure the network is functioning correctly."
            />       
            <HowPoint 
              num="05"
              title="Reporting and project handover"
              subtitle="We will compile a final report and hand over the project after all work is completed."
            />       
            <HowPoint 
              num="06"
              title="Post-project support if needed"
              subtitle="We provide additional support after project completion if needed."
              end={true}
            />       
          </div>
        }
        {section === 4 &&
          <div className="flex flex-col">
            <HowPoint 
              num="01"
              title="Choose services according to price"
              subtitle="Select the creative development services that fit your budget and needs."
            />
            <HowPoint 
              num="02"
              title="Discussion with our account team"
              subtitle="Discuss your project with the account team to understand the requirements and brief."
            />
            <HowPoint 
              num="03"
              title="Work on the brief based on the discussion"
              subtitle="We will draft and work on the project brief based on the discussion results."
            />
            <HowPoint 
              num="04"
              title="Design or production process begins"
              subtitle="The design or production process will start according to the approved brief."
            />
            <HowPoint 
              num="05"
              title="Revisions if needed"
              subtitle="We will make revisions if needed to ensure the final result meets your expectations."
            />
            <HowPoint 
              num="06"
              title="Project progress reporting"
              subtitle="We will provide regular updates on the project progress."
            />
            <HowPoint 
              num="07"
              title="Project completion and handover to client"
              subtitle="The project will be completed and handed over after all aspects have been finished and approved."
              end={true}
            />
          </div>
        }
        </div>
      </div>
    </div>
  );
}