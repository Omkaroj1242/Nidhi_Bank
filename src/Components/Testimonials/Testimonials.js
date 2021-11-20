import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto pt-8">
    <h1 className="text-6xl font-myFont text-center text-blue-600 my-8">Testimonials</h1>
    <div className="flex md:flex-row flex-col">
      <div class="py-8 m-4 border-2 shadow border-blue-700">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto mb-4 object-cover rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-blue-500">
          <span class="font-bold text-blue-500">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-blue-500">”</span>
        </p>
        <div class="flex items-center justify-center">
          <a href="#" class="block relative">
            <img
              alt="profile"
              src="https://dummyimage.com/600x400/000/fff"
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
      <div class="py-8 m-4 border-2 shadow border-blue-700">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto object-cover mb-4 rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-blue-500">
          <span class="font-bold text-blue-500">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-blue-500">”</span>
        </p>
        <div class="flex items-center justify-center mt-4">
          <a href="#" class="block relative">
            <img
              alt="profile"
              src="https://dummyimage.com/600x400/000/fff"
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
      <div class="py-8 m-4 border-2 shadow border-blue-700">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto mb-4 object-cover rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-blue-500">
          <span class="font-bold text-blue-500">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-blue-500">”</span>
        </p>
        <div class="flex items-center justify-center mt-8">
          <a href="#" class="block relative">
            <img
              alt="profile"
              src="https://dummyimage.com/600x400/000/fff"
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
    </div>
  );
};

export default Testimonials;
