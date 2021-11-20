import React from "react";

const Testimonials = () => {
  return (
    <div>
    <h1 className="text-6xl font-myFont text-center text-blue-600 py-4 my-8">Testimonials</h1>
      <div class="bg-white dark:bg-gray-800 w-full mx-auto p-8">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          class="h-40 w-40 mb-8 m-auto"
        />
        <p class="text-blue-500 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
          <span class="font-bold text-blue-500">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-blue-500">”</span>
        </p>
        <div class="flex items-center justify-center mt-8">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <div class="flex ml-2 items-center justify-center text-blue-700">
            <span class="font-semibold text-indigo-500 mr-2 text-lg">
              Jean Miguel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
