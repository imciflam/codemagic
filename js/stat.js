window.renderStatistics = function(ctx, names, times) {

  var COLUMN_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_DISTANCE = COLUMN_WIDTH + 50;
  var maxTime = Math.max.apply(null, times);
  var height;
  var color;
  var you = 'Вы';

  drawRect(ctx, 110, 20, 420, 270, 'rgba(0,0,0,0.7)');
  drawRect(ctx, 100, 10, 420, 270, 'white');
  
  ctx.font = '16px PT Mono';
  drawText(ctx, 'Вы победили!', 140, 40);
  drawText(ctx, 'Список результатов:', 140, 60);
  

  for (var i = 0; i < names.length; i++) {
    height = Math.round(getPercent(times[i], maxTime, COLUMN_HEIGHT));
    color = you !== names[i] ? 'rgba(0, 0, 255, ' + genOpacity() + ')' : 'rgba(255, 0, 0, 1)';
    drawText(ctx, names[i], 140 + (i * COLUMN_DISTANCE), 250);

    drawRect(ctx, 140 + (i * COLUMN_DISTANCE), 130 + (100 - height), COLUMN_WIDTH, height, color);

  }

  function drawRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  function drawText(ctx, text, x, y) {
    ctx.fillStyle = 'black';
    ctx.fillText(text, x, y);
  }
  function genOpacity() {
    return Math.random();
  }
  function getPercent(value, max, colHeight) {
    return value / max * colHeight;
  }

}

