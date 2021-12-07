import React from "react";

const Branch = () => {
  const bankData = [
    {
      id: "1",
      branchName: "Branch Vita",
      address:
        "Vita taluka Khanapur, district Sangli, in front of ST stand. 415 311",
      phone1: "(02347) 273271",
      phone2: 7774097930,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "415812476",
    },
    {
      id: "2",
      branchName: "Branch Aatpadi",
      address: "Main road, taluka Aatpadi, District Sangli. 415 401",
      phone1: "(02342) 221114",
      phone2: 7774097915,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "415825501",
    },
    {
      id: "3",
      branchName: "Branch Jat",
      address: "Mangalwar Peth Jat, Taluka Jat, District Sangli. 416 404",
      phone1: "(02344) 248883",
      phone2: 7774097913,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "416812401",
    },
    {
      id: "4",
      branchName: "Branch Sangli",
      address: "Saraf Katta, Sangli. 416 416",
      phone1: "(0233) 2328130",
      phone2: 7774097912,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "416812151",
    },
    {
      id: "5",
      branchName: "Branch TaasGoan",
      address:
        "Om Shiv Sagar Complex, Joshi Galli, Tasgaon, District Sangli. 416 312",
      phone1: "(02346) 241875",
      phone2: 7774097917,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "415812302",
    },
    {
      id: "6",
      branchName: "Branch Mayani",
      address: "Vita Road, Mayani, Taluka Khatav, District Satara.",
      phone1: "(02161) 270311",
      phone2: 7774030948,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "415825502",
    },
    {
      id: "7",
      branchName: "Branch Mahud",
      address:
        "2101, Yamuna Niwas, Navi Peth, Pandharpur Malhar-Peth Road, District Solapur. 413 306",
      phone1: "(02187) 246009",
      phone2: 7774005918,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "413825501",
    },
    {
      id: "8",
      branchName: "Branch Sangh",
      address:
        "G. M. No. 1351, Jat Road, Sangh, Taluka Jat, District Sangli. 416 412",
      phone1: "(02344) 227050",
      phone2: 7774097929,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "416812501",
    },
    {
      id: "9",
      branchName: "Kavathemahankala",
      address:
        "552, Bazar-peth Kavathemahankala, Taluka Kavathemahankala, District Sangli. 416 405",
      phone1: "(02341) 222090",
      phone2: 7774097914,
      IFSCode: "ICIC00MMCBL",
      MICRCode: "416812502",
    },
  ];

  return (
    <div>
      <div className="my-8 mb-10">
        <h1 className="text-blue-400 text-center text-6xl py-8">
          Our Branches Across Cities
        </h1>
        <div className="row justify-center items-center text-center mx-4 gap-8">
          {bankData.map((data, id) => {
            return (
              <div className="card card_wrapper px-4 py-4 shadow-md" style={{ width: "28rem" }}>
                <h5 className="card-title md:text-4xl text-3xl font-myFont py-2">{data.branchName}</h5>
                <p className="card-text font-myFont pb-4 max-h-10">{data.address}</p>

                <ul className="list-group list-group-flush py-2">
                  <li className="font-myFont text-xl">Phone No : -</li>
                  <li className="font-myFont md:text-base text-sm py-2">{data.phone1}</li>
                  <li className="font-myFont md:text-base text-sm">{data.phone2}</li>
                </ul>
                <div className="py-4" >
                  <p className="font-myFont">IFSC Code : - {data.IFSCode}</p>
                  <p className="font-myFont">MICR Code : - {data.MICRCode}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Branch;
