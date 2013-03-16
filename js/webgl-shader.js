function getType(type) {
    if(type == 'f') return gl.FLOAT;
}

function makeShader(src, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
}

function makeProgram(shaderObj) {
    var program = gl.createProgram();
    program.src = shaderObj;
    gl.attachShader(program, makeShader(shaderObj.vertexShader, gl.VERTEX_SHADER));
    gl.attachShader(program, makeShader(shaderObj.fragmentShader, gl.FRAGMENT_SHADER));
    gl.linkProgram(program);
    return program;
}

function createShaderProgram(shaderObj) {

    if(!shaderObj.hasOwnProperty('vertexShader') ||
       !shaderObj.hasOwnProperty('fragmentShader')) {
	console.log("Can't create a program from this object! It doesn't have a vertexShader or fragmentShader property!");
	return null;
    }
    
    var program = makeProgram(shaderObj);

    program.enable = function() {
	gl.useProgram(program);
	var attribCount = shaderObj.attributes.length;
	for(var i = 0; i < attribCount; i++) {
	    attribute = shaderObj.attributes[i];
	    attribute.location = gl.getAttribLocation(program, attribute.name);
	    gl.enableVertexAttribArray(attribute.location);
	}
    }

    program.setVertexAttribPointers = function(buffers) {
	for(var i = 0; i < buffers.length; i++) {
	    attribute = shaderObj.attributes[i];
	    gl.bindBuffer(gl.ARRAY_BUFFER, buffers[i]);
	    gl.vertexAttribPointer(attribute.location, attribute.size, getType(attribute.type), false, 0, 0);
	}
    }

    return program;
}
