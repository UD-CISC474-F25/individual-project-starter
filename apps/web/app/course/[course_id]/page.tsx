const courses: Record<string, string> = {
  '1234': 'Course 1',
  '5678': 'Course 2',
  '9101': 'Course 3',
  '1112': 'Course 4',
  '1314': 'Course 5',
};

export default async function Course({
  params,
}: {
  params: Promise<{ course_id: string }>;
}) {
  const course_id = (await params).course_id;
  const courseName = courses[course_id];
  return (
    <>
      <div className="p-3 font-semibold bg-slate-200 rounded-md m-3">
        <h1 className="text-2xl">
          Hello Hairum Qureshi, welcome to {courseName}!
        </h1>
      </div>
      <div className="mx-3 p-2 border border-sky-950 bg-cyan-950 text-white rounded-md">
        <h2 className="text-xl font-semibold">Recent Announcements</h2>
        <div>
          <p className="my-3 text-sky-300">
            There are currently no recent announcements.
          </p>
        </div>
      </div>
      <div className="mx-3">
        <div className="w-full lg:flex md:flex">
          <div className="p-2 border border-sky-950 bg-cyan-950 text-white my-3 rounded-md w-full lg:w-1/2 md:w-1/2">
            <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
            <p className="my-3 text-sky-300">
              There are currently no upcoming deadlines.
            </p>
          </div>
          <div className="p-2 border border-slate-100 bg-slate-100 my-3 rounded-md w-full lg:w-1/2 md:w-1/2">
            <h2 className="text-xl font-semibold">About This Course</h2>
            <p className="my-3 text-base">
              This is a placeholder description for {courseName}. More details
              about the course will be added here in the future.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              consequatur voluptatum reiciendis assumenda nihil obcaecati nisi
              illo rem. Nobis modi fuga consequatur tempora perferendis possimus
              sapiente eos. Aperiam, aliquid. Excepturi. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. In, esse fugiat! A, ullam
              asperiores, similique deserunt ea voluptate sit nobis nulla
              blanditiis ut debitis reprehenderit reiciendis ad. Necessitatibus,
              vitae quis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio tempora iste voluptas, et nulla corrupti aliquid
              adipisci dicta modi labore libero sed tempore velit aperiam,
              incidunt minima in laboriosam? Quibusdam.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium illo assumenda accusantium non ducimus, perspiciatis
              error nobis vero necessitatibus qui dolorum aperiam omnis est
              aliquid quisquam nihil placeat deserunt porro! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolorem, laudantium, ut
              distinctio commodi natus recusandae iste perspiciatis itaque error
              labore quo dignissimos dolor eius consequatur voluptatibus enim
              sint accusantium ab.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              eum quo neque sint at libero autem ut molestias fugit? Neque
              consequatur nulla asperiores molestiae sed accusamus adipisci
              eveniet sit tempore.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium libero tempora fugit hic ut ratione? Dicta numquam
              labore deleniti, nulla repellendus pariatur doloremque minus unde,
              ab consequuntur reiciendis expedita vitae!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
