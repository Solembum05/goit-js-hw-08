import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeOn = localStorage.getItem('videoplayer-current-time');

const onPlay = function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {});
};
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(timeOn)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
