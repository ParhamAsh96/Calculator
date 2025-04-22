<script></script>

<template>
  <div id="frame">
    <ul>
      <li>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>/</button>
      </li>
      <li>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>X</button>
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
</template>

<style scoped>
#frame ul {
  list-style: none;
  padding: 0;
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
</style>
