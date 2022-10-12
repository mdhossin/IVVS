import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { BiChevronRight } from "react-icons/bi";
import Tooltip from "../components/Tooltip";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
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

  const [active, setActive] = useState("");

  return (
    <>
      <div className="max-w-screen mx-auto px-6  sm:px-8">
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
                    <Menu.Items className="bg-red absolute top-12 right-0 z-20 mt-2 w-[330px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#131B2D] md:w-[550px]">
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

      <div className="relative m-auto  w-[340px] sm:w-[480px] md:w-[490px] lg:w-[800px]">
        <div className="m-auto mt-16 mb-16 w-[340px] sm:w-[400px] md:w-[490px] lg:w-[800px]">
          <div className="relative">
            <img className="w-full" src="/img/business.png" alt="" />

            {/* circle one */}
            <div className="absolute left-[147px] top-[27px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#B4C7E7] text-white sm:top-[33px] sm:left-[172px] sm:h-[42px] sm:w-[42px] md:left-[212px] md:top-[40px] md:h-[52px] md:w-[52px] lg:left-[345px] lg:top-[65px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs font-bold sm:text-sm lg:text-2xl">
                  1
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-one")}
                    className="absolute top-[-20px] left-0 z-20  hidden w-[120px] rounded-[4px]  bg-white px-[6px] hover:block group-hover:block sm:w-[140px] sm:px-2 md:w-[155px] md:rounded-[10px] 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-xs md:text-sm">
                      Tool Name 1
                      <div className="md:h-[16px] md:w-[16px]">
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>

            {/* circle two */}

            <div className="absolute left-[218px] top-[65px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#00B0F0] text-white sm:top-[77px] sm:left-[258px] sm:h-[42px] sm:w-[42px]  md:top-[93px] md:left-[315px] md:h-[52px] md:w-[52px] lg:left-[515px] lg:top-[154px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs  font-bold sm:text-sm lg:text-2xl">
                  2
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-two")}
                    className="absolute top-[-20px] left-[-50px] z-20 hidden w-[120px] rounded-[4px] bg-white px-[6px] hover:block group-hover:block  sm:left-0 sm:w-[140px] sm:px-2 md:w-[155px] md:rounded-[10px] 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-xs md:text-sm">
                      Tool Name 2
                      <div>
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>

            {/* circle three */}
            <div className="absolute top-[160px] left-[227px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#00B0F0] text-white sm:top-[189px] sm:left-[268px] sm:h-[42px] sm:w-[42px] md:top-[233px] md:left-[328px] md:h-[52px] md:w-[52px] lg:left-[535px] lg:top-[380px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs font-bold sm:text-sm lg:text-2xl">
                  3
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-three")}
                    className="absolute top-[-20px] left-[-50px] z-20 hidden w-[120px] rounded-[4px] bg-white px-[6px] hover:block group-hover:block sm:left-0 sm:w-[140px] sm:px-2 md:w-[155px] md:rounded-[10px] 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-xs md:text-sm">
                      Tool Name 3
                      <div>
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>

            {/* circle four */}
            <div className="absolute top-[201px] left-[151px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#B4C7E7] text-white sm:top-[237px] sm:left-[176px] sm:h-[42px] sm:w-[42px] md:left-[215px] md:top-[291px] md:h-[52px] md:w-[52px] lg:left-[355px] lg:top-[475px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs font-bold sm:text-sm lg:text-2xl">
                  4
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-four")}
                    className="absolute top-[-20px] left-0 z-20 hidden w-[120px] rounded-[4px] bg-white px-1 hover:block group-hover:block sm:w-[155px] sm:rounded-[10px] sm:px-2 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-sm">
                      Tool Name 4
                      <div>
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>

            {/* circle five */}
            <div className="absolute top-[161px] left-[74px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#B4C7E7] text-white sm:top-[189px] sm:left-[89px] sm:h-[42px] sm:w-[42px] md:left-[108px] md:top-[234px] md:h-[52px] md:w-[52px] lg:left-[178px] lg:top-[380px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs font-bold sm:text-sm lg:text-2xl">
                  5
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-five")}
                    className="absolute top-[-20px] left-0 z-20 hidden w-[120px] rounded-[4px] bg-white px-1 hover:block group-hover:block sm:w-[155px] sm:rounded-[10px] sm:px-2 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-sm">
                      Tool Name 5
                      <div>
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>

            {/* circle six */}
            <div className="absolute top-[66px] left-[77px] h-[36px] w-[36px] cursor-pointer rounded-full bg-[#B4C7E7] text-white sm:left-[88px] sm:top-[77px] sm:h-[42px] sm:w-[42px] md:left-[108px] md:top-[94px] md:h-[52px] md:w-[52px] lg:left-[178px] lg:top-[154px]  lg:h-[83px] lg:w-[83px]">
              <div className="group relative h-full w-full items-center ">
                <h1 className="flex h-full w-full items-center justify-center text-xs font-bold sm:text-sm lg:text-2xl">
                  6
                </h1>

                {/* dropdown  */}
                <>
                  <div
                    onClick={() => setActive("tool-six")}
                    className="absolute top-[-20px] left-0 z-20 hidden w-[120px] rounded-[4px] bg-white  px-1 hover:block group-hover:block sm:w-[155px] sm:rounded-[10px] sm:px-2 2xl:rounded"
                  >
                    <p className="flex items-center justify-between p-1 text-center text-[10px] text-black sm:gap-2 sm:text-sm">
                      Tool Name 6
                      <div>
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                        >
                          <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z" />
                        </svg>
                      </div>
                      <div>
                        <BiChevronRight />
                      </div>
                    </p>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>

        {active && (
          <div className="absolute  w-full sm:right-[-70px] sm:top-5 sm:w-[200px] md:right-[-125px] md:top-[100px]  md:w-[235px] lg:right-[-98px] lg:top-[175px] lg:w-[280px] xl:right-[-122px] xl:w-[300px]">
            <div
              onClick={() => setActive("")}
              className="absolute right-0 top-[-40px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-white shadow-md sm:top-[-25px] sm:h-[24px] sm:w-[24px] md:top-[-35px]"
            >
              <IoClose className="text-sm font-bold md:text-[20px]" />
            </div>
            {active === "tool-one" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-[6px] px-4 shadow-sm">
                  <p className=" text-xs md:text-sm lg:text-base">
                    Tool Name 1
                  </p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="font-semibold sm:text-xs md:text-sm lg:text-base">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-xs font-semibold md:text-sm lg:text-base">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      License {">"}
                    </h4>
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" className="text-xs" />
                    <h4 className="text-xs font-medium md:text-sm lg:text-base">
                      Tagged (Relevant)
                    </h4>
                  </div>
                </div>
              </div>
            )}
            {active === "tool-two" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-2 px-4 shadow-sm">
                  <p className="text-base">Tool Name 2</p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-base font-semibold">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-base font-semibold">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-base font-semibold">License {">"}</h4>
                    <h4 className="text-base font-semibold">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-base font-semibold">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" />
                    <h4 className="text-base font-medium">Tagged (Relevant)</h4>
                  </div>
                </div>
              </div>
            )}
            {active === "tool-three" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-2 px-4 shadow-sm">
                  <p className="text-base">Tool Name 3</p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-base font-semibold">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-base font-semibold">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-base font-semibold">License {">"}</h4>
                    <h4 className="text-base font-semibold">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-base font-semibold">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" />
                    <h4 className="text-base font-medium">Tagged (Relevant)</h4>
                  </div>
                </div>
              </div>
            )}
            {active === "tool-four" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-2 px-4 shadow-sm">
                  <p className="text-base">Tool Name 4</p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-base font-semibold">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-base font-semibold">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-base font-semibold">License {">"}</h4>
                    <h4 className="text-base font-semibold">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-base font-semibold">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" />
                    <h4 className="text-base font-medium">Tagged (Relevant)</h4>
                  </div>
                </div>
              </div>
            )}
            {active === "tool-five" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-2 px-4 shadow-sm">
                  <p className="text-base">Tool Name 5</p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-base font-semibold">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-base font-semibold">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-base font-semibold">License {">"}</h4>
                    <h4 className="text-base font-semibold">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-base font-semibold">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" />
                    <h4 className="text-base font-medium">Tagged (Relevant)</h4>
                  </div>
                </div>
              </div>
            )}
            {active === "tool-six" && (
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-2 px-4 shadow-sm">
                  <p className="text-base">Tool Name 6</p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold">
                    What is the tool for:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <h4 className="mt-1 text-base font-semibold">
                    Requirements:{" "}
                    <span className="font-normal">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-base font-semibold">
                      Restrictions {">"}
                    </h4>
                    <h4 className="text-base font-semibold">License {">"}</h4>
                    <h4 className="text-base font-semibold">
                      Related Tools {">"}
                    </h4>
                    <h4 className="text-base font-semibold">
                      Links to:{" "}
                      <Link href="/">
                        <a className="font-normal text-blue-600">
                          https://earn.ivves.eu
                        </a>
                      </Link>{" "}
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <input type="checkbox" />
                    <h4 className="text-base font-medium">Tagged (Relevant)</h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default Pricing;
