var wordCount = function(text){
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
