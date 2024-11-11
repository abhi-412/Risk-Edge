import React from 'react';
import images from '../utils/images';
import Breadcrumb from '../Components/BreadCrumb';
import Footer from '../Components/Footer';

const PlanEdge = () => {
  return (
    <div className='mt-20 text-gray-800'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>Plan Edge</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: 'Plan Edge', href: '/plan-edge', isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
          <h1 className='h2'>Plan Edge</h1>
          <h3 className='h5'>Planning & Analysis Solution</h3>

          <div className='flex flex-col gap-6'>
            <img
              src={images.planEdgeMain}
              className='md:w-2/3 w-full object-contain'
              alt='Plan Edge Main'
            />
            <p className='body-2 italic'>
              Plan Edge is a web-based Planning & Analysis Solution that uses AI to give users instantaneous insights
              throughout the year.
            </p>
          </div>

          <div className='my-4 flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Automate Budgeting and Planning</h4>
              <p className='body-2'>
                Almost 95% of CFOs believe that the Finance function must have better technology capability than they
                have now. This applies to their Monthly & Quarterly Budgeting & Planning exercises too. With Plan Edge,
                it is easy to automate budgeting models by eliminating spreadsheets for users across departments.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Real-time Analysis</h4>
              <p className='body-2'>
                Plan Edge allows users to analyze and simulate their data in real-time, using every single input that
                impacts their output. The incremental impact of every input can be viewed both in tables and graphically.
                All of this real-time analysis is made possible using complex in-memory computations at the core of the
                solution.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Flexible Data Integrations</h4>
              <p className='body-2'>
                Datasets of all sizes—large or small, and in all formats—can be handled easily by the solution through
                its flexible data integration APIs. External data can also be brought into the system on a need basis.
                The solution can manage custom business processes with ease, relying on its in-built reporting and
                visualization libraries to deliver optimal results for users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanEdge;
