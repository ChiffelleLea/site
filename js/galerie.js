var grid = $('.grid').imagesLoaded( function(){
  grid.masonry('layout');
  grid.masonry({
    itemSelector: ".grid-item",
    isAnimated: true,
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });
});
