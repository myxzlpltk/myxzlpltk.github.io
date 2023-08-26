import React from "react";
import modules from "../../data/modules.json";
import Text from "../atoms/Text";
import ModuleCard from "../molecules/ModuleCard";

const ModulesSection = () => {
  return (
    <section className="bg-white" id="modules">
      <div className="container py-6 md:py-8 lg:py-10">
        <Text headline4 className="text-left mb-4">
          Read My Learning Modules
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {modules.map((module, i) => (
            <div key={`module-${i}`}>
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
