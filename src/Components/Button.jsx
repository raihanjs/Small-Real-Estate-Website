/* eslint-disable react/no-unescaped-entities */
export function WhiteBtn() {
  return (
    <>
      <a
        href="https://links.tailgrids.com/play-download"
        className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
      >
        Book Now
      </a>

      <a
        href="https://github.com/tailgrids/play-tailwind"
        target="_blank"
        className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
      >
        Contact Us
      </a>

      <a
        href="javascript:void(0)"
        className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
      >
        Let's have a meeting
      </a>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
      >
        Send
      </button>

      <a
        href="javascript:void(0)"
        className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
      >
        Know More
      </a>
    </>
  );
}
