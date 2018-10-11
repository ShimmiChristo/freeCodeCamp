function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer([false, null, 0, NaN, undefined, ""]);