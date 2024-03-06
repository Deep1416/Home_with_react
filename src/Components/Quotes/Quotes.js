import React from "react";
import Data from "./quotesdata.json"

function Quotes() {
  return (
    <div className="mx-32 my-16">
      {Data.length > 0 ? (
        <div className="flex flex-col gap-11 ">
          {Data.map((e, i) => {
            return (
              <div
                key={i}
                className=" w-full mb-8 text-center  border rounded-lg border-gray-200 p-4 shadow  "
              >
                <p className="text-3xl font-bold mb-2">{e.disc}</p>
                <p className="text-base mb-5 text-gray-500">{e.author}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Data Not Found</h2>
      )}
    </div>
  );
}

export default Quotes;
