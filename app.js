/* Ned Games — arcade sound toggle. Sounds are off by default; the choice is saved in the browser. */
(function () {
  "use strict";
  var btn = document.getElementById("soundBtn");
  if (!btn) return;
  var KEY = "ng_muted";
  var muted = true;
  try { muted = localStorage.getItem(KEY) !== "0"; } catch (e) {}
  var ctx = null;

  function render() {
    btn.classList.toggle("on", !muted);
    btn.setAttribute("aria-pressed", String(!muted));
    btn.setAttribute("aria-label", muted ? "Turn arcade sounds on" : "Turn arcade sounds off");
    btn.querySelector(".icon").textContent = muted ? "🔇" : "🔊";
    btn.querySelector(".label").textContent = muted ? "SOUND OFF" : "SOUND ON";
  }

  function blip() {
    if (muted) return;
    try {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      var now = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "square";
      o.frequency.setValueAtTime(660, now);
      o.frequency.linearRampToValueAtTime(1100, now + 0.06);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.exponentialRampToValueAtTime(0.08, now + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      o.connect(g).connect(ctx.destination);
      o.start(now); o.stop(now + 0.14);
    } catch (e) {}
  }

  btn.addEventListener("click", function () {
    muted = !muted;
    try { localStorage.setItem(KEY, muted ? "1" : "0"); } catch (e) {}
    render();
    blip();
  });

  // Blip when hovering a game card, and when clicking links or buttons
  var lastCard = null;
  document.addEventListener("mouseover", function (e) {
    var card = e.target.closest && e.target.closest(".card");
    if (card && card !== lastCard) blip();
    lastCard = card;
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("a, button") && !e.target.closest("#soundBtn")) blip();
  }, true);

  render();
})();
