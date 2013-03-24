function parseNumList(listString) {
    numStrings = listString.split(/[\s]+/);
    nums = new Array();
    count = 0;
    for(var i = 0; i < numStrings.length; i++) {
	str = numStrings[i];
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
    if(window.XMLHttpRequest) {
	//IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
    } else {
	// IE5, IE6 Compatability
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", name, false);
    xmlhttp.send();

    lvl = xmlhttp.responseXML;
    
    if(lvl != null) {
	geometryNodeList = lvl.getElementsByTagName("geometry");
	lvl.geometryCount = geometryNodeList.length;
	lvl.geometryList = new Array();

	for(var i = 0; i < lvl.geometryCount; ++i) {
	    newGeo = createGeometry(geometryNodeList[i]);
	    if(newGeo) lvl.geometryList[i] = newGeo;
	}
	
	lvl.getGeometry = function(idx) {
	    return this.geometryList[idx];
	}
    }

    return lvl;
}
