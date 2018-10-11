function titleCase(str) {
      var splitStr = str.toLowerCase().split(' ');
        var newArr;
        var strArr = [];
       for (var i = 0;i<splitStr.length;i++) {
               var newArr = splitStr[i].split('');
        var firstLet = splitStr[i][0].toUpperCase();
            newArr.shift(0,1);
        newArr.unshift(firstLet);
            newArr = newArr.join('');
            strArr.push(newArr);  
     } str = strArr.join(' ');
       return str;
    }
    titleCase(\"I'm a little tea pot\");


    // BASIC CODE ANSWER
    String.prototype.replaceAt = function(index, character) {
            return this.substr(0, index) + character + this.substr(index+character.length);
    };
    function titleCase(str) {
            var newTitle = str.split(' ');
        var updatedTitle = [];
        for (var st in newTitle) {
                updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
        }
        return updatedTitle.join(' ');
    }
    
    // INTERMEDIATE ANSWER
    function titleCase(str) {
          var convertToArray = str.toLowerCase().split(\" \");
      var result = convertToArray.map(function(val){
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
      return result.join(\" \");
    }
    
    titleCase(\"I'm a little tea pot\");
    
    // ADVANCED ANSWER
    function titleCase(str) {\n  return str.toLowerCase().replace(/(^|\\s)\\S/g, (L) => L.toUpperCase())