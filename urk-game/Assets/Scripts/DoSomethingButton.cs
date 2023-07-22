using System.Runtime.InteropServices;
using UnityEngine;

public class DoSomethingButton : MonoBehaviour
{
    private int _score = 0;

    [DllImport("__Internal")]
    private static extern void SetScore(int score);

    [DllImport("__Internal")]
    private static extern void GameOver();

    public void HandleClick_SetScore()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    SetScore (_score++);
#endif
    }

    public void HandleClick_GameOver()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    GameOver();
#endif
    }
}
