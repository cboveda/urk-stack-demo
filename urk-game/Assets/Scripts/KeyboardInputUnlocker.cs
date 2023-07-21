using UnityEngine;

public class KeyboardInputUnlocker : MonoBehaviour
{
    void Awake()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    WebGLInput.captureAllKeyboardInput = false;
#endif
    }
}
