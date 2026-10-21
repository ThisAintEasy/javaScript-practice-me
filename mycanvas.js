
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(100, 100, 50, 10, 3.14159 * 2);
  ctx.stroke();

