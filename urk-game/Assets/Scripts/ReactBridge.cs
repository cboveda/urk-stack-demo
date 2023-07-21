using TMPro;
using UnityEngine;


public class ReactBridge : MonoBehaviour
{
    [SerializeField] private TMP_Text textObject;

    public void SetTextFromReact(string s)
    {
        textObject.text = s;
    }
}
