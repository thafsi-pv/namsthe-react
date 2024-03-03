import React, { useState, useEffect } from "react";

const Notification = React.memo(({ Title, Subtitle, type }) => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(
    "🚀 ~ file: Notification.js:5 ~ Notification ~ isVisible",
    isVisible
  );

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [Title]);

  useEffect(() => {
    setIsVisible(true);
  }, [Title]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        class="px-4 py-3 rounded bottom-0 fixed right-0 m-4 w-max"
        role="alert">
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert">
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">{Title}</p>
              <p class="text-sm">{Subtitle}</p>
              <span
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={() => handleClose()}
              >
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
});

export default Notification;
