import React from 'react';
import images from '../utils/images';
import Breadcrumb from '../Components/BreadCrumb';
import Footer from '../Components/Footer';

const MarketEdge = () => {
  return (
    <div className='mt-20 text-gray-800'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>Market Edge</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: 'Market Edge', href: '/market-edge', isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
          <h1 className='h2'>Market Edge</h1>
          <h3 className='h5'>Advanced Analytics on Commodity Data</h3>

          <div className='flex flex-col gap-6'>
            <img
              src={images.marketEdge3}
              className='md:w-2/3 w-full object-contain'
              alt='Main visualization'
            />
          </div>

          <div className='my-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Real-time Data</h4>
              <p className='body-2'>
                View real-time data, along with historical data of all your prices. Simply connect to the data source
                that is providing you data, and the solution is ready to provide sophisticated analytics on your data.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Charting and Analysis</h4>
              <p className='body-2'>
                MarketEdge gives you the flexibility to create several technical analysis indicators on your chart, on
                the fly. The analysis module allows users to view historical returns and rolling-window volatility. All
                technical indicators and analysis are built on user-defined values.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Interactive Visualizations</h4>
              <p className='body-2'>
                You can read prices as you hover your cursor on the chart. You can zoom in, zoom out, and even save your
                charts along with all the analysis as images for your report.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Advanced Analytics</h4>
              <p className='body-2'>
                You can decompose any price series into sub-components, and view and analyze the trend and seasonality
                components of any price series separately. This kind of decomposition also allows users to see the
                random component of the price movement, and tell them what portion of a large price move was purely
                random.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Artificial Intelligence (AI) Driven Forecast</h4>
              <p className='body-2'>
                The web based solution also allows you to forecast prices till a user-defined period using Machine
                Learning algorithms, providing you an edge over several other Market players. MarketEdge’s forecasting
                algorithms is tuned to consider seasonality, missing data points, and trends inherent in any price
                series, leverage it to understand patterns and use it to predict future prices and trends.
              </p>
              <img
                src={images.marketEdge}
                className='md:w-1/3 w-full object-contain my-4'
                alt='AI-driven forecast visualization'
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketEdge;
