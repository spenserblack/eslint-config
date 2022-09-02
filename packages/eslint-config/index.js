const ext = ["base", "typescript"]
  .map((name) => `@spenserblack/eslint-config-${name}`);

module.exports = {
  extends: ext,
};
