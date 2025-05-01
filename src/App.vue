@import "tailwindcss";

<script>
export default {
  data() {
    return {
      display: "",
      rowOne: [1, 2, 3, "/"],
      rowTwo: [4, 5, 6, "x"],
      rowThree: [7, 8, 9, "-"],
      rowFour: ["<", 0, "=", "+"],
    };
  },
  methods: {
    addition() {
      this.event = item + item;
    },
  },
};
</script>

<template>
  <!--
  <div id="frame">
    <ul>
      <li id="screen">#</li>
      <li>
        <button>{{ one }}</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
      </li>
      <li>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>x</button>
      </li>
      <li>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
      </li>
      <li>
        <button><</button>
        <button>0</button>
        <button>=</button>
        <button>+</button>
      </li>
    </ul>
  </div>
-->
  <div id="frame">
    <ul>
      <li id="screen">{{ display }}</li>
      <li>
        <button v-for="item of rowOne" :key="item" @click="handleInput(item)">
          {{ item }}
        </button>
      </li>
      <li>
        <button v-for="item of rowTwo" :key="item" @click="handleInput(item)">
          {{ item }}
        </button>
      </li>
      <li>
        <button v-for="item of rowThree" :key="item" @click="handleInput(item)">
          {{ item }}
        </button>
      </li>
      <li>
        <button v-for="item of rowFour" :key="item" @click="handleInput(item)">
          {{ item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#frame .red {
  color: red;
}

#frame ul {
  list-style: none;
  padding: 0;
  margin: auto;
}

#frame {
  margin: auto;
  text-align: center;
}

#frame button {
  font-size: 50px;
  width: 10%;
  height: 10%;
  background-color: gray;
  color: white;
  padding: 3%;
  margin: auto;
}

#screen {
  font-size: 50px;
  width: 34%;
  height: 10%;
  background-color: gray;
  color: white;
  padding: 3%;
  margin: auto;
}
</style>
