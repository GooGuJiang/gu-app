import { Lrc } from "react-lrc";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from "react";
import { animated, useSpring } from '@react-spring/web'
//import { Wave } from "@foobar404/wave";

const LRC = `[00:00.000]作词 : Kaako
[00:01.000]作曲 : Kaako/Monkey
[00:21.370]白紙のノートと向かい合っても
[00:27.140]寝つけない夜でも 走っている
[00:32.620]耳塞いだ
[00:35.590]五月蝿いのは
[00:38.340]期限付きの鼓動だけだ
[00:43.330]ファインダー越しには
[00:46.230]もう居ないや
[00:48.610]フィルムに仕舞った 笑い方と
[00:54.300]ノンフィクションと
[00:56.950]おまえと観た
[00:59.210]夢の続きを 映写機にかけよう
[01:05.040]いつの間にか スタートより
[01:09.100]目の前にあったゴール
[01:13.140]映画の終わり 嗚呼
[01:18.260]走馬灯が揺れていた
[01:23.510]なみだの色 映すな
[01:28.850]溺れ合った 夏に戻れ
[01:34.310]空が⻘いなあ 嗚呼
[01:39.640]影も忘れさせる程
[01:45.590]僕等はここにいるんだよ
[01:58.100]尖った日差しに 目が眩んで
[02:03.280]遠のく背中が ぶれないように
[02:09.010]追いかけていた 惹かれていた
[02:13.890]その優しさに 甘えたりもした
[02:19.630]足を取んなよ ひどい泥濘
[02:24.330]さっさと変われよ 赤信号
[02:30.260]息づかいはまだ 拙いまま
[02:34.350]あこがれに 焦がれながら
[02:38.340]振り返ったら 嗚呼
[02:43.770]走馬灯が滲んでいた
[02:48.920]弱さなんて 明かすな
[02:54.270]誓い合った 夏を抱いて
[02:59.580]はやく逢いたいなあ 嗚呼
[03:04.880]何と天秤に掛けても
[03:10.860]僕等の証を選んだ
[03:39.690]陽炎のなか 見違えても
[03:43.550]憶うほど 痛くなっても
[03:50.300]映画の終わり 嗚呼
[03:55.690]走馬灯が揺れていた
[04:01.020]唇から 伝った
[04:06.370]未練さえも 分かち合える
[04:11.520]おまえが理由なんだ
[04:16.990]同じ光 見ていたから
[04:22.950]選んだ 信じた
[04:27.600]映画が終わる 嗚呼
[04:32.970]走馬灯が揺れていた
[04:38.210]有終の日 仰いだ
[04:43.540]約束した エンドロール
[04:49.020]涙が止まんないなあ
[04:54.170]ふたり駆け抜けた軌跡
[05:00.240]僕等はここにいたんだよ
[05:26.410]映画が終わる`;


const Player = () => {
    const [time, setTime] = React.useState(0);


    const [styles, api] = useSpring(() => ({
       opacity: 1 
      
      
      }))
    

    return(
    <>
    <Lrc
        lrc={LRC}
        className="lrc"
        recoverAutoScrollInterval={0}
        currentMillisecond={time}
        style={{ height: "calc(100vh - 110px)", padding: "100px 20px" }}
        lineRenderer={({ index, active, line }) => (
          <div
            style={{
              fontFamily: 'Noto Sans SC',
              fontSize: active ? "20px" : "18px",
              color: active ? "#000" : "#808080",
              fontWeight: active ? "bolder" : 300 ,
              lineHeight: "40px",
              animation: active ? "lrc-see 0.05s" : "lrc-dis 0.05s",
              filter: active ? "blur(0px)" : "blur(2px)",
              //animationIterationCount:"1",
              transitionTimingFunction:"ease"
            }}
          >
            {line.content}
          </div>
        )} 
        />

     
     <AudioPlayer
      src="./music/HoneyComeBear - 走馬灯.mp3"
      listenInterval={1}
      onPause={(e) => {
        const audio = document.querySelector('audio');
        setTime(audio!.currentTime*1000+500);
        console.log("暂停");
      }}
      onPlay={(e) => {
        setTime(0);
        console.log("开始播放");
      }}
      onListen={(e) => {
        const audio = document.querySelector('audio');
        setTime((audio!.currentTime*1000+500));
        //console.log(audio!.currentTime);
        //</>const test = documgetElementById("rhap_current-time")
        // .textContent;m^Kl0(T7Q(SX76%((XKT
      }}
      />
      </>
    )
  };

export default Player;