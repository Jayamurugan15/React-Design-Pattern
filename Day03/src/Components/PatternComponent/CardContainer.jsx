import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="p-5">
      <div className="w-[90%] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
    <div>
      <Card>
        <Card.Header
          image={
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
          }
          name={"Jayamurugan"}
          openToWork={true}
        />

        <Card.Body className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-8">
            <Card.Identity designation={"Web developer"} />
            <Card.QuickStats experience={"1"} projects={8} ctc={"2"} />
            <Card.About
              about={`Web Developer skilled in building responsive, component-based web applications using React.js, Redux Toolkit,
      JavaScript (ES6+),TypeScript and Tailwind CSS. Proficient in translating UI/UX designs into clean, maintainable code with
      seamless API integrations. Continuously enhancing technical expertise through real-world project development`}
            />
          </div>

          <div className="md:w-80 lg:w-96 space-y-10">
            <Card.Metadata
              linkedIn={"https://www.linkedin.com/in/jayamurugans/"}
              location={"Chennai"}
              role={"Web Developer @ Looperex"}
            />

            <Card.Skills
              skills={[
                "Next.js",
                "Typescript",
                "JavaScript",
                "React.js",
                "Redux",
                "Node.js",
                "Express.js",
                "Tailwindcss",
              ]}
            />
          </div>
        </Card.Body>

        <Card.Actions />
      </Card>
    </div>
    </div>
    </div>
  );
};

export default CardContainer;
