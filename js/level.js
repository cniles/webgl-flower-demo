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

function vertexArray(node) {
    
    var arr = parseNumList(node.childNodes[0].nodeValue);
    arr.dimension = node.getAttribute("r");

    arr.getVBO = getVBO;
    function getVBO() {
	var buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
	return buffer;
    }

    return arr;
}

function geometry(geometryNode) {

    var geo = {
	vertices: new vertexArray(geometryNode.getElementsByTagName("vertexList")[0]),
	colors: new vertexArray(geometryNode.getElementsByTagName("colorList")[0])
    }

    return geo;
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
	    var newGeometry = new geometry(geometryNodeList[i]);
	    if(newGeometry) lvl.geometryList[i] = newGeometry;
	}
	
	lvl.getGeometry = function(idx) {
	    return this.geometryList[idx];
	}
    }

    return lvl;
}
