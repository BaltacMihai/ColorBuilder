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
        <custom-input-range
          labelName="Proportions Color"
          id="proportions"
          @change="proportionChanged"
        />
      </div>
      {{ proportion }}
    </section>
    <section>
      <h2 class="title">Result</h2>

      <div class="content">
        <response-input
          labelName="Color"
          id="finalColor"
          :responseValue="response"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ColorInput from "./ColorInput.vue";
import CustomInputRange from "./CustomInputRange.vue";
import ResponseInput from "./ResponseInput.vue";

export default {
  components: {
    ColorInput,
    CustomInputRange,
    ResponseInput,
  },
  data() {
    return {
      primaryColor: "#cccccc",
      secondaryColor: "#cccccc",
      proportion: "50",
    };
  },
  computed: {
    response() {
      return "#cccccc";
    },
  },
  methods: {
    primaryColorChanged(newValue) {
      if (typeof newValue == "string") this.primaryColor = newValue;
    },
    secondaryColorChanged(newValue) {
      if (typeof newValue == "string") this.secondaryColor = newValue;
    },
    proportionChanged(newValue) {
      if (typeof newValue == "string" || typeof newValue == "number")
        this.proportion = newValue;
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
    width: 100%;
    margin-left: 2rem;
    & > * {
      margin-top: 1rem;
    }
  }
}
</style>
