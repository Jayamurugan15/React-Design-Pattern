import React from 'react'
import Card from './Card'

const MessyCardContainer = () => {
  return (
    <div>
    <Card
      name={"Jayamurugan"}
      designation={"Web Developer"}
      experience={"1"}
      projects={8}
      ctc={"2"}
      about={`Web Developer skilled in building responsive, component-based web applications using React.js, Redux Toolkit,
      JavaScript (ES6+),TypeScript and Tailwind CSS. Proficient in translating UI/UX designs into clean, maintainable code with
      seamless API integrations. Continuously enhancing technical expertise through real-world project development`}
      LinkedIn={"https://www.linkedin.com/in/jayamurugans/"}
      location={"Chennai"}
      role={"Web Developer @ Looperex"}
      openToWork={true}
      skills={["Next.js","TypeScript","Javascript","React.js","Redux","Node.js","Express.js","Tailwindcss"]}
      image={"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"}/>
    </div>
  )
}

export default MessyCardContainer