var timelineWidth = 0;
var timelineScale = 30;

document
  .querySelectorAll("#timeline > div:first-child > div")
  .forEach(function(div) {
    timelineWidth += div.dataset.months * timelineScale;
  });

document.getElementById("timeline").style.width = timelineWidth + "px";

document.querySelectorAll("#timeline > div > div").forEach(function(div) {
  div.style.width = div.dataset.months * timelineScale + "px";
});
