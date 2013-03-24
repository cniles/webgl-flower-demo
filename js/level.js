function parseNumList(listString) {
    var numStrings = listString.split(/[\s]+/);
    var nums = new Array();
    var count = 0;
    for(var i = 0; i < numStrings.length; i++) {
	var str = numStrings[i];
	if(str != "") {
	    nums[count++] = parseFloat(str);
	}
    }
    return nums;
}

function createVertexArray(geometryNode) {
    return parseNumList(geometryNode.getElementsByTagName("vertexList")[0].childNodes[0].nodeValue);
}

function createColorArray(geometryNode) {
    return parseNumList(geometryNode.getElementsByTagName("colorList")[0].childNodes[0].nodeValue);
}

function createGeometry(geometryNode) {
    var geometry = {
	vertices: createVertexArray(geometryNode),
	colors: createColorArray(geometryNode)
    }
    return geometry;
}

function getLevel(name) {
    var xmlhttp;
    if(window.XMLHttpRequest) {
	//IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
    } else {
	// IE5, IE6 Compatability
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", name, false);
    xmlhttp.send();

    var lvl = xmlhttp.responseXML;
    
    if(lvl != null) {
	var geometryNodeList = lvl.getElementsByTagName("geometry");
	lvl.geometryCount = geometryNodeList.length;
	lvl.geometryList = new Array();

	for(var i = 0; i < lvl.geometryCount; ++i) {
	    var newGeometry = createGeometry(geometryNodeList[i]);
	    if(newGeometry) lvl.geometryList[i] = newGeometry;
	}
	
	lvl.getGeometry = function(idx) {
	    return this.geometryList[idx];
	}
    }

    return lvl;
}
