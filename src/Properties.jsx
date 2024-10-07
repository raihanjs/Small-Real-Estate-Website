import { Bathroom, Bedroom } from "./Components/Svg";

export default function Properties() {
  const rooms = [
    {
      id: 1,
      name: "Modern Design Villa",
      rent: 2000,
      bedrooms: 2,
      bathrooms: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Cozy Mountain Cabin",
      rent: 1500,
      bedrooms: 3,
      bathrooms: 2,
      imgUrl:
        "https://imgproxy.valpas.io/NFJ3OI7JGMyCG_aJUxCyJ134fYTeBFZQ_XEdnAsuynQ/rs:fill:1200:800:0/wm:0:ce:0:0:0.4/aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC85Z3NwODg5dXdjbDgvNFFraHVrcWg0bnk5ZUVaRmRSSjZ3aS9hNDAyOTU5MGQzY2I2MmY4MTE2YmU3MDhiODkwNmVkOC8yNzM5OTQ5NDJfMzQ0MzUyMzQwODk3OTExXzcxMTIyNTM3MTE2ODY5NDAzNjVfbi5qcGc.jpeg",
    },
    {
      id: 3,
      name: "Luxury Apartment Downtown",
      rent: 3000,
      bedrooms: 1,
      bathrooms: 1,
      imgUrl:
        "https://imgproxy.valpas.io/_xB_MHaG1Y_B8Ifn34pyRp42TZWYVnQpiXmzdD87TS0/rs:fill:832:434:0/wm:0:ce:0:0:0.4/aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC85Z3NwODg5dXdjbDgvNTJhNmNJMEp0NXFIcUdJUFQzZE9Lei84MGNjNDFmMWY2NzJkOWQ3OGZiNmVjZWZlYzY3MGI5YS9kZXNpZ25fMi5wbmc.jpeg",
    },
    {
      id: 4,
      name: "Charming Country House",
      rent: 1800,
      bedrooms: 4,
      bathrooms: 2,
      imgUrl:
        "https://imgproxy.valpas.io/gx0KqMRBEjYnnZeXLhAP_73Ao9qRQUEcHGqDvZ6MhdU/rs:fill:960:650:0/wm:0:ce:0:0:0.4/aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC85Z3NwODg5dXdjbDgvSjdzRDNWWHdlN3JOaXRudVJTSjZ3L2ZhMzYwZjdkYzAxMjFkOGM3NzFjYWJlNjcyZmRlMDI2L2R1eF8zMDAzX2ludGVyaW9yXzk2MHg3MTQuanBn.jpeg",
    },
    {
      id: 5,
      name: "Stylish Loft in the City",
      rent: 2500,
      bedrooms: 2,
      bathrooms: 2,
      imgUrl:
        "https://imgproxy.valpas.io/c1GFgnrWlbcb-2pM0mIq1oFIpxyjyQLQoA57EUp-_A8/rs:fill:1440:830:0/wm:0:ce:0:0:0.4/aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC85Z3NwODg5dXdjbDgvNVFsUTIyeEY3RDE5TDdBblUwRktaRy9kYmIxMmY3MWFmZGZkMGI2N2EzNjQ3OWYwNDlkM2I5NC9KZXUtZGUtcGF1bWUtMS1jaGFtYnJlLWRvdWJsZS1zdXBlcmlldXJlLmpwZw.jpeg",
    },
    {
      id: 6,
      name: "Seaside Cottage",
      rent: 2200,
      bedrooms: 3,
      bathrooms: 1,
      imgUrl:
        "https://imgproxy.valpas.io/OtcbMWGYSa4JbeTFJY13u85fTtuM3Jj8ujFxTg154Gw/rs:fill:1600:900:0/wm:0:ce:0:0:0.4/aHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC85Z3NwODg5dXdjbDgvMUQxTUg4enFucjl5ZmlhNmdoUnpCZy9lOTlmYTgwZTFkOWI4YjA0YjY1NmE1ZTA2NTY3MDU5NS9ob3RlbC5wbmc.jpeg",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="p-4 bg-white rounded-lg border border-gray-600/10"
            >
              <img src={room.imgUrl} alt="room.name" />

              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                  {room.name}
                </h4>

                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">
                    ${room.rent}.00
                  </span>
                  /M
                </div>
              </div>

              <div className="flex justify-between py-2 sm:p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                  <Bedroom />
                  <p>
                    <span className="font-bold text-gray-900">
                      {room.bedrooms}
                    </span>{" "}
                    Bedrooms
                  </p>
                </div>
                <div className="flex items-center">
                  <Bathroom />
                  <p>
                    <span className="font-bold text-gray-900">
                      {room.bathrooms}
                    </span>{" "}
                    Bathrooms
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
