var obj = {
    aProperty: {
        aSetting1: 1,
        aSetting2: 2,
        aSetting3: 3,
        aSetting4: 4,
        aSetting5: 5
    },
    bProperty: {
        bSetting1: {
            bPropertySubSetting : true
        },
        bSetting2: "bString"
    },
    cProperty: {
        cSetting: "cString"
    }
}

function iterator(obj){
  Object.keys(obj).forEach(function(o){
    if(typeof obj[o] == 'object'){
      iterator(obj[o]);
    }
    else{
      console.log(o+': '+obj[o])
    }
  })
}

iterator(obj);

------------------------------------------------------------------------ old style:

function iterate(obj) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property]);
            }
            else {
                console.log(property + "   " + obj[property]);
            }
        }
    }
}

iterate(obj);
