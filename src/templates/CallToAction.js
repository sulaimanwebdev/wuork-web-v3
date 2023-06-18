import React from 'react'

const CallToAction = (props) => {
  return (
    <>
    <div className="bg-white">
      <div className="mx-auto max-w-[1500px] pb-0 lg:pb-5 pt-16 lg:pt-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6  shadow-2xl sm:rounded-3xl sm:px-16  lg:flex items-center justify-center text-center lg:gap-x-20 lg:px-24">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="max-w-[500px] mx-auto text-center lg:mx-0 lg:flex-auto py-[90px]">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {props.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={props.mainBTNlink}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {props.mainBTNtext}
              </a>
              <a href={props.secondBTNlink} className="text-sm font-semibold leading-6 text-white">
                {props.secondBTNtext} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
       
        </div>
      </div>
    </div>
    </>
  )
}

export default CallToAction