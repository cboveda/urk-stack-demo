import { Unity, useUnityContext } from "react-unity-webgl";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";

function App() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [leaderBoard, setLeaderBoard] = useState<number[]>([]);
  const textInputRef = useRef<HTMLInputElement>(null);
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "./build/Build/build.loader.js",
      dataUrl: "./build/Build/build.data",
      frameworkUrl: "./build/Build/build.framework.js",
      codeUrl: "./build/Build/build.wasm",
    });

  const handleSetScore = useCallback((value: ReactUnityEventParameter) => {
    setScore(value as number);
  }, []);

  const handleGameOver = useCallback(() => {
    setLeaderBoard([...leaderBoard, score]);
    setScore(0);
  }, [leaderBoard, score]);

  useEffect(() => {
    addEventListener("SetScore", handleSetScore);
    addEventListener("GameOver", handleGameOver);
    return () => {
      removeEventListener("SetScore", handleSetScore);
      removeEventListener("GameOver", handleGameOver);
    };
  }, [addEventListener, handleGameOver, handleSetScore, removeEventListener]);

  return (
    <div className="container">
      <h3>Score! {score}</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage("ReactBridge", "SetTextFromReact", text);
        }}
      >
        <input
          type="text"
          name="text"
          className="input-text"
          ref={textInputRef}
          onChange={({ target: { value } }) => {
            setText(value);
          }}
          placeholder="Enter text..."
        />
        <button type="submit" className="button-submit">
          Submit
        </button>
      </form>
      <Unity unityProvider={unityProvider} className="unity-container" />
    </div>
  );
}

export default App;
