

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a1793caa-8a83-49b7-a6f4-692c1e6b8bc2","e9906353-5718-437e-bb87-301363cb1b80","8b9ae25d-8bf5-4a2a-a58b-e913b151c9e8"],"propsByKey":{"a1793caa-8a83-49b7-a6f4-692c1e6b8bc2":{"name":"jugador","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":3,"looping":true,"frameDelay":12,"version":"4zCkNouAKfc1JDhHVuRtjjzPXQKD4auH","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":196},"rootRelativePath":"assets/a1793caa-8a83-49b7-a6f4-692c1e6b8bc2.png"},"e9906353-5718-437e-bb87-301363cb1b80":{"name":"jugador2","sourceUrl":"assets/api/v1/animation-library/gamelab/zzQoFr_F05EDg6fnUOVBgaGu8.vEkGZV/category_fantasy/alienPink_climb.png","frameSize":{"x":68,"y":94},"frameCount":2,"looping":true,"frameDelay":2,"version":"zzQoFr_F05EDg6fnUOVBgaGu8.vEkGZV","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zzQoFr_F05EDg6fnUOVBgaGu8.vEkGZV/category_fantasy/alienPink_climb.png"},"8b9ae25d-8bf5-4a2a-a58b-e913b151c9e8":{"name":"pelota","sourceUrl":null,"frameSize":{"x":25,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"9PRCW6WKD_6DJe2UBihkwYhUVTsgXg0R","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":30},"rootRelativePath":"assets/8b9ae25d-8bf5-4a2a-a58b-e913b151c9e8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var jugador = createSprite(30, 200, 20, 70);
var jugador2 = createSprite(370, 200, 20, 70);
jugador.shapeColor = "red";
jugador2.shapeColor = "green";
jugador2.velocityY = -4;
var pelota = createSprite(200, 200, 20, 20);
pelota.shapeColor = "orange";
jugador.setAnimation("jugador");
jugador2.setAnimation("jugador2");
pelota.setAnimation("pelota");
createEdgeSprites();
function draw() {
  background("white");
  if (keyDown("up")) {
    jugador.y = jugador.y - 10;
  }
  if (keyDown("down")) {
    jugador.y = jugador.y + 10;
  }
  if (keyDown("space")) {
    pelota.velocityY = 5;
    pelota.velocityX = 5;
  }
  pelota.rotation = 40;
  jugador.bounceOff(edges);
  jugador2.bounceOff(edges);
  pelota.bounceOff(topEdge);
  pelota.bounceOff(bottomEdge);
  pelota.bounceOff(jugador);
  pelota.bounceOff(jugador2);
  jugador2.y = pelota.y;
  if (pelota.x < 0 || pelota.x > 400) {
    otra();
    playSound("assets/category_alerts/playful_game_error_sound_5_long.mp3");
  }
  if  (pelota.isTouching(jugador) || pelota.isTouching(jugador2)) {
    playSound("assets/category_sports/Hitting_Soccer_Ball_SFX.mp3", false);
  }
  drawSprites();
  textSize(100);
  text("1", 100, 200);
  text("2", 300, 200);
  red();
}
function red() {
  for (var i = 0; i <= 400; i = i + 20) {
    line(200, i, 200, i + 10);
  }
}
function otra() {
  pelota.x = 200;
  pelota.y = 200;
  pelota.velocityX = 0;
  pelota.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
