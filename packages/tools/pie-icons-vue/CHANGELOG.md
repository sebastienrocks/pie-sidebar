# Changelog

## 4.11.0

### Minor Changes

- [Fixed] - License removed from packages ([#869](https://github.com/justeattakeaway/pie/pull/869)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 4.10.0

### Minor Changes

- [Changed] - Replace `@justeat/browserslist-config-fozzie` with `@justeattakeaway/browserslist-config-pie` ([#855](https://github.com/justeattakeaway/pie/pull/855)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 4.9.1

### Patch Changes

- [Changed] - use latest pie-icons ([#823](https://github.com/justeattakeaway/pie/pull/823)) by [@dandel10n](https://github.com/dandel10n)

## 4.9.0

### Minor Changes

- [Changed] - use latest pie-icons ([#797](https://github.com/justeattakeaway/pie/pull/797)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 4.8.1

### Patch Changes

- [Changed] - add missing peer dependencies ([#784](https://github.com/justeattakeaway/pie/pull/784)) by [@siggerzz](https://github.com/siggerzz)

  [Changed] - update packages, including `@babel/core` and `@justeat/pie-design-tokens`

## 4.7.1

### Patch Changes

- [Changed] - update rollup config to fix build ([#734](https://github.com/justeattakeaway/pie/pull/734)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - commonjs plugin to help resolve `@vue/babel-helper-vue-jsx-merge-props`

## 4.7.0

### Patch Changes

- - [Changed] - Updated build settings and removed redundant steps ([#717](https://github.com/justeattakeaway/pie/pull/717)) by [@fernandofranca](https://github.com/fernandofranca)

  - [Changed] - Updated bundling settings
  - [Removed] - Redundant icons files
  - [Changed] - Align scripts with pie-icons-react
  - [Changed] - Test file and added eslint rule for files generated during build

## 4.6.0

### Minor Changes

- [Changed] - JS bundler in package from `Bili` to `Rollup` ([#683](https://github.com/justeattakeaway/pie/pull/683)) by [@LTurns](https://github.com/LTurns)

## 4.5.0

### Minor Changes

- Brings icon packages back in sync ([#679](https://github.com/justeattakeaway/pie/pull/679)) by [@dandel10n](https://github.com/dandel10n)

## 4.3.0

### Minor Changes

- [Changed] - Updated pie-icons-vue build to use ESM ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] - using shared normalizeIconName function in pie-icons-configs ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] - Adding TS declaration and linting ignore ([#594](https://github.com/justeattakeaway/pie/pull/594)) by [@ashleynolan](https://github.com/ashleynolan)

## 4.1.0

### Minor Changes

- [Removed] - Helper folder with `removeHyphenBeforeDigits` function ([#585](https://github.com/justeattakeaway/pie/pull/585)) by [@LTurns](https://github.com/LTurns)

  [Added] - `handleComponentName` function to `build.js` for generating correct icon names i.e from `over-18-filled` to `IconOver18Filled`

## 4.0.0

### Major Changes

- [Changed]: iconSize prop renamed to size prop ([#574](https://github.com/justeattakeaway/pie/pull/574)) by [@dandel10n](https://github.com/dandel10n)

## 3.6.0

### Minor Changes

- [Changed]: Updates instagram-circle-large and star-circle-filled-large svg. Updates microsoft-circle-static, microsoft-circle-filled-static and apple-static both large and default and removes static postfix from them. ([#552](https://github.com/justeattakeaway/pie/pull/552)) by [@dandel10n](https://github.com/dandel10n)

### Patch Changes

- [Fixed]: removes a console error if iconSize prop is not passed ([#556](https://github.com/justeattakeaway/pie/pull/556)) by [@dandel10n](https://github.com/dandel10n)

  [Changed]: in case of invalid `iconSize` being passed to large icons now the size defaults to the `largeIconSizeDefault`

## 3.5.0

### Minor Changes

- [Changed] replaces icon size css classes with width and height attr application. ([#532](https://github.com/justeattakeaway/pie/pull/532)) by [@dandel10n](https://github.com/dandel10n)

  [Changed] moves getSvgProps logic to shared configs.js from react and vue configs.
  [Changed] rebuilds icons to apply the changes.

## 3.4.0

### Minor Changes

- [Added] Icons that were missing from the set. ([#506](https://github.com/justeattakeaway/pie/pull/506)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] The icon that was previously used for Nuts is now used for Peanuts (new). A new replacement icon for nuts has been added.

- [Changed] - pie-icons build to remove fill attr from icon paths and add fill=currentColor for svg elements ([#528](https://github.com/justeattakeaway/pie/pull/528)) by [@dandel10n](https://github.com/dandel10n)

- [Added] - Expand test coverage for pie-icons-vue ([#520](https://github.com/justeattakeaway/pie/pull/520)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 3.3.0

### Minor Changes

- [Added] - Jest test support and basic demo tests ([#472](https://github.com/justeattakeaway/pie/pull/472)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Changed] - Use vitest instead of jest and add missing sample tests ([#472](https://github.com/justeattakeaway/pie/pull/472)) by [@xander-marjoram](https://github.com/xander-marjoram)

## 3.2.0

### Minor Changes

- [Changed] - icons to use accessibility attributes ([#481](https://github.com/justeattakeaway/pie/pull/481)) by [@FayeCarter](https://github.com/FayeCarter)

### Patch Changes

- [Changed] - Replaced html-minifier by html-minifier-terser ([#479](https://github.com/justeattakeaway/pie/pull/479)) by [@fernandofranca](https://github.com/fernandofranca)

  [Changed] - Updated icons object builder function and script to async

## 3.1.0

### Minor Changes

- [Fixed] Naming of Over18Filled icon (was OverFilled18) ([#437](https://github.com/justeattakeaway/pie/pull/437)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Fixed] Typo in icon name: check-circl-large -> check-circle-large ([#443](https://github.com/justeattakeaway/pie/pull/443)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Fixed] Typo in icon name: delivery-dee-large -> delivery-fee-large
  [Fixed] Typo in icon name: locatoin-pin-food -> location-pin-food
  [Fixed] Typo in icon name: reciept-error -> receipt-error
  [Fixed] Typo in icon name: reciept-error-large -> receipt-error-large
  [Fixed] Typo in icon name: swiss-fanc-large -> swiss-franc-large
  [Fixed] Typo in icon name: targer -> target
  [Updated] pie-docs iconList snapshot tests with updated icon names

### Patch Changes

- [Fixed] Linting errors in pie-icons-vue. ([#413](https://github.com/justeattakeaway/pie/pull/413)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] Allow pie-eslint-config to use itself as linting config.
  [Added] Typescript linting to pie-monorepo.

## 3.0.0

### Major Changes

- [Changed] update icons build script ([#386](https://github.com/justeattakeaway/pie/pull/386)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] added README instructions on `iconSize` usage
  [Changed] update icons

## 2.2.0

### Minor Changes

- [Changed] - Updated SVGO version to patch snyk security warning ([#357](https://github.com/justeattakeaway/pie/pull/357)) by [@ashleynolan](https://github.com/ashleynolan)

### Patch Changes

- [Fixed] - Clip path prefix ID is now correctly randomized ([#366](https://github.com/justeattakeaway/pie/pull/366)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.1.0

### Minor Changes

- [Fixed] - Sandwhich renamed to Sandwich (typo) ([#348](https://github.com/justeattakeaway/pie/pull/348)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.1

### Patch Changes

- Add missing Volta settings to package.json ([#322](https://github.com/justeattakeaway/pie/pull/322)) by [@fernandofranca](https://github.com/fernandofranca)

## 2.0.0

### Major Changes

- [Fixes] Typo in microsoft-circe icon ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] – Fixing casing issue for generated icons & ensuring optimised icons are used correctly ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Changed] Updated icons to prefix folder names (i.e. flags/payments) ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] bookmark icon SVG's added to icon packages ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

### Minor Changes

- [Added] Bookmark icons to icon packages ([#219](https://github.com/justeattakeaway/pie/pull/219)) by [@ashleynolan](https://github.com/ashleynolan)

  [Changed] Updating plural folder names to singular (i.e. flags to flag)

## 2.0.0-beta.7

### Major Changes

- [Added] bookmark icon SVG's added to icon packages ([#237](https://github.com/justeattakeaway/pie/pull/237)) by [@ashleynolan](https://github.com/ashleynolan)

### Minor Changes

- [Added] Bookmark icons to icon packages ([#237](https://github.com/justeattakeaway/pie/pull/237)) by [@ashleynolan](https://github.com/ashleynolan)

  [Changed] Updating plural folder names to singular (i.e. flags to flag)

## 2.0.0-beta.6

### Major Changes

- [Fixes] Typo in microsoft-circe icon ([#209](https://github.com/justeattakeaway/pie/pull/209)) by [@ashleynolan](https://github.com/ashleynolan)

- [Fixed] – Fixing casing issue for generated icons & ensuring optimised icons are used correctly ([#209](https://github.com/justeattakeaway/pie/pull/209)) by [@ashleynolan](https://github.com/ashleynolan)

## 2.0.0-beta.5

### Major Changes

- [Changed] Updated icons to prefix folder names (i.e. flags/payments) by [@ashleynolan](https://github.com/ashleynolan)

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)

## Todo for full v2 release

- Fix example webpage

## v2.0.0-beta.2

_January 30, 2023_

### Fixed

- ESLint config (as wasn't working with current setup)

### Added

- `clean` task added to remove old icon files that are no longer needed

### Changed

- Icons files run through ESLint once they've been run through babel generator (so they are more readable, as only used for documentation purposes)
- Updated `pie-icons` package to `v2.0.0-beta.3`
- Icon names switched from having `Icon` as a suffix, to a prefix – for example, `ArrowLeftIcon` is now `IconArrowLeft`.

## v2.0.0-beta.1

_November 24, 2022_

### Fixed

- Published version didn't include all dist files (due to root `.gitignore`)

## v2.0.0-beta.0

_October 7, 2022_

### Changed

- Babel config updated to use `@vue/babel-preset-jsx`.
- `/src/*` renamed `/generated/*` to indicate that the files are part of a compilation step (and not a source file that should be directly edited).

## v1.0.0

_May 9, 2022_

### Added

- Transferred files over from `f-vue-icons` repo to shared PIE repo. All functionality is the same, but now hooks into the PIE iconset, rather than f-icons.
