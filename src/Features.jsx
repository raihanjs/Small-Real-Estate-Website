import { Birthday, Matching, Support, Tours } from "./Components/Svg";

export default function Features() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Main Features Of Play
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <Birthday />
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Premium Property Listings
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Discover an array of hand-picked properties that meet the
                highest standards of luxury and comfort.
              </p>
              <a
                href="javascript:void(0)"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <Matching />
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Personalized Property Matching
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Our advanced matching system pairs you with properties that
                align with your specific needs and desires.
              </p>
              <a
                href="javascript:void(0)"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <Support />
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Expert Guidance and Support
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Benefit from the expertise of our dedicated team of real estate
                professionals.
              </p>
              <a
                href="javascript:void(0)"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <div className=" group mb-12">
              <Tours />
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Virtual Tours
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                Take advantage of our cutting-edge virtual tours and 3D
                walkthroughs to explore properties from the comfort of your
                home.
              </p>
              <a
                href="javascript:void(0)"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
