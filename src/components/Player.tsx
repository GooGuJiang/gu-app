import React from "react";
import { animated, useSpring } from '@react-spring/web'
import PlayerLrc from "./PlayerLrc";
import PlayerInstance from "./PlayerInstance";
//import { Wave } from "@foobar404/wave";


export default function MusicPlayer() {
  const [time, setTime] = React.useState(0);
  const [styles, api] = useSpring(() => ({
    opacity: 1
  }));

  return (
    <>
      <PlayerLrc time={time}/>
      <PlayerInstance setTime={setTime}/>
    </>
  )
}
