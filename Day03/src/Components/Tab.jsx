import React, {
  useState,
  Children,
  defaultValue,
  isValidElement,
  cloneElement,
} from "react";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const enchanceChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;

    if (
      child.type === Tab.List ||
      child.type === Tab.Trigger ||
      child.type === Tab.Content
    ) {
      return cloneElement(child, {
        activeTab,
        setActiveTab,
        ...child.props,
      });
    }
    return child;
  });
  return <div>{enchanceChildren}</div>;
};

function TabList({children,activeTab,setActiveTab}) {
    const enchancedTabs = Children.map(children,(child)=>{
        if(!isValidElement(child) || child.type !== Tab.Trigger) return child;

        return cloneElement(child,{
            activeTab,
            setActiveTab,
            ...child.props
        })
    })

    return (
        <div role="tablist" className={`flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200`}>
            {enchancedTabs}
        </div>
    )
}


function TabTrigger({value,children,activeTab,setActiveTab}){
    const isActiveTab = activeTab === value;

    return (
        <button
        role="tab"
        aria-selected={isActiveTab}
        onClick={()=>setActiveTab(value)}
        className={`px-5 py-3 font-medium rounded-t-lg transition-all duration-300
        ${ isActiveTab ? "bg-white text-blue-600 border border-b-0 border-gray-200 shadow-sm -mb-px" 
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/60"}`}>
            {children}
        </button>
    )
}


function TabContent ({value,children,activeTab}){
    if(activeTab !== value) return null ;
    return <div role="tabpannel">{children}</div> 
}


TabList.List = TabList;
Tab.Trigger = TabTrigger;
Tab.Content = TabContent;

export default Tab;
