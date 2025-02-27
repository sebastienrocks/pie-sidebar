# @justeattakeaway/pie-modal

## 0.30.0

### Minor Changes

- [Removed] - pie-monorepo specific content from Web Component READMES ([#904](https://github.com/justeattakeaway/pie/pull/904)) by [@LTurns](https://github.com/LTurns)

## 0.29.0

### Minor Changes

- [Changed] - The shadow effect for unpinned footer to span the whole container ([#903](https://github.com/justeattakeaway/pie/pull/903)) by [@raoufswe](https://github.com/raoufswe)

  [Removed] - Heading shadow

  [Fixed] - Footer should sit at the bottom of a fullscreen modal, regardless of the content height

- [Changed] - Use different font sizes for the modal heading at narrow and wide breakpoints ([#912](https://github.com/justeattakeaway/pie/pull/912)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.28.0

### Minor Changes

- [Added] - @tagname jsdoc comment to top of component class and use new defineCustomElement function to define the components ([#905](https://github.com/justeattakeaway/pie/pull/905)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.27.0

### Minor Changes

- [Fixed] - Incorrect modal positioning when using position="top" in certain states ([#883](https://github.com/justeattakeaway/pie/pull/883)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Visual regression tests to cover the previous broken states

## 0.26.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Changed] - Update header styles to fix spacing inconsistencies ([#878](https://github.com/justeattakeaway/pie/pull/878)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Update article padding for narrow viewports

## 0.25.0

### Minor Changes

- [Added] - set sideEffects package.json property to correctly communicate to bundlers such as webpack that js files in the component dist folders contain side effects and should therefore not be treeshaken when the entire library is imported. [Reference](https://cube.dev/blog/how-to-build-tree-shakeable-javascript-libraries) ([#854](https://github.com/justeattakeaway/pie/pull/854)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- [Changed] - Align author field for all packages ([#852](https://github.com/justeattakeaway/pie/pull/852)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.24.0

### Minor Changes

- [Changed] - Use pie-css to handle focus styling ([#836](https://github.com/justeattakeaway/pie/pull/836)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.23.0

### Minor Changes

- [Added] - Allow HTML in slot on Storybook for modal and card ([#825](https://github.com/justeattakeaway/pie/pull/825)) by [@raoufswe](https://github.com/raoufswe)

  [Added] - `DOMPurify` to ensure the passed content is sanitized

## 0.22.0

### Minor Changes

- [Changed] - Move any browser-based references to lifecycle hooks that are not run on the server. This is to fix SSR issues seen in NextJS integrations where calling things like `document.addEventListener` in places such as the constructor (which is called during SSR and CSR) causes errors to occur. ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Defer importing the `dialog-polyfill` package to when the component is running in the browser. The package is not universal code, meaning it contains browser references and this code is run by simply importing the package. This breaks SSR in applications such as NextJS. Using a dynamic import (whilst not ideal) solves this issue by preventing the client-only code run running on the server. ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Removed the DependantMap type and replaced all references with Lit's own PropertyValues helper. This provides exactly the same strongly typed map for a component's properties which makes our own type a little redundant. [Reference](https://lit.dev/docs/components/lifecycle/#typescript-types-for-changedproperties) ([#818](https://github.com/justeattakeaway/pie/pull/818)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.21.0

### Minor Changes

- [Fixed] Safari ios scroll issue ([#819](https://github.com/justeattakeaway/pie/pull/819)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.20.0

### Minor Changes

- [Changed] - use newer webc icon import paths ([#815](https://github.com/justeattakeaway/pie/pull/815)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.19.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 0.19.0

### Minor Changes

- [Added] - leading and supporting action click events to notify consumers ([#753](https://github.com/justeattakeaway/pie/pull/753)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.18.0

### Minor Changes

- [Updated] - Export all of `defs.ts` file from component `index.ts` files ([#722](https://github.com/justeattakeaway/pie/pull/722)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.17.0

### Minor Changes

- - [Changed] - updated Modal component dependencies adding the `dialog-polyfill` package ([#678](https://github.com/justeattakeaway/pie/pull/678)) by [@fernandofranca](https://github.com/fernandofranca)

  - [Changed] - updated Modal component to use `dialog-polyfill`
  - [Changed] - updated Modal documentation regarding the legacy browser support for Dialog element and polyfill usage and limitations
  - [Changed] - vanilla example app for testing Modal with `dialog-polyfill`

## 0.16.0

### Minor Changes

- [Added] - hasStackedActions to pie-modal action buttons ([#650](https://github.com/justeattakeaway/pie/pull/650)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Prevent tree-shaking of components in storybook ([#667](https://github.com/justeattakeaway/pie/pull/667)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Removed] - Built webc icons from source control
  [Added] - Type declaration files for components
  [Added] - Types for pie-icons
  [Added] - TS version of pie-icons-configs/config.js (Will be used after DSW-1025)
  [Added] - Webc icon tests for width, height and base classes
  [Changed] - Update pie-icons-webc build to generate a slightly different template for regular and large icons (using different types, etc.)
  [Changed] - Update pie-icons-webc rollup config to remove commonjs build
  [Changed] - Use `just-kebab-case` and `just-pascal-case` instead of `kebab-case` and `pascal-case` to simplify usage (and they're more recently maintained)

- [Added] - New ActionProps type for modal leading/supporting actions ([#670](https://github.com/justeattakeaway/pie/pull/670)) by [@xander-marjoram](https://github.com/xander-marjoram)

### Patch Changes

- [Fixed] - Re-add property decorator for modal position prop ([#676](https://github.com/justeattakeaway/pie/pull/676)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 0.15.0

### Minor Changes

- [Added] - isFooterPinned property to modal which offers more scrolling options to consumers ([#648](https://github.com/justeattakeaway/pie/pull/648)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Modal aria labels to close, back and loading elements ([#652](https://github.com/justeattakeaway/pie/pull/652)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Changed] - Add js/ts linting and fix errors ([#653](https://github.com/justeattakeaway/pie/pull/653)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] SupportingAction prop to modal ([#643](https://github.com/justeattakeaway/pie/pull/643)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.14.0

### Minor Changes

- [Added] - `position` prop to modal ([#630](https://github.com/justeattakeaway/pie/pull/630)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Sync modal header styles with figma ([#627](https://github.com/justeattakeaway/pie/pull/627)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - prop for `leadingAction` to pie-modal ([#632](https://github.com/justeattakeaway/pie/pull/632)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Changed] - Moved some tests from Visual to Component ([#613](https://github.com/justeattakeaway/pie/pull/613)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

## 0.13.0

### Minor Changes

- [Added] - Default modal footer ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Height styles for the different sizes
  [Removed] - Unnecessary `:focus-visible` outline for the modal
  [Fixed] - Modal width should be able to exceed 600px for `isFullWidthBelowMid`

- [Added] - loading spinner to modal ([#628](https://github.com/justeattakeaway/pie/pull/628)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Scroll shadow for modal contents ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Tests to validate leading/supporting action buttons ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Missing tests to check that the modal closes when expected to
  [Changed] - Updated tests to verify that the correct event is being triggered

- [Added] - hasBackButton prop to modal ([#623](https://github.com/justeattakeaway/pie/pull/623)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.12.0

### Minor Changes

- [Added] - @event jsdoc comments for modal events for react wrapper to analyse ([#612](https://github.com/justeattakeaway/pie/pull/612)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Changed] - Ensure component implements it's props interface ([#611](https://github.com/justeattakeaway/pie/pull/611)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Fixed] - Added IconClose to Visual tests and modal ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.10.0

### Minor Changes

- [Added] - Add returnFocusAfterCloseSelector prop ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Extract `renderTestPieModal` into test helper file so it can be used for component tests too
  [Added] - Add README documentation for new props

- [Fixed] - Fix console errors when switching between stories ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - New `isFullWidthBelowMid` prop for pie-modal ([#600](https://github.com/justeattakeaway/pie/pull/600)) by [@LTurns](https://github.com/LTurns)

- [Added] isDismissible prop and tests ([#588](https://github.com/justeattakeaway/pie/pull/588)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.0

### Minor Changes

- [Changed] - Set modal props to public ([#597](https://github.com/justeattakeaway/pie/pull/597)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Added] - New size prop for pie-modal ([#572](https://github.com/justeattakeaway/pie/pull/572)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Visual regression test for each size
  [Changed] - Modal story to include new size prop

## 0.7.0

### Minor Changes

- [Added] - Modal backdrop functionality ([#559](https://github.com/justeattakeaway/pie/pull/559)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - Scroll locking to modal ([#564](https://github.com/justeattakeaway/pie/pull/564)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.1

### Patch Changes

- [Changed] - Updated defs to use different array type syntax ([#566](https://github.com/justeattakeaway/pie/pull/566)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.6.0

### Minor Changes

- [Changed] - Updated styles to use custom props ([#551](https://github.com/justeattakeaway/pie/pull/551)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - close button to modal ([#549](https://github.com/justeattakeaway/pie/pull/549)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.5.0

### Minor Changes

- [Updated] - enum types to string union types to string union types ([#508](https://github.com/justeattakeaway/pie/pull/508)) by [@FayeCarter](https://github.com/FayeCarter)

## 0.4.0

### Minor Changes

- [Added] - `heading` and `headingLevel` props to the modal component ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - Modal heading added to component ([#513](https://github.com/justeattakeaway/pie/pull/513)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] - Basic styling for modal default state

- [Changed] - moved pie-webc-core dependency to devDependencies in each component ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Additional notes on visual tests and environment variables ([#525](https://github.com/justeattakeaway/pie/pull/525)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] prop to control modal open & close state ([#527](https://github.com/justeattakeaway/pie/pull/527)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] Read me percy config examples ([#529](https://github.com/justeattakeaway/pie/pull/529)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Fixed] - PieModal CSS by adding logical property ([#521](https://github.com/justeattakeaway/pie/pull/521)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.3.0

### Minor Changes

- [Changed] - Build script to include generating react wrapper ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Added] - Missing `test:ci` scripts to package.json ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

- [Updated] - components to use the shared configurations ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150)]:
  - @justeattakeaway/pie-webc-core@0.2.0

## 0.2.0

### Minor Changes

- [Changed] - use RTL mixin on component ([#478](https://github.com/justeattakeaway/pie/pull/478)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`1f79d9d1a`](https://github.com/justeattakeaway/pie/commit/1f79d9d1a6fe9160b244e82d956290136b87187b)]:
  - @justeattakeaway/pie-webc-core@0.1.0

## 0.1.1

### Patch Changes

- [Added] - PieModal component shell ([#439](https://github.com/justeattakeaway/pie/pull/439)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] - README and LICENSE files
  [Added] - Initial TypeScript and Vite config
  [Added] - `declaration.d.ts` file for TypeScript
