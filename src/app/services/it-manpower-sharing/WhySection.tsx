import { CheckIcon } from "@heroicons/react/solid";

const WhySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 px-40">
      <div className="md:w-1/3 text-8xl font-bold text-sky-950 font-sans">
        Why Choose Us?
      </div>
      <div className="md:w-2/3 md:ml-8 mt-8 md:mt-0">
        <ul className="mt-8 space-y-4 text-lg font-sans text-gray-700 my-5">
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              With over three years of proficiency, our IT experts are highly
              skilled and experienced in their fields.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              We can supply IT talent within 7 - 21 days, depending on your
              business needs and work arrangements (remote, hybrid, onsite),
              providing quick solutions to meet project deadlines.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              Choose from our flexible pricing models - seniority based pricing
              - tailored to suit your unique requirements, based on the level of
              seniority required.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              Cont Solutions does not charge additional management fees,
              ensuring cost-effective services.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              If a talent doesn't meet performance expectations, we offer a
              replacement guarantee during the contract period.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              Our Project Manager will ensure that the IT talent performs to
              your expectations, offering ongoing monitoring and quality
              assurance.
            </span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="w-6 h-6 text-teal-500 mr-3" />
            <span>
              Our team is adept at deploying a diverse set of skills essential
              for intricate projects, ensuring we align with the demands of
              contemporary workforce needs.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhySection;
