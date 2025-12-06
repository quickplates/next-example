/** @type {import("stylelint").Config} */
export default {
  extends: [
    // SCSS rules
    "stylelint-config-standard-scss",

    // CSS Modules rules
    "stylelint-config-css-modules",

    // Alphabetical ordering rules
    "stylelint-config-alphabetical-order",
  ],

  rules: {
    // Disable custom property naming pattern enforcement
    "custom-property-pattern": null,

    // Disable mixin naming pattern enforcement
    "scss/at-mixin-pattern": null,

    // Allow unknown at-rules
    "scss/at-rule-no-unknown": null,

    // Allow duplicate mixins
    "scss/no-duplicate-mixins": null,
  },
};
