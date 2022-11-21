<template>
  <div class="form">
    <section>
      <h2 class="title">Colors</h2>
      <div class="content">
        <color-input
          labelName="Primary"
          id="primary"
          @change="primaryColorChanged"
        ></color-input>
        {{ primaryColor }}
        <color-input
          labelName="Secondary"
          id="secondary"
          @change="secondaryColorChanged"
        ></color-input>
        {{ secondaryColor }}
      </div>
    </section>
    <section>
      <h2 class="title">Settings</h2>
      <div class="content">
        <div class="inputGroup">
          <label for="proportions"> Proportions Color</label>
          <input type="range" />
        </div>
      </div>
    </section>
    <section>
      <h2 class="title">Result</h2>

      <div class="content">
        <color-input labelName="Color" id="result"></color-input>
      </div>
    </section>
  </div>
</template>

<script>
import ColorInput from "./ColorInput.vue";
export default {
  components: {
    ColorInput,
  },
  data() {
    return {
      primaryColor: "#cccccc",
      secondaryColor: "#cccccc",
    };
  },
  methods: {
    primaryColorChanged(newValue) {
      if (typeof newValue == "string") this.primaryColor = newValue;
    },
    secondaryColorChanged(newValue) {
      if (typeof newValue == "string") this.secondaryColor = newValue;
    },
  },
};
</script>

<style lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 1rem;
    & > * {
      margin-top: 1rem;
    }
  }
}
</style>
