import React from "react";

const LoginLayout = ({ children, ...props }) => {
  return (
    <div
      className="relative bg-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="top-baloon"></div>
      <div className="bottom-baloon"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start pt-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/#">
                  <span className="block xl:inline text-2xl font-bold text-indigo-600">
                    URlSource
                  </span>
                </a>
              </div>
            </div>
          </nav>
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-56 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ height: "100vh" }}
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div {...props}>{children}</div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 img-hide">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginLayout;
