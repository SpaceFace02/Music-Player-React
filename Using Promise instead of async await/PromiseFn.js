export const playAudio = (playing, audioRef) => {
  if (playing) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => audioRef.current.play());
    }
  }
};

// We import like, import {playAudio} from './PromiseFn'

// const Test = () => {

// export default Test
// }

// import ndsjakf from './PromiseFn' will import the default one only.
