@import '../assets/main.css'; @import 'tailwindcss';

<script setup>
import { ref } from "vue";

const result = ref(0);

function addition() {
  result.value++;
}
</script>

<template>
  <div id="app">
    <header></header>

    <main>
      <div class="flex items-center justify-center mt-10 mx-auto">
        <h1 class="text-5xl font-bold text-[#ccb7ae]">Calculator</h1>
      </div>
      <div class="flex flex-row items-center justify-center mt-30 mx-auto">
        <h1
          class="container flex items-center justify-center p-0 w-80 h-20 text-4xl bg-[#ccb7ae] border-[#d6cfcb] border-2 m-auto"
        >
          {{ result }}
        </h1>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          C
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          +/-
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          %
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          +
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          1
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          2
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          3
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          -
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          4
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          5
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          6
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          *
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          7
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          8
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          9
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          /
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mb-10 mx-auto">
        <button
          class="w-40 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          0
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          .
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="increment"
        >
          =
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
