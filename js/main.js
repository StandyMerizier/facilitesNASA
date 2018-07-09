

$('#button').on('click', function(){
  $('li').remove()

  var apiURL='https://data.nasa.gov/resource/gvk9-iz74.json';

  $.ajax({
    url: apiURL,
    success:function(res){
      console.log(res)
      res.forEach(function(arr){
        if(arr.center !== $("body > .center > li:last-child").text()){
          $('.center').append('<li>'+ arr.center + '</li>')
          $('.country').append('<li>'+ arr.country + '</li>')
          $('.location').append('<li>'+ arr.location.longitude +' '+ arr.location.latitude + '</li>')
          $('.city').append('<li>'+ arr.city + '</li>')
          $('.state').append('<li>'+ arr.state + '</li>')
          $('.zipcode').append('<li>'+ arr.zipcode + '</li>')
        };
      });
    },
    error:function(err){
      console.log(err)
    }

  });

})
