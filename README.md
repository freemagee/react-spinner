# React Spinner

A react component that takes a duration(ms) as a prop, and will be visible for that duration. The components visibility can be extended every time it receives new duration props (in this example provided by clicking the button). If there is no more "duration" the components visibility will be set to hidden.

[Demo](https://freemagee.github.io/react-spinner/)

## Table of Contents

- [Why?](#why)
- [Installation](#installation)
- [Usage](#usage)
- [TODO](#todo)

## Why?

I have an app that has shows a loading spinner whenever it interacts with an API. Sometimes those interactions are of a short duration, but happen multiple times in succession. The current loading spinner will flicker as it's visibility is toggled very quickly.

What I wanted was a spinner that would not flicker. So it will keep spinning as long as it is being told to.

## Installation

This is a react component, so should be used in a react project. All that is needed currently is the **Spinner** folder located at `\src`.

## Usage

```javascript
import { Spinner } from "./Spinner";
```

```javascript
// Somewhere in your component
<Spinner duration={duration} />
```

Takes a `duration` prop, which should be a `Number` type.

The spinner element itself has been taken from [Luke Haas](https://projects.lukehaas.me/css-loaders/). Alternative spinners can be used from that source by replacing the CSS in `Spinner.css`.

## TODO

- [ ] Resolve ESlint complaining about `react-hooks/exhaustive-deps`
- [x] Add better visual explanation of duration to demo
- [ ] Incorporate styles into the component to make it self contained
- [ ] Improve the spinner CSS. I copied it from a 3rd party 😔