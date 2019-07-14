'use strict';

angular.module('app')

// .filter('filterTreeItem', [function() {
//   function recursive(obj, newObj, level, itemId, isExpend) {
//     angular.forEach(obj, function (o) {
//       if(o.accounts && o.accounts.length !=0){
//         o.level = level;
//         o.leaf = false;
//         newObj.push(o);
//         if(o.id == itemId) {
//           o.expend = isExpend;
//         }
//         if(o.expend == true) {
//           recursive(o.accounts, newObj, o.level + 1, itemId, isExpend);
//         }
//       }
//       else {
//         o.level = level;
//         o.leaf = true;
//         newObj.push(o);
//         return false;
//       }
//     });
//   }

//   return function (obj, itemId, isExpend) {
//     var newObj = [];
//     recursive(obj, newObj, 0, itemId, isExpend);
//     return newObj;
//   };
// }])

.filter('filterTreeItem', [function() {
  function recursive(obj, newObj, level, itemId, isExpend) {
    angular.forEach(obj, function (o) {
      if(o.childs && o.childs.length !=0){
        o.level = level;
        o.leaf = false;
        newObj.push(o);
        if(o.id == itemId) {
          o.expend = isExpend;
        }
        if(o.expend == true) {
          recursive(o.childs, newObj, o.level + 1, itemId, isExpend);
        }
      }
      else {
        o.level = level;
        o.leaf = true;
        newObj.push(o);
        return false;
      }
    });
  }

  return function (obj, itemId, isExpend) {
    var newObj = [];
    recursive(obj, newObj, 0, itemId, isExpend);
    return newObj;
  };
}])

.filter('toFloat', function() {
  return function(number) {
    number = number ? number : 0;
    var float = parseFloat(parseFloat(number).toFixed(2));
    return float;
  };
})

.filter('toNumber', function() {
  return function(number) {
    if (number != null) {
      var float = parseFloat(parseFloat(number).toFixed(2));
      return float;
    }
    else {
      return null;
    }
  };
})

.filter('ucfirstWord', function($filter) {
  return function(word) {
    word = $filter('lowercase')(word);
    word = $filter('ucfirst')(word);
    return word;
  };
})

.filter('normalText', function($filter) {
  return function(word) {
    if (word) {
      var hasUnderscore = /_|-/g.test(word);
      var hasDot = /\./g.test(word);

      if (hasUnderscore || hasDot) {
        var removeUnderscore = word.replace(/_|-/g, " ");
        var removeDot = removeUnderscore.replace(/\./g, " ");
        var finalWord = $filter('ucfirst')(removeDot);
        return finalWord;
      }
      else {
        var finalWord = $filter('ucfirst')(word);
        return finalWord;
      }
    }
  }
})

;
