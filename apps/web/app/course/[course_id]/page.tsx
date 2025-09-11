interface PageProps {
  params: {
    course_id: string;
  };
}

const courses: Record<string, string> = {
  '1234': 'Course 1',
  '5678': 'Course 2',
  '9101': 'Course 3',
  '1112': 'Course 4',
  '1314': 'Course 5',
};

export default function page({ params }: PageProps) {
  const courseName = courses[params.course_id];
  return (
    <>
      <div className="p-3 bg-cyan-700 text-white rounded-md m-3">
        Hello Hairum Qureshi, welcome to {courseName}!
      </div>
      <div className="w-[95%] p-2 border border-sky-950 bg-cyan-950 text-white m-auto my-3 rounded-md">
        <h2 className="text-xl font-semibold">Recent Announcements</h2>
        <p className="text-sm my-3 text-sky-300">
          There are currently no recent announcements.
        </p>
      </div>
      <div className="m-3 p-2 border border-sky-950 bg-blue-950 text-white my-3 rounded-md">
        <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
        <div>
          <p className="text-sm my-3 text-sky-300">
            There are currently no upcoming deadlines.
          </p>
        </div>
      </div>
      <div className="w-full h-auto p-3">
        <h2 className="text-2xl font-semibold">About This Course</h2>
        <p className="my-3 text-base">
          This is a placeholder description for {courseName}. More details about
          the course will be added here in the future.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          consequatur voluptatum reiciendis assumenda nihil obcaecati nisi illo
          rem. Nobis modi fuga consequatur tempora perferendis possimus sapiente
          eos. Aperiam, aliquid. Excepturi. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. In, esse fugiat! A, ullam asperiores,
          similique deserunt ea voluptate sit nobis nulla blanditiis ut debitis
          reprehenderit reiciendis ad. Necessitatibus, vitae quis. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Minima quisquam vero incidunt ipsa temporibus beatae amet tempore
          illum nostrum! Natus earum nisi odit officia totam deserunt, culpa
          ipsa pariatur cumque?
        </p>
      </div>
    </>
  );
}
