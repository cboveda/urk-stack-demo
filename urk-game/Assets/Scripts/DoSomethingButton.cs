using System.Runtime.InteropServices;
using UnityEngine;

public class DoSomethingButton : MonoBehaviour
{
    private int _score = 0;

    [DllImport("__Internal")]
    private static extern void SetScore(int score);

    public void HandleClick()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    SetScore (_score++);
#endif
    }
}
