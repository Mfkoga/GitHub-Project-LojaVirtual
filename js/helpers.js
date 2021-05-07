var helpers ={
    childFinder: function (div, key) {
        for (var i=0; i < div.childNodes.lenght; i++) {
            var child = div.childNodes [i];
            if (child.getAttribute("key") === key) {
                console.log("[achou]...",child);
                return child;
            }
        }
    },

    includes: function(arr,name) {
        for (var i=0; i < arr.length; i++) {
        var item = arr[i];
        console.log("[includes]...", item.name, name);

        if (item.name === name) {
            return true;
        }
    }
    return false;
 },
};