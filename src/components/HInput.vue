<template>
  <fieldset class="h-fieldset">
    <legend class="h-legend">{{ label }}</legend>
    <input v-bind="$attrs" :id="id" :type="type" class="h-input" @input="emitEventInput($event)" />
  </fieldset>
</template>

<script>
export default {
  name: "HInput",
  props: {
    id: { type: String, default: () => new Date().getTime() },
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          ["text", "password", "date", "datetime-local", "email", "number", "search", "tel", "url"].indexOf(
            value
          ) !== -1
        );
      },
    },
    label: { type: String, required: true },
  },

  methods: {
    emitEventInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.h-input {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border: 1px solid #d7d7d7;
  border-radius: 0.1rem;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  background: white;
  color: #3a3a3a;
  font-size: 0.8rem;
  width: 100%;
}

.h-input:focus {
  border-color: rgba(0, 142, 204, 0.6);
}

.h-legend {
  position: absolute;
  cursor: text;
  font-size: 90%;
  opacity: 1;
  top: -0.5em;
  left: 0.75rem;
  z-index: 3;
  line-height: 1;
  padding: 0 1px;
  color: rgba(58, 58, 58, 0.7);
  width: auto;
}

.h-legend::after {
  content: " ";
  display: block;
  position: absolute;
  height: 1px;
  top: 0.5em;
  left: -0.2em;
  right: -0.2em;
  z-index: -1;
  background: white;
}

.h-fieldset {
  display: block;
  position: relative;
}
</style>
