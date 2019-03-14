import videojs from 'video.js'

const Plugin = videojs.getPlugin('plugin')

class DisableProgressBar extends Plugin {
  constructor(player) {
    super(player)
    // define some reasonable defaults for this sweet plugin
    this.state = false
  }

  disable() {
    this.state = true

    this.player.controlBar.progressControl.disable()
    this.player.controlBar.progressControl.seekBar.off('mousedown')
    this.player.controlBar.progressControl.seekBar.off('mouseup')
    this.player.controlBar.progressControl.seekBar.off('touchstart')
    this.player.controlBar.progressControl.seekBar.off('touchend')
    this.player.controlBar.progressControl.seekBar.off('click')
  }

  enable() {
    this.state = false

    this.player.controlBar.progressControl.enable()
    this.player.controlBar.progressControl.seekBar.on(
      'mousedown',
      this.player.controlBar.progressControl.seekBar.handleMouseDown,
    )
    this.player.controlBar.progressControl.seekBar.on(
      'mouseup',
      this.player.controlBar.progressControl.seekBar.handleMouseUp,
    )
    this.player.controlBar.progressControl.seekBar.on(
      'touchstart',
      this.player.controlBar.progressControl.seekBar.handleMouseDown,
    )
    this.player.controlBar.progressControl.seekBar.on(
      'touchend',
      this.player.controlBar.progressControl.seekBar.handleMouseUp,
    )
    this.player.controlBar.progressControl.seekBar.on(
      'click',
      this.player.controlBar.progressControl.seekBar.handleClick,
    )
  }

  getState() {
    return this.state
  }

  dispose() {
    super.dispose()
    videojs.log('the DisableProgressBar plugin is being disposed')
  }
}

videojs.registerPlugin('DisableProgressBar', DisableProgressBar)
