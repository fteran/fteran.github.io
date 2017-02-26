$(function(){
  $("a").click(function(){
    var url = $(this).attr("href");
    $("#page").load(url);
    return false;
  });
});
