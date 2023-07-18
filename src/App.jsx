import { useState } from "react";
import intervalToDuration from "date-fns/intervalToDuration";
import { validateDay, validateMonth, validateYear } from "./utils/validation";
import AnimatedNumber from "./components/Number";
function App() {
  const [data, setData] = useState({});
  const [yearError, setYearError] = useState({ error: null, message: null });
  const [monthError, setMonthError] = useState({ error: null, message: null });
  const [dayError, setDayError] = useState({ error: null, message: null });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const year = e.target.year.value;
    const day = e.target.day.value;
    const month = e.target.month.value;

    const validateYearResult = validateYear(year);
    const validateMonthResult = validateMonth(month);
    const validateDayResult = validateDay(day, month - 1);
    if (
      validateYearResult.error ||
      validateMonthResult.error ||
      validateDayResult.error
    ) {
      setYearError({
        error: validateYearResult.error,
        message: validateYearResult.message,
      });

      setMonthError({
        error: validateMonthResult.error,
        message: validateMonthResult.message,
      });

      setDayError({
        error: validateDayResult.error,
        message: validateDayResult.message,
      });
    } else {
      setYearError({
        error: validateYearResult.error,
      });

      setMonthError({
        error: validateMonthResult.error,
      });

      setDayError({
        error: validateDayResult.error,
      });
      const currentAge = intervalToDuration({
        start: new Date(year, month - 1, day),
        end: new Date(),
      });
      setData(currentAge);
    }

    
  };

  return (
    <main className=" min-h-[100vh] flex justify-center items-center mx-4 ">
      <div className=" bg-white max-w-[840px] w-full py-12 px-6 min-[841px]:p-[3.5rem] rounded-[24px] rounded-br-[100px]">
        <form className=" text-xl" onSubmit={handleSubmit}>
          <div className="flex justify-left gap-4">
            <div className=" flex flex-col">
              <label htmlFor="day" className="mb-2 text-xs text-smokey-grey">
                Day
              </label>
              <input
                type="number"
                placeholder="DD"
                name="day"
                className= {`${dayError.error === true ? 'border-light-red' : 'border-light-grey'} border-[1px] py-3 px-4 w-full  rounded-md focus:outline-none max-w-[10rem]`}
              />
              <span
                className={`${
                  dayError.error ? "block" : "hidden"
                } text-xs text-red-400 italic font-normal pt-2`}
              >
                {dayError.message}
              </span>
            </div>
            <div className=" flex flex-col">
              <label htmlFor="month" className="mb-2 text-xs text-smokey-grey">
                Month
              </label>
              <input
                type="number"
                placeholder="MM"
                name="month"
                className={`${monthError.error === true ? 'border-light-red': 'border-light-grey'} border-[1px] py-3 px-4 w-full rounded-md focus:outline-none max-w-[10rem]`}
              />
              <span
                className={`${
                  monthError.error ? "block" : "hidden"
                } text-xs text-red-400 italic font-normal pt-2`}
              >
                {monthError.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="year" className="mb-2 text-xs text-smokey-grey ">
                Year
              </label>
              <input
                type="number"
                placeholder="YYYY"
                name="year"
                className={`${yearError.error === true ? 'border-light-red' : 'border-light-grey'} border-[1px] border-light-grey py-3 px-4 w-full rounded-md focus:outline-none max-w-[10rem]`}
              />
              <span
                className={`${
                  yearError.error ? "block" : "hidden"
                } text-xs text-red-400 italic font-normal pt-2`}
              >
                {yearError.message}
              </span>
            </div>
          </div>
          <div className="my-4 flex max-[840px]:justify-center justify-end relative z-0 before-content-[*] before:absolute before:w-full before:h-[1px] before:bg-light-grey  before:top-[50%] before:left-0">
            <button className="hover:bg-off-black transition-all bg-purple rounded-full p-7 z-10">
              <svg
                className="hover:stroke-white stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 46 44"
              >
                <g fill="none" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
        </form>
        <div className=" max-[374px]:text-[38px] max-[374px]:leading-[44px] max-[840px]:text-[56px] max-[840px]:leading-[60px] text-[104px] leading-[110px] font-bold italic">
          <p>
            <AnimatedNumber n={data.years}>
              {data.years >= 0 ? data.years : "--"}
            </AnimatedNumber>

            {data.years == 1 ? " year" : " years"}
          </p>
          <p>
            <AnimatedNumber n={data.months}>
              {data.years >= 0 ? data.months : "--"}
            </AnimatedNumber>

            {data.months == 1 ? " month" : " months"}
          </p>
          <p>
            <AnimatedNumber n={data.days}>
              {data.years >= 0 ? data.days : "--"}
            </AnimatedNumber>
            {data.days == 1 ? " day" : " days"}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
