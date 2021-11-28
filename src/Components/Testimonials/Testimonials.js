import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 pb-8">
    <div className="container mx-auto pt-8">
    <h1 className="text-6xl font-myFont text-center text-blue-400 my-8">Testimonials</h1>
    <div className="flex md:flex-row flex-col">
      <div class="py-8 m-4 rounded-md shadow ">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto mb-4 object-cover rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-black">
          <span class="font-bold text-black">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-black">”</span>
        </p>
        <div class="flex items-center justify-center">
          <div class="flex ml-2 items-center justify-center text-blue-700">
            <span class="font-semibold mr-2 text-lg">
             - Jean Miguel
            </span>
          </div>
        </div>
      </div>
      <div class="py-8 m-4 rounded-md shadow">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto object-cover mb-4 rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-black">
          <span class="font-bold text-black">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-black">”</span>
        </p>
        <div class="flex items-center justify-center mt-4">
          <div class="flex ml-2 items-center justify-center text-blue-700">
            <span class="font-semibold mr-2 text-lg">
            - Jean Miguel
            </span>
          </div>
        </div>
      </div>
      <div class="py-8 m-4 rounded-md shadow ">
        <img
          src="https://dummyimage.com/200x200/000/fff"
          class="mx-auto mb-4 object-cover rounded-lg h-40 w-40"
          alt="profile"
        />
        <p class="my_p mx-3 py-8 text-center text-black">
          <span class="font-bold text-black">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span class="font-bold text-black">”</span>
        </p>
        <div class="flex items-center justify-center mt-8">
          <div class="flex ml-2 items-center justify-center text-blue-700">
            <span class="font-semibold mr-2 text-lg">
             - Jean Miguel
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
