# Hello Preact Standalone

This is a demonstration app with standalone HTML and JSX files that loads Preact and Babel from a CDN and just runs it. You can use inline JSX and hooks. Ghost tags (Fragment) are supported.

The demo is entirely made up of functional components and hooks, no class component. It includes a counter to demonstrate responsive UI, form submission, and a context implementation.

## Why

In case you want to host a small interactive app on a static host like Github Pages.

## To run

No installation or building or packaging or compilation, just `npx serve`.

## Imported objects

```
const preact = {
  Component,
  Fragment,
  cloneElement,
  createContext,
  createElement,
  createRef,
  h,
  hydrate,
  isValidElement,
  options,
  render,
  toChildArray,
}

const preactHooks = {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useErrorBoundary,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
}
```

## Optional addons for convenience

Bootstrap CSS.
