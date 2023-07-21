using System.Runtime.InteropServices;
using UnityEngine;

public class DoSomethingButton : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void Hello();

    public void HandleClick()
    {
        Hello();
    }
}
