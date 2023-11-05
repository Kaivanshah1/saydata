import React from "react";

function Table() {
  const data = [
    {
      Name: "Hospital A",
      Type: "Type A",
      Duration: "1 hour",
      Date_Created: "2023-10-29",
      Last_Updated: "2023-11-01",
      Action: "Edit",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },
    {
      Name: "Hospital B",
      Type: "Type B",
      Duration: "2 hours",
      Date_Created: "2023-10-28",
      Last_Updated: "2023-11-02",
      Action: "Delete",
    },

    // ... (other data items)
  ];

  return (
    <>
      <div className="bg-white mt-9 items-center">
        <div className="font-bold text-lg">
          <div className="border-b">Recent Files</div>
        </div>

        <table className="w-full bg-white mt-5 mb-5">
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-3 text-left">Select</td>
              <td className="px-6 py-3 text-left">Name</td>
              <td className="px-6 py-3 text-left">Type</td>
              <td className="px-6 py-3 text-left">Duration</td>
              <td className="px-6 py-3 text-left">Date Created</td>
              <td className="px-6 py-3 text-left">Last Updated</td>
              <td className="px-6 py-3 text-left">Action</td>
            </tr>

            {data.map((item, index) => (
              <tr className="bg-white border-b hover:bg-sky-100" key={item.id}>
                <td className="px-6 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-3">{item.Name}</td>
                <td className="px-6 py-3">{item.Type}</td>
                <td className="px-6 py-3">{item.Duration}</td>
                <td className="px-6 py-3">{item.Date_Created}</td>
                <td className="px-6 py-3">{item.Last_Updated}</td>
                <td className="px-6 py-3">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
