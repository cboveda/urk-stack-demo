import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const textInputRef = useRef<HTMLInputElement>(null);
  const { unityProvider, sendMessage } = useUnityContext({
    loaderUrl: "./build/Build/build.loader.js",
    dataUrl: "./build/Build/build.data",
    frameworkUrl: "./build/Build/build.framework.js",
    codeUrl: "./build/Build/build.wasm",
  });

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage("ReactBridge", "SetTextFromReact", text);
        }}
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
