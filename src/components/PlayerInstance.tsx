import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function PlayerInstance({ setTime }: { setTime: Function }) {
  return (
    <AudioPlayer
      src="./music/HoneyComeBear - 走馬灯.mp3"
      listenInterval={1}
      onPause={e => {
        let target = e.target as HTMLAudioElement;
        setTime(target!.currentTime * 1000 + 500);
        console.log("暂停");
      }}
      onPlay={e => {
        console.log("开始播放");
      }}
      onListen={e => {
        let target = e.target as HTMLAudioElement;
        setTime((target!.currentTime * 1000 + 500));
        //console.log(audio!.currentTime);
        //</>const test = documgetElementById("rhap_current-time")
        // .textContent;m^Kl0(T7Q(SX76%((XKT
      }}
    />
  )
}
