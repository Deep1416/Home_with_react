import React from "react";
import Data from "./Data.json";
function Home() {
  return (
    <>
      <section className="w-full">
        <div className=" relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] w-full  bg-cover bg-center bg-no-repeat h-[100%]">
          <div className="absoulte inset-0 bg-white/75"></div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center lg:h-screen lg:px-8 ">
            <div className="max-w-xl text-center">
              <h1 className="text-3xl  font-extrabold">
                Lets our Find your
                <strong className=" block font-extrabold  text-rose-700">
                  Forever Food.
                </strong>
              </h1>
              <p className="max-w-lg mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="flex flex-wrap text-center items-center gap-4 mt-7 justify-center ">
                <a
                  href="/"
                  className="w-full bg-rose-600 rounded  px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-rose-500  sm:w-auto "
                >
                  Search Now
                </a>
                <a
                  href="/"
                  className="w-full bg-white rounded  px-12 py-3 text-sm font-medium text-rose-600 shadow focus:outline-none focus:ring active:bg-rose-500 sm:w-auto  "
                >
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 lg:px-8 ">
          <div className="flex   w-full relative">
            <div className="w-[50%] z-10 py-6">
              <img
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="This is Home Image"
              />
            </div>
            <div className="w-[52%] p-28 bg-gray-100 absolute right-5">
              <h1 className="text-2xl font-font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <button
                type="button"
                className="bg-indigo-600  font-medium text-white px-14 py-3 mt-8 rounded-lg hover:bg-transparent hover:border-indigo-600 hover:text-indigo-700 hover:border-2"
              >
                Get Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="flex flex-wrap gap-5 justify-center h-fit">
            {Data.map((e, i) => {
              return (
                <>
                  <div className="w-80 h-fit">
                    <div className="rounded-xl p-6 shadow bg-gray-50 ">
                      <p className="leading-relaxed text-gray-700">{e.disc}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 ">
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src={e.image_url}
                        alt=""
                      />

                      <div className="text-sm">
                        <p className="font-medium">{e.author}</p>
                        <p className="mt-1">{e.poistion}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
