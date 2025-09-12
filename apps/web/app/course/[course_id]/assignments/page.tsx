import Module from '../../../../components/modules/Module';

// TODO - add search bar

export default function Assignments() {
  return (
    <div className="w-full">
      <Module moduleName={'Module 1'} numSections={10} />
      <Module moduleName={'Module 2'} numSections={5} />
      <Module moduleName={'Module 3'} numSections={7} />
      <Module moduleName={'Module 4'} numSections={3} />
    </div>
  );
}
