# Unreleased changes

Use [the changelog guidelines](https://git.io/polaris-changelog-guidelines) to format new entries. 💜

---

### Enhancements

- `TextField` no longer uses `componentWillReceiveProps`([#628](https://github.com/Shopify/polaris-react/pull/628))
- EventListener`no longer uses`componentWillUpdate` ([#628](https://github.com/Shopify/polaris-react/pull/628))
- Allowed `Icon` to accept a React Node as a source ([#635](https://github.com/Shopify/polaris-react/pull/635)) (thanks to [@mbriggs](https://github.com/mbriggs) for the [original issue](https://github.com/Shopify/polaris-react/issues/449))
- Moved icons to a separate npm package ([#686](https://github.com/Shopify/polaris-react/pull/686))
- Added `oneHalf` and `oneThird` props to `Layout` component ([#724](https://github.com/Shopify/polaris-react/pull/724))
- Added `helpText` prop to ActionList items ([#777](https://github.com/Shopify/polaris-react/pull/777))
- Added second thumb to `RangeSlider` ([#784](https://github.com/Shopify/polaris-react/pull/784))

### Bug fixes

- Removed min-width from `FormLayout` `Items` and applying it only to `Items` used inside a `FormLayout.Group` ([#650](https://github.com/Shopify/polaris-react/pull/650))

### Documentation

### Development workflow

- `yarn run tophat` has been removed and its functionality has been moved into the `yarn run dev` server. Example editing now supports hot-reloading so you don't need restart the server anymore.
