import Module from '../../../../components/modules/Module';
import SearchBar from '../../../../components/SearchBar';

export default function Assignments() {
  return (
    <div className="w-full">
      <div className="mx-3">
       <SearchBar placeholder = {"Search for assignment..."} />
      </div>
      <Module moduleName={'Module 1'} numSections={10} />
      <Module moduleName={'Module 2'} numSections={5} />
      <Module moduleName={'Module 3'} numSections={7} />
      <Module moduleName={'Module 4'} numSections={3} />
    </div>
  );
}
