// components/Work.tsx
import { JSX } from "preact";

export function Work() {
  return (
    <section class="work py-20">
      <div class="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 2xl:px-24">
        <h1 class="text-5xl font-bold text-black mb-10">My Work</h1>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="card w-80 bg-white rounded shadow-md p-4">
            <h2 class="text-2xl font-bold text-black mb-4">Project 1</h2>
            <p class="text-lg text-gray-600 mb-6">This is a description of project 1.</p>
            <button class="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded flex items-center justify-center">Learn More</button>
          </div>
          <div class="card w-80 bg-white rounded shadow-md p-4">
            <h2 class="text-2xl font-bold text-black mb-4">Project 2</h2>
            <p class="text-lg text-gray-600 mb-6">This is a description of project 2.</p>
            <button class="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded flex items-center justify-center">Learn More</button>
          </div>
          <div class="card w-80 bg-white rounded shadow-md p-4">
            <h2 class="text-2xl font-bold text-black mb-4">Project 3</h2>
            <p class="text-lg text-gray-600 mb-6">This is a description of project 3.</p>
            <button class="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded flex items-center justify-center">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}