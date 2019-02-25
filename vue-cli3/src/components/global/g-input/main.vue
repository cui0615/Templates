<template>
  <div class="input-wrap">
    <input
      v-model="invalue"
      :name="htmlName"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      class="input"
      @input="input"
      @change="change"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <div class="input-closebox">
      <span
        v-show="_show"
        title="清空"
        class="input-delquery icon-round-close"
        @click="clear"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'g-input',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
      default: '请输入',
    },
    htmlName: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      invalue: this.value,
      focus: false,
    };
  },
  computed: {
    _show() {
      if (this.invalue === '') return false;
      return this.focus;
    },
  },
  watch: {
    value(val) {
      this.invalue = val;
    },
  },
  methods: {
    handleFocus() {
      this.focus = true;
    },
    handleBlur() {
      setTimeout(() => {
        this.focus = false;
      }, 0);
    },
    input() {
      this.$emit('input', this.invalue);
    },
    change() {
      this.$emit('change', this.invalue);
    },
    clear() {
      // this.invalue = '';
      this.$emit('input', '');
      this.$emit('change', this.invalue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  .input {
    width: 100%;
    font: 0.16rem/0.22rem arial;
    padding: 1px 0;
    padding-right: 0.06rem;
  }
  .input-closebox {
    display: flex;
    align-items: center;
    width: .18rem;
    .input-delquery {
      cursor: pointer;
      font-size: .18rem;
      color: #999;
      vertical-align: middle;
    }
  }
}
</style>
