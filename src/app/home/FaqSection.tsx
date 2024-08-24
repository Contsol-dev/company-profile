import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const faqData = [
  {
    question: "What are the costs associated with development at Cont Solution?",
    answer: `Cont Solution will discuss the costs with you to find a balance between your system requirements and your budget. We strive to offer competitive pricing while ensuring that the solutions we provide meet your needs effectively. During our consultation, we will work with you to determine a feasible cost structure that aligns with your financial considerations and project scope.`,
  },
  {
    question: "I have a problem but am not sure what system is suitable to address it. How can Cont Solution assist?",
    answer: `If you are facing a problem and are unsure of the appropriate system to resolve it, you can share the details of your issue with us. Our team will collaborate with you to understand your challenges and develop an innovative technological solution tailored to your specific needs. We are committed to providing expert guidance and crafting a solution that effectively addresses your problem.`,
  },
  {
    question: "How long does it take to complete a project at Cont Solution?",
    answer: `The timeline for completing a project at Cont Solution depends on the complexity and scope of the system you require, as well as the deadlines you provide. We will carefully assess your project requirements and work with you to establish a realistic schedule that meets your deadlines. Our goal is to deliver high-quality solutions within the agreed timeframe.`,
  },
  {
    question: "What security measures are implemented in the products developed by Cont Solution?",
    answer: `At Cont Solution, we prioritize security in every product we develop. We incorporate robust security measures, including data encryption, secure access controls, and regular security audits, to safeguard your information and protect against potential threats. You can trust that our products are designed with comprehensive security protocols to ensure your data remains secure and confidential.`,
  },
];

const FaqSection = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-12 bg-cont-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index}>
              <Accordion open={open === index + 1}>
                <AccordionHeader className="text-white" onClick={() => handleOpen(index + 1)}>
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className="text-white">
                  {faq.answer}
                </AccordionBody>
              </Accordion>
              {index < faqData.length - 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
