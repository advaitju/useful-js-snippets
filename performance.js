// Simple performance testing.

/ * Paste into browser console to quickly load script.
const script = document.createElement ('script'); script.setAttribute ('src', 'https://gist.githack.com/advaitju/f51255dad4712a96ed4497d6c6ca6136/raw/37dbc516c31215e1d9bd3537084e33ec82e67cdb/p.js'); document.querySelector ('head'). appendChild (script);
* /

function p (callback1, callback2) {
  const callbackOutput = {};

  const callback1_t0 = performance.now ();
  callbackOutput.callback1 = callback1 ();
  const callback1_t1 = performance.now ();
  const callback1Time = callback1_t1 - callback1_t0;

  let results = `Time A: $ {callback1Time}`;

  if (callback2) {
    const callback2_t0 = performance.now ();
    callbackOutput.callback2 = callback2 ();
    const callback2_t1 = performance.now ();
    const callback2Time = callback2_t1 - callback2_t0;

    results + = `\ nTime B: $ {callback2Time}` +
               `\ nDiff: $ {callback1Time - callback2Time}`;
    }

  console.log (results);
  return callbackOutput;
}
