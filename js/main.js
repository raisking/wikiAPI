$(document).ready(function(){
    $("#search").click(function(){
      var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
      $.ajax({
        type:"GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          // console.log(data[1][0]);
          // console.log(data[2][0]);
          // console.log(data[3][0]);
          $('#output').html('');
          for(var i=0;i<data[1].length;i++){
            $('#output').prepend("<li><a href="+data[3][0]+">"+data[1][0]+"</a><p>"+data[2][0]+"</p></li>");
             }
          $('#searchTerm').val("");
        },
        error: function(errorMessage){
        alert("Error");
        },
      });
    });
  });