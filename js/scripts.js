var wordCount = function(text){
  text = text.replace(/[^\w\s]|/g, "");
  var words = text.split(" ");
  var obj = {};
  for (var i = 0; i < words.length; i++) {
    if (obj.hasOwnProperty(words[i])) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  var keysSorted = Object.keys(obj).sort(function(a, b){return obj[b]-obj[a]})
  for(var j = 0; j < keysSorted.length; j++) {
    keysSorted[j] += ": " + obj[keysSorted[j]];
  }
  return keysSorted;
};

$(document).ready(function() {
  $("form#wordCount").submit(function(event){
    $('ul#word').empty();
    var text = $("textarea#text").val();
    var result = wordCount(text);
    for (var i=0; i < result.length; i++){
      $("ul#word").append("<li><i class='fa-li fa fa-info-circle'></i>" + result[i] +"</li>")
    }
    $("#result").show();

    event.preventDefault();
  });
});
