import expenseavatar from "../../assets/svg/expenseavatar.svg";

import { Link } from "react-router-dom";

const PayContractorsTable = () => {
  const employees = [
    {
      name: "Mike Santos",
      country: "United kingdom",
      position: "Backend Developer",
      amount: "$5000",
      status: "Payment Due",
    },

    // Add more employees here as needed
  ];
  return (
    <section>
      <div className="xl:mt-[46px] flex flex-col">
        <div className="flex flex-col gap-4 mt-[21px] xl:flex-col-reverse xl:gap-[10px] xl:w-full lg:hidden">
          <div
            className="flex justify-between items-center px-[13px] py-[11px] rounded-lg user-bg-clr xl:px-10 xl:py-5"
            style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
          >
            <div className="text-[0.625rem] font-semibold xl:text-xl">
              Select to pay all at once
            </div>

            <input type="checkbox" name="" id="" className="xl:w-6 xl:h-6" />
          </div>

          {employees.map((employee, index) => (
            <div
              key={index}
              className="flex justify-between font-medium px-[18px] py-[22px] rounded-lg xl:flex-row xl:items-center xl:px-10  xl:py-[20px] "
              style={{ border: "0.5px solid rgba(0, 0, 0, 0.20)" }}
            >
              <div className="xl:flex xl:items-center">
                <div className="flex gap-[10px] xl:items-center">
                  <img src={expenseavatar} alt="profile photo" />
                  <div className="xl:flex">
                    <div className="text-sm xl:text-sm">{employee.name}</div>
                    <div className="text-[0.75rem] xl:text-sm xl:ml-[110px]">
                      {employee.country}
                    </div>
                  </div>
                </div>

                <div className="text-[0.75rem] xl:text-sm mt-[13px] xl:mt-0">
                  {employee.position}
                </div>
              </div>
              <div
                className="px-[10px] py-[3px] rounded-[4px] text-[0.5rem]  max-h-max xl:hidden"
                style={{ backgroundColor: "rgba(255, 0, 0, 0.20)" }}
              >
                Due
              </div>

              <div className="text-sm flex flex-col justify-between">
                {employee.amount}

                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-4 h-4 ml-auto xl:hidden"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[21px] hidden xl:w-full lg:block ">
          <div
            className="grid grid-cols-6 gap-5 font-medium mb-[15px] px-10 "
            style={{ color: "rgba(0, 0, 0, 0.60)" }}
          >
            <div>Name</div>
            <div>Country</div>
            <div>Position</div>
            <div>Monthly Pay</div>
            <div>Status</div>
          </div>
          <div>
            {employees.map((employee, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <div
                  className="grid grid-cols-6 items-center gap-5 px-10 py-5 rounded-lg text-sm font-medium"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
                >
                  <div className="flex items-center gap-[10px]">
                    <div
                      className="w-9 h-9 rounded-full"
                      // style={{ backgroundColor: "#D9D9D9" }}
                    >
                      <img src={expenseavatar} alt="profile photo" />
                    </div>
                    <div>{employee.name}</div>
                  </div>
                  <div>{employee.country}</div>
                  <div> {employee.position}</div>
                  <div>$5000</div>
                  <div style={{ color: "#F00" }}>{employee.status}</div>

                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-6 h-6 ml-auto "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-[22px] md:mb-[34px] absolute bottom-0 left-0 mx-5 md:left-[228px] right-0 xl:ml-[85px]  xl:mr-[65px] ">
        <div
          className="hidden  mt-[10px] rounded-lg user-bg-clr xl:flex xl:justify-between xl:items-center xl:px-10 xl:py-5"
          style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}
        >
          <div className="text-xl font-semibold ">
            Select to pay all at once
          </div>
          <div>
            <input type="checkbox" name="" id="" className="w-6 h-6" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mt-[19px]">
          <div className="text-sm font-medium mt-[10px] xl:text-[22px]">
            Total Amount: $15,000
          </div>
          <div className="py-[1em] px-[2em] xl:py-[15px] xl:px-[31px] font-semibold text-[0.625rem] xl:text-base pr-bg-clr text-white mt-[15px] rounded-lg flex items-center justify-center gap-[10px]">
            <Link
              // to="/dashboard/add-developer"
              className="flex items-center gap-[10px]"
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PayContractorsTable;