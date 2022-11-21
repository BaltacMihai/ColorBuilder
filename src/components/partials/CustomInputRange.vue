<template>
  <div class="inputGroup">
    <label :for="labelId">{{ labelName }}</label>
    <div class="inputs">
      <input type="range" v-model="value" min="0" max="100" />
      <input type="text" v-model="computedValue" @input="calculateValue" />
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
      value: 50,
    };
  },
  computed: {
    computedValue() {
      return this.value / 10;
    },
  },

  watch: {
    value(newValue, oldValue) {
      this.$emit("change", newValue);
    },
  },
  methods: {
    calculateValue(event) {
      if (event.target.value < 0 || event.target.value > 10) return 0;
      else {
        this.value = event.target.value * 10;
        this.$emit("change", event.target.value * 10);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
      margin-left: 1rem;
      width: 2.25rem;
    }

    input[type="range"] {
      width: 75%;
      margin-top: 0.25rem;
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
