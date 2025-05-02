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
  <div>
    <ul>
      <li>{{ display }}</li>
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
/*
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
  */
</style>
