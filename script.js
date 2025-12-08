var hydra = new Hydra();

let c1 = [173/255, 106/255, 89/255];
let c2 = [208/255, 147/255, 116/255];
let c3 = [240/255, 201/255, 172/255];
let c4 = [209/255, 134/255, 94/255];
let c5 = [163/255, 97/255, 62/255];

let palette = [c1, c2, c3, c4, c5]

voronoi(10).
modulate(noise(10))
  .color(
    () => palette[Math.floor(time*0.1 % 2)][0],
    () => palette[Math.floor(time*0.1 % 2)][1],
    () => palette[Math.floor(time*0.1 % 2)][2]
  )
.scrollX(() => -mouse.x / width)
.pixelate(20,10)
.out()

  


