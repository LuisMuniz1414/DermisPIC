var hydra = new Hydra();

function r(min=0,max=1) { return Math.random()*(max-min)+min; }

solid(1,1,1)
  .diff(
    shape(999, r(0.6,0.93), 0.09)   // círculo
      .repeat(20,10)
  )
  .modulateScale(osc(8).rotate(r(-.5,.5)), .52)
  .add(
    src(o0)
      .scale(0.965)
      .rotate(.012 * (Math.round(r(-2,1))))
      .color(0.937, 0.796, 0.721)   // ← tus valores 239,203,184
      .modulateRotate(o0, r(0,0.5))
      .brightness(.15)
  , .7)
  .out()
