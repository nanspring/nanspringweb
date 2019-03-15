import React, { Component } from 'react';
import ProjComp from '../../meanuComponent/projcomponent'

class Project extends Component {
  render() {
    const text = ['Used numerical features to predict laser failure and survival probability. Data transforming. Data cleaning. Feature selection.\n Predict days to fail with around 30 days mean absolute error. Exponential curve fit for survival probability.\nPerform various models on the data, such as Curve Fit, Random Forest Regression, XGBoost and Support Vector Regression.',
                  'Created a missing pet service by implementing Frame-Based Approach. The service asked different questions to customers based on missing information.\nPattern matching between pattern graphs and TRIPS-web parsed graphs from responding answers. ',
                  'Hand code EM algorithm without any package beside numpy.\nApplied Gaussian mixture models with hidden Markov chain using forward and backward propagation to classify 2D data.\nCalculated maximum likelihood estimation and updated parameters with EM until converged.'
  ]
    return (
      <div className="content-wrap" style={{padding:'20px'}}>
      <ProjComp
        title="KLA Laser Failure Survival Analysis and Prediction (Capstone)"
        image="https://media.licdn.com/dms/image/C4D0BAQFlyi5TTkznCw/company-logo_400_400/0?e=1560384000&v=beta&t=lZKRK6AduPzVFNwK5uqvvoGiYGgJr-Uyh_PlU9-WRnY"
        url="https://www.kla-tencor.com/"
        time="Fall 2019"
        description={text[0]}
        tag="#Data Science #Python #Scikit-learn #Matlab #Time Series Data Analysis #Data Visualization"
      />

      <ProjComp
        title="NLP Missing Pet Service"
        image="https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V_400x400.jpeg"
        time="Fall 2019"
        description={text[1]}
        tag="#Data Science #NLP #TRIPS #Python #Scikit-learn #Linux"
      />

      <ProjComp
        title="Expectation Maximization with Gaussian Model and Hidden Markov Chain"
        image="https://valserb.files.wordpress.com/2011/08/mma.png?w=600&h=582"
        time="Spring 2018"
        description={text[2]}
        tag="#Data Science #Machine Learning #Python"
      />

      </div>
    );
  }
}
export default Project;
