@import '../assets/main.css'; @import 'tailwindcss';

<script setup>
import { useCalculator } from './logic/calculator';

const {
  display,
  inputDigit,
  inputDecimal,
  toggleSign,
  inputPercent,
  clear,
  performOperation,
  handleEquals,
} = useCalculator();

const handleButtonClick = (value) => {
  switch (value) {
    case 'C':
      clear();
      break;
    case '.':
      inputDecimal();
      break;
    case '+/-':
      toggleSign();
      break;
    case '%':
      inputPercent();
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      performOperation(value);
      break;
    case '=':
      handleEquals();
      break;
    default:
      inputDigit(value);
      break;
  }
};
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
          {{ display }}
        </h1>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('C')"
        >
          C
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('+/-')"
        >
          +/-
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('%')"
        >
          %
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('/')"
        >
          /
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('7')"
        >
          7
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('8')"
        >
          8
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('9')"
        >
          9
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('*')"
        >
          *
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('4')"
        >
          4
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('5')"
        >
          5
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('6')"
        >
          6
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('-')"
        >
          -
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mx-auto">
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('1')"
        >
          1
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('2')"
        >
          2
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('3')"
        >
          3
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('+')"
        >
          +
        </button>
      </div>
      <div class="flex flex-row items-center justify-center mb-10 mx-auto">
        <button
          class="w-40 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('0')"
        >
          0
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('.')"
        >
          .
        </button>
        <button
          class="w-20 h-20 p-0 bg-[#ccb7ae] active:bg-[#d6cfcb] border-[#d6cfcb] border-2"
          @click="handleButtonClick('=')"
        >
          =
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
