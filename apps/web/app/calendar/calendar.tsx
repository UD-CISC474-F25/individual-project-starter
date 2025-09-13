'use client';

import { faker } from '@faker-js/faker';
import {
  CalendarBody,
  CalendarDate,
  CalendarDatePagination,
  CalendarDatePicker,
  CalendarHeader,
  CalendarItem,
  CalendarMonthPicker,
  CalendarProvider,
  CalendarYearPicker,
} from '@/_components/ui/shadcn-io/calendar';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const statuses = [
  { id: faker.string.uuid(), name: 'Planned', color: '#6B7280' },
  { id: faker.string.uuid(), name: 'In Progress', color: '#F59E0B' },
  { id: faker.string.uuid(), name: 'Done', color: '#10B981' },
];

// Mock class data - in a real app this would come from your database
const mockClasses = [
    { id: '1', name: 'CISC 474 - Web Development', color: '#3B82F6' },
    { id: '2', name: 'CISC 320 - Algorithms', color: '#10B981' },
    { id: '3', name: 'MATH 242 - Calculus II', color: '#F59E0B' },
    { id: '4', name: 'ENGL 110 - Academic Writing', color: '#EF4444' },
    { id: '5', name: 'PHYS 207 - Physics I', color: '#8B5CF6' },
];

// Generate example features with class assignments
const exampleFeatures = Array.from({ length: 20 })
  .fill(null)
  .map(() => {
    const assignedClass = faker.helpers.arrayElement(mockClasses);
    const status = faker.helpers.arrayElement(statuses);
    return {
      id: faker.string.uuid(),
      name: `${assignedClass.name} - ${capitalize(faker.company.buzzPhrase())}`,
      startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
      endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
      status: {
        ...status,
        color: assignedClass.color, // Use class color instead of status color
      },
      classId: assignedClass.id,
      classColor: assignedClass.color,
    };
  });

const earliestYear =
  exampleFeatures
    .map((feature) => feature.startAt.getFullYear())
    .sort()
    .at(0) ?? new Date().getFullYear();

const latestYear =
  exampleFeatures
    .map((feature) => feature.endAt.getFullYear())
    .sort()
    .at(-1) ?? new Date().getFullYear();

interface CalendarProps {
  visibleClasses: Record<string, boolean>;
  classes: Array<{ id: string; name: string; color: string; visible: boolean }>;
}

const Calendar = ({ visibleClasses }: CalendarProps) => {
  // Filter features based on visible classes
  const filteredFeatures = exampleFeatures.filter(feature => 
    visibleClasses[feature.classId]
  );

  return (
    <CalendarProvider>
      <CalendarDate>
        <CalendarDatePicker>
          <CalendarMonthPicker />
          <CalendarYearPicker end={latestYear} start={earliestYear} />
        </CalendarDatePicker>
        <CalendarDatePagination />
      </CalendarDate>
      <CalendarHeader />
      <CalendarBody features={filteredFeatures}>
        {({ feature }) => <CalendarItem feature={feature} key={feature.id} />}
      </CalendarBody>
    </CalendarProvider>
  );
};

export default Calendar;
