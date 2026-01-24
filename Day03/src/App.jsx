import { useState } from "react";
import ModalContainer from "./Components/ModalContainer";
import CardContainer from "./Components/PatternComponent/CardContainer";
import MessyCardContainer from "./Components/MessyComponent/MessyCardContainer";
import Tab from "./Components/Tab";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Compound Component Pattern
        </h1>
        <Tab defaultValue="Modal">
          <Tab.List>
            <Tab.Trigger value="Modal">Modal</Tab.Trigger>
            <Tab.Trigger value="Messy">Without Pattern</Tab.Trigger>
            <Tab.Trigger value="pattern">With Pattern</Tab.Trigger>
          </Tab.List>

          <Tab.Content value="Modal">
            <ModalContainer />
          </Tab.Content>

          <Tab.Content value="Messy">
            <MessyCardContainer />
          </Tab.Content>

          <Tab.Content value="pattern">
            <CardContainer />
          </Tab.Content>
        </Tab>

      </div>
    </div>
    </>
  );
}

export default App;
