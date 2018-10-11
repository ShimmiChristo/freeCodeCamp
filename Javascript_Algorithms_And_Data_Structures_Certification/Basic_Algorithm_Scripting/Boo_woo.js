function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if(bool === true || bool === false){
  
      console.log('true or false');
        bool = true;
    } else {
      // console.log('false');
       bool = false;
    }
    console.log(bool);
    return bool;
  }
  
  booWho(false);
  

  
//   function booWho(bool) {
//     return typeof bool === 'boolean';
//   }

//   // test here
//   booWho(null);