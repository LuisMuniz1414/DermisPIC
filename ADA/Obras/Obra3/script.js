var hydra = new Hydra();

let c1 = [0.811, 0.603, 0.470]
let c2 = [0.772, 0.556, 0.435]
let c3 = [0.894, 0.670, 0.517]

let palette = [c1, c2, c3]

voronoi()
  .color(
    () => palette[Math.floor(time*0.1 % 2)][0],
    () => palette[Math.floor(time*0.1 % 2)][1],
    () => palette[Math.floor(time*0.1 % 2)][2]
)
  .scrollX(() => -mouse.x / width)
  .rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
              .kaleid(50)
              .scale(() => -mouse.y / width)
              .modulate(noise(0.6,0.5))
            .blend(shape(10),0.01), 0.5)

.out(o0)