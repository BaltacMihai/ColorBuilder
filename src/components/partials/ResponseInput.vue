<template>
  <div class="inputGroup">
    <label :for="labelId">{{ labelName }}</label>
    <div class="inputs">
      <input type="text" v-model="response" readonly />
      <img
        src="./../../assets/imgaes/icons/clipboard-text.svg"
        alt="Color Input Icon"
        class="colorPicker"
        @click="copyToClipboard()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelName: String,
    id: String,
    responseValue: String,
  },
  data() {
    return {
      labelId: "label-" + this.id,
      inputColorId: "inputColorId-" + this.id,
      response: this.responseValue,
    };
  },

  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.response);
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
      margin-right: 1rem;
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
