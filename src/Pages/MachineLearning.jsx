import React from 'react';
import images from '../utils/images';
import Breadcrumb from '../Components/BreadCrumb';

const MachineLearning = () => {
  return (
    <div className='py-20 text-gray-800 dark:text-gray-200 dark:bg-gray-900'>
      <div className='py-8 max-w-7xl mx-auto flex flex-col gap-4 px-3'>
        <div className='flex flex-col gap-6 text-blue-600 max-w-5xl'>
          <h1 className='h3'>Predictive Analytics Apps</h1>
          <Breadcrumb
            bg='blue-500'
            items={[
              { label: 'Home', href: '/', isCurrent: false },
              { label: 'Predictive Analytics Apps', href: '/predictive-analytics-apps', isCurrent: true },
            ]}
          />
        </div>
      </div>

      <section className='grid grid-cols-3 gap-4 my-16 max-w-7xl mx-auto p-3'>
        <div className='col-span-3 md:col-span-2 flex flex-col gap-5'>
          <h1 className='h2'>Predictive Analytics Apps</h1>
          <h3 className='h5'>Machine Learning and Advanced Predictive Solutions</h3>

          <div className='flex flex-col gap-6'>
            <img
              src={images.ML}
              className='md:w-2/3 w-full object-contain'
              alt='Main visualization'
            />
            <p className='body-2 italic'>Apps to solve specific Problems.</p>
          </div>

          <div className='my-4 flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Machine Learning</h4>
              <p className='body-2'>
                Risk Edge’s Predictive Analytics Apps allow you to solve a specific set of problems with light,
                cloud-hosted applications that provide real-time visualizations and predictions.
              </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Solve Problems by Predicting Outcomes</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Use different algorithms to predict outcomes of various problems.</li>
                <li className='body-2'>Customized applications for both classification and regression problems.</li>
                <li className='body-2'>
                  Apply the best suited Supervised, Unsupervised, or Reinforcement Learning techniques.
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Understand the Problem</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>We work closely with Business/Domain experts to understand your problems deeply.</li>
                <li className='body-2'>Data selection, wrangling, and pre-processing are done to create optimal training datasets.</li>
                <li className='body-2'>Experiment with multiple variables to find the best dataset.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Visualize Data</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Our approach involves understanding problems deeply with experts.</li>
                <li className='body-2'>Data is selected and processed optimally for training.</li>
                <li className='body-2'>Testing multiple internal and external variables ensures the best dataset.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Build/Simulate Models on the Fly</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Get recommended solutions from experts while having flexibility to update your models.</li>
                <li className='body-2'>Models can be built directly on the web page, making experimentation and optimization easy.</li>
                <li className='body-2'>View real-time changes, predictions, and simulations.</li>
              </ul>
              <img
                src={images.creditDefault}
                className='md:w-1/3 w-full object-contain my-4'
                alt='Content related visualization'
              />
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>All Your Apps Live in Cloud</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Host multiple apps simultaneously on the same server, each serving unique purposes.</li>
                <li className='body-2'>Monitor access rights, audit logs, and performance from a single dashboard.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Light Apps at the Right Price</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>
                  Light apps ensure fast performance and easy maintenance, even with large data volumes.
                </li>
                <li className='body-2'>
                  Apps are individually priced, allowing cost allocation or decommissioning without impact.
                </li>
                <li className='body-2'>
                  Billed monthly with an initial setup fee for solution recommendation and implementation.
                </li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Managed Services</h4>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Experts continuously optimize models for performance, consistency, and accuracy.</li>
                <li className='body-2'>Upgrades reflect model changes or new model inclusions for the best solutions.</li>
              </ul>
            </div>

            <div className='flex flex-col gap-3'>
              <h4 className='h5'>Where Can You Use It?</h4>
              <p className='body-2'>
                Predictive Analytics is applicable across various fields like Risk Management, Marketing, Finance, Data
                Management, HR, and Manufacturing. With data patterns, our experts design algorithms for meaningful
                insights.
              </p>
              <ul className='flex flex-col gap-2 list-disc ml-5'>
                <li className='body-2'>Risk Management: Forecast defaults, detect fraud, predict cash flows or recovery.</li>
                <li className='body-2'>
                  Marketing: Customer segmentation, behavior mapping, churn prediction, and more.
                </li>
                <li className='body-2'>Finance: Budget simulations with 3D charting.</li>
                <li className='body-2'>Data Management: Collect and clean data for internal use.</li>
                <li className='body-2'>
                  Human Resources: Candidate screening, talent management, attrition prediction.
                </li>
                <li className='body-2'>
                  Manufacturing: Predict equipment failures, manage inventory, and optimize quality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MachineLearning;
