import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Tooltip from "../components/Tooltip";
function Pricing() {
  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
  ];
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="max-w-screen mx-auto px-6 sm:px-8">
        <div
          style={{
            backgroundImage: `url("hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjCfsuj1lhCUwlDaVckyl-KZ32W2e9PrcSQ&usqp=CAU)`,
          }}
        >
          <div className="mt-6 flex items-center justify-between">
            <h2 className="mt-4 mb-4 text-xl font-bold lg:text-2xl">
              Validation Techniques for Ml
            </h2>
          </div>
          <div className="flex items-start justify-end gap-8">
            <div className="mb-3 xl:w-96">
              <form>
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Search
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      ariaHidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search Tools..."
                    required
                  ></input>
                  <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* dropdown */}
            <div className="mt-3 cursor-pointer">
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="bg-red absolute top-12 right-0 mt-2 w-[330px] origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:w-[550px] ">
                      <div className="p-5">
                        <p className="mb-1 text-sm md:text-base">
                          Is compatible with:
                        </p>
                        <p className="mb-2 text-sm md:text-base">
                          Recent searches and tagged(relevant) tools | Clear
                        </p>
                        <div className="flex items-center justify-between gap-2 px-5 py-2">
                          <button>Tool 1</button>
                          <button>Tool 2</button>
                          <button>Tool 3</button>
                          <button>Tool 4</button>
                        </div>

                        <div className="mt-2 flex flex-col items-start justify-between gap-[6px] md:flex-row md:items-center">
                          <p className="text-base">Is focused on:</p>

                          <div className="w-full md:w-[230px]">
                            <Listbox value={selected} onChange={setSelected}>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                  <span className="block truncate">
                                    {selected.name}
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-[1000000] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                      <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                              ? "bg-amber-100 text-amber-900"
                                              : "text-gray-900"
                                          }`
                                        }
                                        value={person}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              }`}
                                            >
                                              {person.name}
                                            </span>
                                            {selected ? (
                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col items-start justify-between gap-[6px] md:flex-row md:items-center">
                          <p className="text-base">Can be used with:</p>

                          <div className="w-full md:w-[230px]">
                            <Listbox value={selected} onChange={setSelected}>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg  py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                  <span className="block truncate">
                                    {selected.name}
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                      />
                                    </svg>
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                      <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                              ? "bg-amber-100 text-amber-900"
                                              : "text-gray-900"
                                          }`
                                        }
                                        value={person}
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span
                                              className={`block truncate ${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              }`}
                                            >
                                              {person.name}
                                            </span>
                                            {selected ? (
                                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                          <p className="text-base">
                            Description includes the word
                          </p>

                          <textarea
                            id="message"
                            class="h-10 w-full resize-none overflow-hidden rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-[230px]"
                            placeholder="Word words...."
                          ></textarea>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Is open sourch</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <input type="checkbox" />
                            <span>Is free</span>
                          </div>
                          <div className="mt-3 md:mt-0">
                            <button
                              type="submit"
                              className="w-[150px] rounded-lg bg-blue-700 px-4 py-3 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* business contianer circle */}

      <div className="m-auto mt-16 mb-16 w-[340px] md:w-[650px] lg:w-[800px]">
        <div className="relative">
          <img className="w-full" src="/img/business.png" alt="" />

          {/* circle one */}
          <div className="div-1 bg-red absolute top-[25px] left-[45px] cursor-pointer md:top-[66px] md:left-[160px] lg:left-[310px]">
            <Tooltip text="Tool name 1">
              <div className="absolute left-[100px] top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#B4C7E7] font-bold text-white md:left-[122px] md:top-[-13px]  md:h-[68px] md:w-[68px] lg:left-[35px] lg:top-[-1px] lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">1</h1>
              </div>
            </Tooltip>
          </div>

          {/* circle two */}
          <div className="div-2 absolute top-[24%] right-[13px] cursor-pointer md:top-[25%] md:right-[65px] lg:left-[515px]">
            <Tooltip text="Tool name 2">
              <div className="absolute top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#B4C7E7] font-bold text-white md:left-[-45px] md:h-[68px] md:w-[68px] lg:left-0 lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">2</h1>
              </div>
            </Tooltip>
          </div>

          {/* circle three */}
          <div className="div-3 absolute top-[61.5%] left-[225px] cursor-pointer md:left-[435px] lg:left-[535px]">
            <Tooltip text="Tool name 3">
              <div className="absolute top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#00B0F0] font-bold text-white md:right-[56px] md:h-[68px] md:w-[68px] lg:right-[40px] lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">3</h1>
              </div>
            </Tooltip>
          </div>

          {/* circle four */}
          <div className="div-4 absolute top-[77.5%] left-[148px] cursor-pointer md:left-[288px] lg:left-[355px]">
            <Tooltip text="Tool name 4">
              <div className="absolute top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#B4C7E7] font-bold text-white md:h-[68px] md:w-[68px] lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">4</h1>
              </div>
            </Tooltip>
          </div>

          {/* circle five */}
          <div className="div-5 absolute top-[61.5%] left-[75px] cursor-pointer md:left-[145px] lg:left-[178px]">
            <Tooltip text="Tool name 5">
              <div className="absolute top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#B4C7E7] font-bold text-white md:h-[68px] md:w-[68px] lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">5</h1>
              </div>
            </Tooltip>
          </div>

          {/* circle six */}
          <div className="div-6 absolute top-[25%] left-[75px] cursor-pointer md:left-[145px] lg:left-[178px]">
            <Tooltip text="Tool name 6">
              <div className="absolute top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#B4C7E7] font-bold text-white md:h-[68px] md:w-[68px] lg:h-[83px] lg:w-[83px]">
                <h1 className="text-sm lg:text-2xl">6</h1>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
