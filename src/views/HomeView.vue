<template>
  <div>
    <header>
      <NavbarTab />
    </header>
    <section>
      <div class="">
        <div
          class="h-72 flex justify-center items-center bg-[url('/src/assets/1.jpg')] bg-cover bg-center"
          id="contentheader"
        >
          <div class="text-center">
            <p class="text-5xl font-semibold uppercase">Travelers never think that they are the foreigners</p>
          </div>
        </div>
        <div class="text-center pt-10">
          <div class="text-4xl uppercase">
            <p>Places to watch around the world</p>
          </div>
          <div class="flex justify-center items-center pt-10 text-xl">
            <div class="text-center mx-5">
              <button
                class="bg-slate-200 rounded-full w-36 h-36 shadow-2xl hover:shadow-cyan-200/100"
              >
                <img
                  src="/src/assets/2.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>England</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/3.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>America</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-green-200/100"
              >
                <img
                  src="/src/assets/4.jpg"
                  alt=""
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Canada</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/5.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Japan</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/6.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Germany</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded-full w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/7.jpg"
                  class="rounded-full w-36 h-36"
                />
              </button>
              <p>Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// เรียกใช้ component ของ navbar มาใช้

import NavbarTab from "@/components/NavbarTab.vue";
export default {
  components: {
    NavbarTab,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
