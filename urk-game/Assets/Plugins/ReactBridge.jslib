mergeInto(LibraryManager.library, {
  Hello: function () {
    window.alert("Hello, world!");
  },

  SetScore: function (score) {
    try {
      window.dispatchReactUnityEvent("SetScore", score);
    } catch (e) {
      console.warn("Failed to dispatch event");
    }
  },
});
