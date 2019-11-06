# React Spinner

A react component that takes a duration(milliseconds) as a prop, and will be visible for that duration. The components visibility can be extended every time it receives new duration props (in this example provided by clicking the button). If there is no more "duration" the components visibility will be set to hidden.

[Demo](https://freemagee.github.io/react-spinner/)

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Usage](#usage)

## Why?

I have an app that has shows a loading spinner whenever it interacts with an API. Sometimes those interactions are of a short duration, but happen multiple times in succession. The current loading spinner will flicker as it's visibility is toggled very quickly.

What I wanted was a spinner that would not flicker. So it will keep spinning as long as it is being told to.

## Installation

This is a react component, so should be used in a react project. All that is needed currently is the **Spinner** folder, and its contents, located at `\src`.

## Usage

```javascript
import { Spinner } from "./Spinner";
```

```javascript
// Somewhere in your component
<Spinner duration={duration} size={100} thickness={16} fill="#ffffff" />
```

- Takes a `duration` prop, in milliseconds, which should be a `Number` data type, this prop is _required_
- Takes a `size` prop, intended size in pixels, which should be a `Number` data type, default _100_
- Takes a `thickness` prop, intended size in pixels, which should be a `Number` data type, default _16_
- Takes a `fill` prop, which should be a full HEX color code in `String` data type, default _#ffffff_

The spinner element itself has been taken from [Luke Haas](https://projects.lukehaas.me/css-loaders/).
