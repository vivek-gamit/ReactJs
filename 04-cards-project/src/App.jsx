import React from 'react'
import Card from './components/card'

function App() {

  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postDate: "2 days ago",
    role: "Senior UI/UX Designer",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$120 per hour",
    location: "Mountain View, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postDate: "1 week ago",
    role: "Backend Developer",
    workType: "Full Time",
    level: "Mid Level",
    charge: "$105 per hour",
    location: "Redmond, Washington"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postDate: "5 days ago",
    role: "Cloud Architect",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$145 per hour",
    location: "Seattle, Washington"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    postDate: "3 days ago",
    role: "iOS Developer",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$135 per hour",
    location: "Cupertino, California"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpVAlLACr6KzXQL2tbR6jxHkBzABps8IIGg&s",
    companyName: "IBM",
    postDate: "2 weeks ago",
    role: "Machine Learning Engineer",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$150 per hour",
    location: "Armonk, New York"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postDate: "4 days ago",
    role: "Front-End Developer",
    workType: "Full Time",
    level: "Mid Level",
    charge: "$110 per hour",
    location: "Los Gatos, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    postDate: "1 week ago",
    role: "Full Stack Developer",
    workType: "Part Time",
    level: "Junior Level",
    charge: "$80 per hour",
    location: "Austin, Texas"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postDate: "6 days ago",
    role: "React Native Developer",
    workType: "Full Time",
    level: "Mid Level",
    charge: "$115 per hour",
    location: "Menlo Park, California"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    postDate: "3 weeks ago",
    role: "Product Designer",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$125 per hour",
    location: "San Jose, California"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    postDate: "1 day ago",
    role: "AI Research Engineer",
    workType: "Full Time",
    level: "Senior Level",
    charge: "$180 per hour",
    location: "San Francisco, California"
  }
];

  return (
    <div className='parent'>
    {jobs.map(function(elem){
      return <h1><Card logo={elem.brandLogo} company={elem.companyName} date={elem.postDate} role={elem.role} type={elem.workType} level={elem.level} price={elem.charge} location={elem.location}/></h1>
    })}



    </div>
  )
}

export default App
