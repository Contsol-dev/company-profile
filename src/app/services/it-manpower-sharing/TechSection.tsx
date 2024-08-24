import StackIcon from "tech-stack-icons";

const TechSection = () => {
  return (
    <section className="flex flex-col items-center bg-sky-950 p-20">
      <h2 className="text-5xl font-bold text-gray-100 text-center mb-5 font-sans">
        Technology Stack
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 text-2xl text-gray-100">
        <div>
          <h3 className="font-semibold mb-4">Backend Services</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="nodejs"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="laravel"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="js"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="php"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Front End Development</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="reactjs"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="angular"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="tailwindcss"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="nextjs2"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Mobile Development</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="kotlin"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="flutter"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="reactjs"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Databases</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="mysql"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="postgresql"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="mongodb"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="firebase"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Internet Of Things</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="c++"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Network</h3>
          <ul>
            <li>Cisco</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Data Analysis</h3>
          <ul>
            <li>
              <StackIcon
                name="python"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Deployment Services</h3>
          <ul className="flex space-x-4">
            <li>
              <StackIcon
                name="docker"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="netlify"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
            <li>
              <StackIcon
                name="gcloud"
                className="xl:h-[64px] lg:h-[64px] h-[48px] w-auto  grayscale hover:grayscale-0 hover:transition-all duration-1000"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
