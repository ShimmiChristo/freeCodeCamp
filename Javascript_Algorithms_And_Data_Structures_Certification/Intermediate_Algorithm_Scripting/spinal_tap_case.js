function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var noSpaces = str.replace(/_|\s/g," ");
    for (var i=0; i<noSpaces.length; i++) {
        if(noSpaces[i].match(/[A-Z]/) != null){
          return(noSpaces.split(/(?=[A-Z])|\s/).join("-").toLowerCase());
      }
    }
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("AllThe-small Things");
  spinalCase("thisIsSpinalTap");
  spinalCase("Teletubbies say Eh-oh");