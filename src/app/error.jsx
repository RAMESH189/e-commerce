"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div class="bg-white dark:bg-gray-800">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Error :(
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something went wrong.
          </p>
          <button
            onClick={() => reset()}
            class="mb-4 text-lg hover:bg-blue-800 font-bold bg-blue-700 rounded-md p-2 text-gray-100 dark:text-gray-200"
          >
            Please try again
          </button>
        </div>
      </div>
    </div>
  );
}
