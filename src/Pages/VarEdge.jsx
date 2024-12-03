import React from 'react';
import images from '../utils/images';
import Breadcrumb from '../Components/BreadCrumb';

const VarEdge = () => {
  return (
    <div className='py-20 text-gray-800 dark:text-gray-200 dark:bg-gray-900'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>VaR Edge</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: 'VaR Edge', href: '/var-edge', isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
          <h1 className='h2'>VaR Edge</h1>
          <h3 className='h5'>Configurable, Easy-to-Use & Cost-Effective</h3>

          <div className='flex flex-col gap-6'>
            <img
              src={images.marketEdge3}
              className='md:w-2/3 w-full object-contain'
              alt='VaR Edge Main'
            />
            <p className='body-2 italic'>
              VaR Edge Software is a VaR (Value at Risk) based Commodity Risk Management System that provides deeper
              insights and control on your business. An easy-to-use web-based solution, VaR Edge enables physical
              commodity trading companies to reduce costs, improve profitability, and get better at risk compliance. It
              is an integrated risk analytics platform so companies can manage commodity price volatility and credit
              risks on their portfolios easily.
            </p>
          </div>

          <div className='my-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Why VaR Edge?</h4>
              <p className='body-2'>Here’s why it is better than any other software you’ve come across!</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>World’s Largest Pricing Library</h4>
              <p className='body-2'>Price any exotic or structured derivative instrument, including multiple exercise, Asian, barrier, binary, and spread options.</p>
              <p className='body-2'>Algorithms are custom-built for the commodities industry.</p>
              <p className='body-2'>The world’s largest library in a commodity risk system, designed to easily accommodate many more algorithms.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Measure Risks Accurately, Faster</h4>
              <p className='body-2'>Measure and track price/market, counter-party credit, and operational risks seamlessly.</p>
              <p className='body-2'>Unique risk perspectives for different teams improve business visibility.</p>
              <p className='body-2'>Hyper-threading enables powerful computing, delivering more accurate results faster.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Automate Risk Processes</h4>
              <p className='body-2'>Automate several inter-related risk processes, saving significant time and effort.</p>
              <p className='body-2'>Teams can spend more time analyzing reports rather than creating them.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Flexibility to Suit Your Business</h4>
              <p className='body-2'>High configurability allows you to scale the system with business needs.</p>
              <p className='body-2'>Easily tweak settings for the best-suited configuration for your unique business.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Manage Data Better</h4>
              <p className='body-2'>Replace all risk-related Excel or legacy systems with a single, web-based solution.</p>
              <p className='body-2'>Eliminate reconciliation issues, and data or formula errors between systems.</p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>A Risk System You’ll Actually Use!</h4>
              <p className='body-2'>Most organizations have a risk system but do not use it because it is cumbersome.</p>
              <p className='body-2'>Enabled for touch-based devices, teams can easily make RiskEdge a part of their daily activity.</p>
            </div>

            {/* Repeat the same pattern for the remaining content sections */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default VarEdge;
