import React from 'react';

const Quality = () => {
  return (
    <div id="quality" className="w-full bg-gray-100 py-16">
      {/* Header Section */}
      <div className="lg:w-[80%] w-[90%] mx-auto text-center">
        <h2 className="text-green-500 text-2xl font-semibold">Our Commitment to Quality</h2>
        <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold mt-4">
          Quality at Every Step
        </h1>
        <div className="w-[120px] h-[6px] bg-green-500 mt-4 mx-auto"></div>
      </div>

      {/* Quality Factors */}
      <div className="lg:w-[80%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Quality Factor 1: Expertise */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">Expertise & Experience</h3>
          <p className="text-gray-700 text-base">
            Our team is made up of industry experts with years of experience. We are committed to providing top-notch services, from planning to execution, ensuring every project meets high standards.
          </p>
        </div>

        {/* Quality Factor 2: Customer Satisfaction */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">Customer Satisfaction</h3>
          <p className="text-gray-700 text-base">
            Our priority is customer satisfaction. We listen to our clients and work closely with them to ensure their needs and expectations are met, every time.
          </p>
        </div>

        {/* Quality Factor 3: Quality Materials */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">High-Quality Materials</h3>
          <p className="text-gray-700 text-base">
            We use only the best quality materials in all of our projects. This ensures that the final result is not only visually stunning but also durable and long-lasting.
          </p>
        </div>

        {/* Quality Factor 4: Timely Delivery */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">Timely Delivery</h3>
          <p className="text-gray-700 text-base">
            We understand the importance of deadlines. Our team works efficiently to complete projects on time, without compromising quality.
          </p>
        </div>

        {/* Quality Factor 5: Transparent Pricing */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">Transparent Pricing</h3>
          <p className="text-gray-700 text-base">
            We offer clear, upfront pricing with no hidden costs. Our clients always know exactly what they’re paying for, ensuring trust and transparency in every project.
          </p>
        </div>

        {/* Quality Factor 6: Attention to Detail */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-bold text-black mb-3">Attention to Detail</h3>
          <p className="text-gray-700 text-base">
            We focus on every little detail to ensure that the final result meets our high standards. Our meticulous approach guarantees that every aspect of the project is perfect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
