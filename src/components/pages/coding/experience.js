import React, { Component } from 'react';
import Excomp from '../../meanuComponent/excomponent'

class Experience extends Component {

  render() {
    const text=['SJW Airport Project (headyonder.com): Internal Airport Data Manipulation Web  \n  Built customer service, coupon, blacklist jsp web pages by using MVC framework and cloud data storage with SVN.\nAchieved functions, such as add, delete, edit, import and export in each web page. Allowed updates between relational database.\nWeb scripted ctrip.com, expedia.com, etc to provide aviation data for customers.',
  "Helped to reduced loss in revenue by cutting the lowest 5% customer and resulting in an 8% of overdue. Built a credit score toolkit by using logistic regression. \n •	Implemented data cleaning, feature selection. Drew ROC graph, KS. Calculated Gini coefficient, information entropy, weight of evidence to evaluate the feasibility of the model. \n Ran data on multiple models, such as random forest, GDBT, SVM and NN to evaluate the logistic regression model.",
  "Currently working on this internship. More detail is coming soon."]
    return (
      <div className="content-wrap" style={{padding:'20px',height:'auto'}}>
      <Excomp
        image="https://media.licdn.com/dms/image/C510BAQFk0-jaGkwBGw/company-logo_400_400/0?e=1560384000&v=beta&t=E3Jo_3jMoDVGs-d-eHBvpkNQxsesTGbg6TzHhGDG0Yw"
        company="City of Rochester"
        url="https://www.cityofrochester.gov"
        position="Marketing Analyst Intern"
        place="Rochester, NY"
        timeline="03/2019 - 05/2019"
        description={text[2]}
        tag="#Data Science #Python #Scikit-learn #Machine learning"
        />

      <Excomp
        image="https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/ad/ab/2a/adab2a6b-daae-4e13-2c3c-8609fc0a6513/source/60x60bb.jpg"
        company="Naxin 纳鑫集团"
        url="http://www.naxinjituan.com/"
        position="Credit Score Modeling Intern"
        place="Shenzhen, China"
        timeline="07/2018 - 08/2018"
        description={text[1]}
        tag="#Data Science #Python #SAS #Scikit-learn #Machine learning"
        />

      <Excomp
        image="http://www.headyonder.com/images/pic-logo.png"
        company="headyonder 北京郝德阳数据科技"
        url="http://www.headyonder.com/"
        position="Software Engineer Intern"
        place="Chengdu, China"
        timeline="05/2018 - 06/2018"
        description={text[0]}
        tag="#Web #MySQL #Full Stack Web development in Java #Spring-MVC framework #MyBatis #AJAX #jQuery #JavaScript #HTML #SVN version control #CSS and debugged using Chrome Developer Tools."
        />
      </div>
    );
  }
}
export default Experience;
