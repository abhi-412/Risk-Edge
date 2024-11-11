import React from 'react';
import Breadcrumb from '../Components/BreadCrumb';
import Footer from '../Components/Footer';

const CreditRisk = () => {
  return (
    <div className='mt-20 text-gray-800'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>Credit Risk Management</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: 'Credit Risk Management', href: '/credit-risk', isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
          <h1 className='h2'>Credit Risk Management</h1>
          <h3 className='h5'>Actively Avoid Counterparty Defaults</h3>

          <div className='flex flex-col gap-6'>
            <p className='body-2 italic'>
              With VaR Edge, you can actively identify and reduce exposure to counterparties that are most vulnerable to
              defaulting even in the far future. The system intelligently projects correlations amongst each risk factor
              to give you the overall future exposure for each counterparty.
            </p>
          </div>

          <div className='my-4 flex flex-col gap-8'>
            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Potential Future Exposure (PFE)</h4>
              <p className='body-2'>Global Standard in Credit Risk Management</p>
              <p className='body-2'>
                Your Counterparty Credit Risk is calculated with the globally accepted PFE Framework, which is
                thoroughly tested to ensure accurate results.
              </p>
              <p className='body-2'>
                Each of your counterparties has their own PFE number, for multiple holding periods, which tells you
                exactly who is likely to have how much exposure at various points in the future – so you can prepare for
                those exposures today.
              </p>
              <img
                src='http://riskedge.local/wp-content/uploads/2020/09/PFE-Diagram-300x241-1.png'
                className='w-full md:w-2/3 object-contain'
                alt='PFE Diagram'
              />
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Simulations</h4>
              <p className='body-2'>The Basis of a Robust Framework</p>
              <p className='body-2'>
                Measuring Credit Default value accurately really is mostly about how robust your price projection
                mechanism is – and we use Monte-Carlo Simulations – one of the most robust approaches.
              </p>
              <p className='body-2'>
                Path-dependent simulations ensure that there are no compromises on even longer-term holding period
                estimates.
              </p>
              <p className='body-2'>
                Price Curves are built far into the future for each and every benchmark market.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Advanced Model</h4>
              <p className='body-2'>Bringing you the Best in Class</p>
              <p className='body-2'>
                The PFE model is built using the computationally intensive Multi-variate Geometric Brownian Motion
                method.
              </p>
              <p className='body-2'>
                Correlations amongst various risk factors are taken far into the future to achieve correlated projected
                price movements.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>The Tech Edge</h4>
              <p className='body-2'>Accuracy, delivered at Blazing Speed</p>
              <p className='body-2'>
                VaR Edge uses the latest advancements in technology to deliver more accurate results through intense
                processing, faster.
              </p>
              <p className='body-2'>
                Billions of Simulations can be delivered at a speed that you need with a little additional investment in
                hardware.
              </p>
              <p className='body-2'>
                Parallel processing enables RiskEdge to deliver results in almost real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditRisk;
