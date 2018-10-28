function convertHTML(str) {
    var entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;'
    }
    var regex = /[&<>"']/gim;
    var newStr = str.split('');
    return(newStr.map(function callback(x) {
      return (entities[x] || x);
    }).join(''));
    
  }
  
  convertHTML("Dolce & Gabbana");
  convertHTML("Sixty > twelve");

// ----------------------------------
  // BASIC CODE SOLUTION
  function convertHTML(str) {
    // Split by character to avoid problems.
    var temp = str.split('');
    // Since we are only checking for a few HTML elements I used a switch
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case '<':
          temp[i] = '&lt;';
          break;
        case '&':
          temp[i] = '&amp;';
          break;
        case '>':
          temp[i] = '&gt;';
          break;
        case '"':
          temp[i] = '&quot;';
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
    temp = temp.join('');
    return temp;
  }
  //test here
  convertHTML("Dolce & Gabbana");


  //INTERMEDIATE CODE SOLUTION
function convertHTML(str) {
    //Chaining of replace method with different arguments
    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
}
    // test here
    convertHTML("Dolce & Gabbana");