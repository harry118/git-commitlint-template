module.exports = {
  extends: ["cz"],
  // extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": ["feat", "fix", "docs", "style", "refactor", "test", "revert"],
  },
};
