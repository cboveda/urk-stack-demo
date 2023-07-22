import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const textInputRef = useRef<HTMLInputElement>(null);
  const { unityProvider, sendMessage, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "./build/Build/build.loader.js",
      dataUrl: "./build/Build/build.data",
      frameworkUrl: "./build/Build/build.framework.js",
      codeUrl: "./build/Build/build.wasm",
    });

  useEffect(() => {
    addEventListener("SetScore", (value) => {
      setScore(value as number);
    });
    return () => {
      removeEventListener("SetScore", (value) => {
        setScore(value as number);
      });
    };
  }, [addEventListener, removeEventListener, setScore]);

  return (
    <>
      <h3>Score: {score}</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage("ReactBridge", "SetTextFromReact", text);
        }}
        style={{ margin: "2em" }}
      >
        <input
          type="text"
          name="text"
          ref={textInputRef}
          onChange={({ target: { value } }) => {
            setText(value);
          }}
          placeholder="Enter text..."
          style={{ padding: 10 }}
        />
        <button type="submit">Submit</button>
      </form>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 960, height: 600 }}
      />
    </>
  );
}

export default App;
