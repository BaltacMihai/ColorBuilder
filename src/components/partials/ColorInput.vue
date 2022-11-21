<template>
  <div class="inputGroup">
    <label :for="labelId">{{ labelName }}</label>
    <div class="inputs">
      <input type="text" v-model="color" />
      <input
        type="color"
        class="invisible"
        :id="inputColorId"
        v-model="color"
      />
      <img
        src="./../../assets/imgaes/icons/colorInput.svg"
        alt="Color Input Icon"
        class="colorPicker"
        @click="clickColorPicker()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelName: String,
    id: String,
  },
  data() {
    return {
      labelId: "label-" + this.id,
      inputColorId: "inputColorId-" + this.id,
      color: "#cccccc",
    };
  },
  methods: {
    clickColorPicker() {
      console.log(this.inputColorId);

      let inputColor = document.getElementById(this.inputColorId);
      console.log(inputColor);
      inputColor.click();
    },
  },
  watch: {
    color(newValue, oldValue) {
      this.$emit("change", newValue);
    },
  },
};
</script>

<style lang="scss">
.inputGroup {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  label {
    font-size: 18px;
  }

  .inputs {
    input[type="text"] {
      border: 1px solid #5d60ef;
      padding: 0.25rem;
      font-size: 16px;
      border-radius: 5px;
      margin-right: 1rem;
    }
  }
  .invisible {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    width: 25px;
  }
  .colorPicker {
    margin-bottom: -5px;
    cursor: pointer;
  }
}
</style>
