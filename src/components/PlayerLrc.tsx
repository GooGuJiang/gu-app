import { Lrc } from "react-lrc";
import Lyric from "../data/Lyric";

export default function PlayerLrc({ time }: { time: number }) {
  return (
    <Lrc
      lrc={Lyric}
      className="lrc"
      recoverAutoScrollInterval={0}
      currentMillisecond={time}
      style={{ height: "calc(100vh - 110px)", padding: "100px 20px" }}
      lineRenderer={({ index, active, line }) => (
        <div
          style={{
            fontFamily: "Noto Sans SC",
            fontSize: active ? "20px" : "18px",
            color: active ? "#000" : "#808080",
            fontWeight: active ? "bolder" : 300,
            lineHeight: "40px",
            animation: active ? "lrc-see 0.05s" : "lrc-dis 0.05s",
            filter: active ? "blur(0px)" : "blur(2px)",
            // animationIterationCount: "1",
            transitionTimingFunction: "ease"
          }}
        >
          {line.content}
        </div>
      )} 
    />
  )
}
