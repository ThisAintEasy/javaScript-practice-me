document.addEventListener("DOMContentLoaded", function() { 
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 3);
  ctx.stroke();
});
