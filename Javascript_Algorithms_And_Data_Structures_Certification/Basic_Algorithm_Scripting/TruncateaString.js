function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
    return(str.substring(0,num) + '...');
    } else {
    return(str.substring(0,num));
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);



//   function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     if (str.length > num && num > 3) {
//       return str.slice(0, (num - 3)) + '...';
//     } else if (str.length > num && num <= 3) {
//       return str.slice(0, num) + '...';
//     } else {
//       return str;
//     }
  
//   }