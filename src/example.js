import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import './DisableProgressBar'

function setPlayer(node) {
  const player = videojs(node, {}, () => {
    player.src([{ src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', type: 'video/mp4' }])
    const bar = player.DisableProgressBar()

    player.play().then(() => {
      bar.disable()

      setTimeout(() => {
        bar.enable()
        // eslint-disable-next-line no-console
        console.log('ready again')
      }, 7000)
    })
  })
}

function initExample() {
  const videoDOM = document.createElement('video')

  videoDOM.id = 'video'
  videoDOM.className = 'video-js'
  videoDOM.setAttribute('controls', true)

  document.body.appendChild(videoDOM)

  setPlayer(videoDOM)
}

initExample()
