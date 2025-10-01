// KOBLLUX Archetype Bridge v2 — iframe-side adapter for UNO (Horus/Dual)
// - Receives visual settings and audio level from parent (HUB UNO)
// - Exposes simple CSS variables so each archetype stays lightweight
// - Handshakes readiness so the parent can resend settings after load
(function(){
  const ARCH = (()=>{
    try{ return (location.pathname.split('/').pop()||'').replace(/\.html$/i,'').toLowerCase(); }catch{ return ''; }
  })();
  const E = (sel,root=document)=>root.querySelector(sel);
  const R = (min,max)=>Math.random()*(max-min)+min;

  const st = {
    glow: 1.0, // 0..1 multiplier for drop-shadows
    preset: 'blue1',
    overlayOn: false,
    bloom: false,
    rms: 0
  };

  // Smooth RMS to avoid jitter
  let lastRms = 0;
  function smoothRms(x){ const a = 0.18; lastRms = (1-a)*lastRms + a*Math.max(0,Math.min(1,x)); return lastRms; }

  function applyVisual(v){
    if(!v) return;
    try{
      if (typeof v.glow === 'number') st.glow = Math.max(0,Math.min(1,v.glow));
      if (typeof v.bloom === 'boolean') st.bloom = v.bloom;
      if (typeof v.overlayOn === 'boolean') st.overlayOn = v.overlayOn;
      if (typeof v.preset === 'string') st.preset = v.preset.toLowerCase();
      // CSS hooks
      const de = document.documentElement;
      de.dataset.preset = (st.preset==='blue1'?'blue-1':st.preset);
      de.dataset.overlay = st.overlayOn ? 'on' : 'off';
      // Vars that styles can consume
      de.style.setProperty('--glow', String(st.glow||1));
      de.style.setProperty('--bloom', st.bloom?'1':'0');
    }catch(e){}
  }

  function applyAudio(level){
    try{
      const rms = smoothRms(level||0);
      const de = document.documentElement;
      // 0..0.8 range keeps it subtle
      const resp = Math.min(0.8, rms*0.8);
      de.style.setProperty('--resp', String(resp));
      // Optional: tint intensity as function of rms
      de.style.setProperty('--respLuma', String(0.3 + resp*0.5));
    }catch(e){}
  }

  // Message pump
  window.addEventListener('message', (ev) => {
    const msg = ev && ev.data || {};
    if (msg && msg.type === 'visualSettings' && msg.data) applyVisual(msg.data);
    if (msg && typeof msg.audioLevel === 'number') applyAudio(msg.audioLevel);
  });

  // Emit ready so parent can push settings immediately
  function hello(){ try { window.parent && window.parent.postMessage({ type:'archReady', arch: ARCH }, '*'); } catch(e){} }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(hello, 0);
  } else {
    document.addEventListener('DOMContentLoaded', hello);
  }

  // Optional testing helpers
  window.__arch = { applyVisual, applyAudio, st };
})();