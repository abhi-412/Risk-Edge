import images from "./images";

export const caseStudies = [
    {
        title:"Using Machine Learning to Predict Machine Failures",
        desc:"Client is a large Renewable Energy Company with more than 4 GW of production capacity.",
        img:images.case7,
        link:"/#ml-predicting-failure",
        description: {
            name: "Machine Learning – Predicting Machine Failures",
            context: "Business Context",
            subhead: "Predicting Machine Failures",
            type: "PROJECT",
            introduction: [
                "Client is a large Renewable Energy Company with over 4 GW production capacity.",
                "They wanted to minimize downtime caused by inefficient or broken machinery, including windmills and solar panels."
            ],
            problem: [
                "Telemetry data collected at per-second intervals was massive and compressed, making it hard to use for analysis.",
                "Breakdown data was stored separately in an ERP system, complicating data integration."
            ],
            challenges: [
                "Combining diverse data sources and managing high-velocity, large-volume telemetry data required advanced techniques.",
                "Data cleaning and preparation were essential to reduce dataset sizes for manageable reporting and predictions."
            ],
            solutionName: "Risk Edge Machine Failure Prediction",
            solution: [
                "Risk Edge processed terabytes of data to deliver compact datasets for reporting and implemented Recurrent Neural Networks for failure prediction.",
                "The solution reduced downtime by 60% and expanded management reporting capabilities to include new parameters."
            ]
        }
    },
    {
        title:"Automating Market Risks and P&L Calculations",
        desc:"Client is a leading Singapore based Agri-business operating in over 70 countries, and supplies food and industrial raw materials to over 22,000 customers worldwide.",
        img:images.case2,
        link:"/#automating-market-risk",
        description: {
            name: "Machine Learning Solution – Predicting Yield and P&L Simulation",
            context: "Business Context",
            subhead: "Machine Learning Software for Predicting Yield and P&L Simulation – For a large Agri-business",
            type: "PROJECT",
            introduction: [
                "Client is a leading Singapore-based Agri-business operating in over 70 countries.",
                "They supply food and industrial raw materials to over 22,000 customers worldwide and operate in many commodity segments."
            ],
            problem: [
                "Client wanted to improve their budgeting process, which was reliant on cumbersome and inaccurate spreadsheets for simulating P&L parameters.",
                "They needed a deeper understanding of relationships between inputs like ratios, prices, and currencies and outputs like PBT and EBITDA, as well as advanced yield prediction."
            ],
            challenges: [
                "Short time frame to deliver the solution before the upcoming budgeting process.",
                "Required understanding of complex relationships between various financial and operational parameters."
            ],
            solutionName: "Risk Edge ML Budgeting Solution",
            solution: [
                "Risk Edge delivered a web-based solution within one month, enabling P&L simulation and crop yield prediction based on historical data.",
                "The solution featured 3D charting for visual insights, in-memory calculations for real-time parameter adjustments, and advanced machine learning algorithms for accurate yield prediction."
            ]
        }
    },
    {
        title:"Yield Prediction for a Fortune 500 Agri Client",
        desc:"Client is a SE Asia based company who is one of the world’s largest producers of Oil Palm. ",
        img:images.case3,
        link:"/#yield-prediction-for-agri-client",
        description: {
            name: "Machine Learning – Yield Prediction for Palm Crops",
            context: "Business Context",
            subhead: "Yield Prediction for a Fortune 500 Agri Client",
            type: "PROJECT",
            introduction: [
                "Client is a SE Asia-based company and one of the world’s largest producers of Oil Palm.",
                "To manage their business operations and sales planning, the management wanted a fairly accurate picture of expected yield, which was fluctuating recently due to weather patterns.",
                "Client invited us to help them predict Yield on Palm crops."
            ],
            problem: [
                "Client wanted to use AI to predict yield on their crops with good accuracy, so they could use those numbers to plan their business operations and sales targets better.",
                "Their internal data analytics team had been trying to predict yield for their palm crops but were unable to achieve good accuracy."
            ],
            challenges: [
                "Unorganized data, including several different data formats (maps, CSV, XML, Excel, etc.), were difficult to reconcile into one large dataframe.",
                "Several critical parameters for predicting Yield had missing values in between.",
                "Quite a few critical parameters like fertilizer application were missing from the data. Others were based on random sampling rather than accurate measurement."
            ],
            solutionName: "Risk Edge Machine Learning Ensemble",
            solution: [
                "Risk Edge brought in well-researched algorithms and created an ensemble of those algorithms to deliver results. The accuracy was around 82%, which was deemed acceptable by the management team.",
                "Hierarchical models, along with several other Machine Learning models, were used to predict Yield. Different algorithms were applied to interpolate missing values and extract seasonality and trends from critical parameters."
            ]
        }
    },
    {
        title:"Consulting to build a new Hedge Framework",
        desc:"Client is an India based company with business primarily in Crude Oil Refining and Marketing of products.",
        img:images.case4,
        link:"/#consulting-to-build-hedge-framework",
        description: {
            name: "Risk Consulting – Developing a New Hedging Model",
            context: "Business Context",
            subhead: "Risk Consulting Project for a Large Oil Refining company",
            type: "PROJECT",
            introduction: [
                "Client is an India-based company with business primarily in Crude Oil Refining and Marketing of products.",
                "With Crude Oil prices showing high volatility, Client’s profitability was becoming very uncertain and the client was losing money on both the buy and sell side."
            ],
            problem: [
                "Client realized that existing hedging models were not working for them, and the whole hedging strategy was being questioned at the board level.",
                "Client approached Risk Edge to evaluate a possible development of a new Hedge Model based on its unique business requirements.",
                "The objective was to deliver a new model that was flexible and cost-effective compared to their existing hedging models."
            ],
            challenges: [
                "Unorganized data was one of the issues faced in the project since the client’s entire position data was stored in many excels, some of which weren’t reconciling.",
                "Risk Edge developed a model after studying the client’s business process, but back-testing past several years of data on that model was a challenge. However, Risk Edge software was utilized in this project for generating results on the past data, and the entire process was automated with it."
            ],
            solutionName: "RISKEDGE SOFTWARE",
            solution: [
                "Risk Edge’s consultants studied the Client’s business processes for a few weeks along with their existing hedging models.",
                "A new proprietary model was built by Risk Edge’s Statistical and Business Analysis teams that suited the client’s requirements better.",
                "A temporary, quick customization of Risk Edge software was done to allow the team to back-test the model on historical data correctly and quickly.",
                "Huge sets of past data were created and run through Risk Edge Software, back-testing results were collected and passed on for further analysis.",
                "Risk Edge delivered the new model along with the back-test results, which showed significant savings in hedging costs for the Client.",
                "Client was able to save over USD 30 million in just hedging costs in a year using the new model. Additionally, the hedging model allowed the client to incorporate qualitative perspectives into hedging decisions."
            ]
        }
    },
    {
        title:"Counterparty Credit Risk Software",
        desc:"Client is a large SE Asia based company trading in Oil and Oil products (including Gas Oil, Fuel Oil and Petrochemicals) and is a part of Forbes Global 2000 companies list.",
        img:images.case5,
        link:"/#counterparty-credit-risk-software",
        description:{
            name:"Counterparty Credit Risk Software Implementation",
            context:"Buisness Context",
            subhead:"Counter-party Credit Risk Solution for a large Oil & Energy Company",
            type:"PROJECT",
            introduction:[
                "Client is a large SE Asia based company trading in Oil and Oil products (including Gas Oil, Fuel Oil and Petrochemicals) and is a part of Forbes Global 2000 companies list. It has a huge sourcing requirement from thousands of Counterparties through multi-year contracts, which exposed the Client to Market & Credit Risks.",
                "Counterparty defaults caused operational disruptions and reputation loss, besides losses in terms of replacement cost.",
                "Client was using an Excel based model to compute Potential Future Exposure (PFE) for managing Counterparty Defaults."
            ],
            problem:[
                "Running the model in excel for each deal was practically impossible and was also error prone, thus limiting the use of the model",
                "Correlation across counterparty defaults due to correlation between various commodities) was not being taken into consideration in the model",
                "Client wanted a custom GBM (Geometric Brownian Motion) based system that could provide correlated estimates of their commodity prices",
                "There was no integration with the existing Trading system in the company."
            ],
            challenges:[
                "Oil & Energy companies work with a lot of Basis contracts and complex OTC contracts structured around them posed a challenge to model development",
                "Unorganized data, including Price data with different frequencies (daily, weekly, monthly) required changes to the standard approaches",
                "Monte-Carlo Simulations when run on thousands of contracts, computed billions of intermediate values, thus posing a computational challenge"
            ],
            solutionName:"RISKEDGE SOFTWARE",
            solution:[
                "Risk Edge delivered a Robust and scalable Counterparty Credit Risk Solution for the entire Portfolio and integrated it with their trading and back-office systems.",
                "The Client now sees each Counterparty’s Potential Future Exposure for multiple horizons on a daily basis. The solution also points when the Exposure is max / min and whether there is any concentration of risk among the counterparties",
                "Module integrates with key systems in the organization to give an accurate and holistic picture of the Credit Risk",
                "Performance optimization was done using multi-threading and parallel processing to calculate PFE very efficiently and quickly."
            ]

        }
    },
    {
        title:"Using Machine Learning (NLP) to build a Robo-Advisor",
        desc:"Client is a leading Global Forbes 100 Investment Bank with more than USD 700 bn in Assets under Management.",
        img:images.case6,
        link:"/#using-machine-learning-to-build-robo-advisor",
        description: {
            name: "Machine Learning – Using NLP to Power a Robo-Advisor",
            context: "Business Context",
            subhead: "NLP-based algorithms for powering a Robo-Advisor",
            type: "PROJECT",
            introduction: [
                "Client is a Forbes 100 Investment Bank managing over USD 700 billion in assets and serving high-net-worth clients.",
                "They needed an intelligent system to automate client goal suggestions based on social media activity."
            ],
            problem: [
                "Advisors faced challenges keeping up with clients' rapidly changing contexts and relied on meetings to determine goals, wasting time.",
                "A compliant, intelligent system was needed to integrate data from various sources and present summarized insights."
            ],
            challenges: [
                "Integrating data from multiple sources, including social, financial, and health, posed significant challenges.",
                "The project required strict adherence to GDPR and handling large data volumes from various sources."
            ],
            solutionName: "Risk Edge NLP Robo-Advisor",
            solution: [
                "Risk Edge developed and implemented machine learning algorithms and managed offshore activities for the project.",
                "The scalable solution processed large data volumes, delivered insights via a NoSQL database, and enhanced advisor efficiency and client satisfaction."
            ]
        }
    },
    {
        title:"Deep Learning : Journal Entry Anomaly Detection",
        desc:"Client is a Global Metals & Mining Company. ",
        img:images.case1,
        link:"/#deep-learning-journal-anomaly-detection",
        description: {
            name: "Machine Learning – Journal Entry Anomaly Detection",
            context: "Business Context",
            subhead: "Predicting Anomalies in Journal Entries",
            type: "PROJECT",
            introduction: [
                "Client is a Global Metals & Mining Company with an Internal Audit team overwhelmed by false positives in journal entry reviews.",
                "They sought a better framework to detect and reduce false positives in anomaly detection."
            ],
            problem: [
                "The existing rule-based framework was insufficient, generating numerous false positives and necessitating random sampling.",
                "Large, unlabeled datasets complicated training AI algorithms for anomaly detection."
            ],
            challenges: [
                "Handling large datasets required special hardware and feature engineering to reduce data size and class imbalance.",
                "Strict IT guidelines demanded secure operations, often within the client’s cloud environment on Microsoft Azure."
            ],
            solutionName: "Risk Edge Journal Anomaly Detection",
            solution: [
                "Risk Edge used feature engineering to reduce data size and imbalance, and implemented AutoEncoder algorithms for anomaly detection.",
                "The solution incorporated statistical filters and AI to reduce false positives significantly, improving anomaly detection accuracy."
            ]
        }
    },
    {
        title: "Risk Consulting – Automating Market Risk Management and Mark-to-Market P&L Calculations",
        desc: "Market Risks & P&L Calculations – For a large Agri-business",
        img: images.case8,
        link:"/#automating-market-risk",
        description: {
            name: "Risk Consulting – Automating Market Risk Management and Mark-to-Market P&L Calculations",
            context: "Business Context",
            subhead: "Market Risks & P&L Calculations – For a large Agri-business",
            type: "PROJECT",
            introduction: [
                "Client is a leading Global Agri-business operating in several countries.",
                "They need to maintain and update their Mark-to-Market (M2M) reports for all transactions in each commodity segment periodically and accurately."
            ],
            problem: [
                "Client has a myriad of systems and processes to calculate their M2M P&L for each commodity. These systems and processes have become too complex to operate and change over time.",
                "Client had acquired commodity trading businesses from competitors, bringing new systems and processes that added to the complexity of integrating existing and new systems.",
                "Client needed Risk Edge to understand existing systems (including spreadsheets) and processes for multiple commodities, and to provide an execution strategy to change existing systems and integrate new ones for complete automation of Market Risk and M2M Calculations."
            ],
            challenges: [
                "Coordination with large, globally dispersed teams owning different applications. Some applications were new even to the teams, while others were in transition.",
                "Unique nature of transactions across different commodities required tailored automation for risk and P&L calculations.",
                "The time provided for the project was very short, as the project had been ongoing internally for many months with little success."
            ],
            solutionName: "Risk Edge Market Risk Automation",
            solution: [
                "Risk Edge leveraged its team's prior experience with large Agri companies to quickly understand the specificity of trading across different commodities, significantly reducing the time to execution.",
                "For one commodity, Risk Edge tweaked existing in-house systems to automate the process quickly, trained teams on input rules and formats, and guided them on extracting daily/weekly reports.",
                "For another commodity, Risk Edge introduced a specific software capable of integrating multiple systems across geographies, achieving automation goals on time.",
                "The client can now generate daily, weekly, and monthly Market Risks and M2M P&L reports with minimal manual effort. The entire process is transparent, rule-based, and saves hundreds of person-hours annually."
            ]
        }
    }
]