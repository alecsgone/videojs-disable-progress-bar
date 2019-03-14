# VideoJS disable progress bar

This videojs plugin allows you to disable video progress. Useful for preroll videos where you need to disable the user from progressing/scrubbing the video.

## how to install

- `npm i videojs-disable-progress-bar`

## Getting Started

- Check [src/example.js](src/example.js)

## API

```js
const bar = player.DisableProgressBar()

bar.disable() // will remove listeners so the bar still works but the user can't interact
bar.enable() // restore all back to normal
```

### Thanks to
- [rsadwick](https://github.com/rsadwick/videojs-disable-progress) for the inspiration and main code-base
