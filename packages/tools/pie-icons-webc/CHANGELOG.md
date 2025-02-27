# @justeattakeaway/pie-icons-webc

## 0.11.1

### Patch Changes

- [Changed] - Moved test packages from dependencies to dev dependencies to prevent consumers from needing to install them ([#911](https://github.com/justeattakeaway/pie/pull/911)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Added] - jsdoc @tagname comment to generated icon typescript classes and new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.10.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.0

### Minor Changes

- [Changed] - Replace `@justeat/browserslist-config-fozzie` with `@justeattakeaway/browserslist-config-pie` ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- [Added] - icons directory to eslintignore file ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.8.1

### Patch Changes

- [Changed] - use latest pie-icons ([#823](https://github.com/justeattakeaway/pie/pull/823)) by [@dandel10n](https://github.com/dandel10n)

## 0.8.0

### Minor Changes

- [Changed] - Removed the DependantMap type and replaced all references with Lit's own PropertyValues helper. This provides exactly the same strongly typed map for a component's properties which makes our own type a little redundant. [Reference](https://lit.dev/docs/components/lifecycle/#typescript-types-for-changedproperties) ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.7.0

### Minor Changes

- [Changed] - switch from Rollup to Vite and remove Lit from configs.js bundle output. Also remote vite-dts-plugin and use tsc to generate icon type declaration files ([#815](https://github.com/justeattakeaway/pie/pull/815)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.0

### Minor Changes

- [Changed] - use latest pie-icons ([#797](https://github.com/justeattakeaway/pie/pull/797)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.5.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.5.0

### Minor Changes

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

## 0.4.0

### Minor Changes

- [Added] - host-context for pie-button icons and display property for the generated svgs ([#631](https://github.com/justeattakeaway/pie/pull/631)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.3.0

### Minor Changes

- [Changed] - Ensure size only gets set when it hasn't already been generated and `:host-context` styles are added for contextual styling ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

  This change adds `:host-context` styles to each webc icon, so that if the icon is used
  inside pie-icon-button, then it will apply width/height according to the custom properties
  set by that component.

## 0.2.0

### Minor Changes

- [Changed] - icon name changes reflected by recompile ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - using shared normalizeIconName function in pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Adding TS declaration and linting ignore ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.1.0

### Minor Changes

- [Added] - `pie-icons-webc` package for compiling SVGs as web components ([#585](https://github.com/justeattakeaway/pie/pull/585)) by [@LTurns](https://github.com/LTurns)
