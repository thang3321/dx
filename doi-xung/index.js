function isPalRec(str, s, e) {
  if(s == e) {
    return true;
  };

  if(str.charAt(s) != str.charAt(e)) {
    return false;
  }

  if(s < e -1) {
    return isPalRec(str, s + 1, e - 1);
  }

  return true;
}

function isPalindrome(str) {
    var n = str.length;
    if (n == 0) {
      return true;
    }
    return isPalRec(str, 0, n - 1);
  }

let check = isPalindrome('hi1111111112312312321ih')
