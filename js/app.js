$(function(){
  $("a").click(function(){
    var url = $(this).attr("href");
    $.ajax({
      url: url
    })
      .done(function(html){
        $("#page").empty().append(html);
      })
      .fail(function(){
        console.log("error");
      })
      .always(function(){
        console.log("complete")
      });
    return false;
  });
});
