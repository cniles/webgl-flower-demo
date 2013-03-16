// These belong somewhere...the only global should be the gl context
var program;
var vertexBuffer;
var colorBuffer;

function draw() {
    gl.clearColor(0.0, 0.8, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    program.enable();
    program.setVertexAttribPointers([vertexBuffer, colorBuffer]);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.flush();    
}

function initFloatArrayBuffer(array) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
    return buffer;
}

function initBuffers() {
    vertexBuffer = initFloatArrayBuffer([ 
	 0.0,  0.5,
	-0.5, -0.5,
	 0.5, -0.5
    ]);
    colorBuffer = initFloatArrayBuffer([
	1.0, 0.0, 0.0,
	0.0, 1.0, 0.0,
	0.0, 0.0, 1.0
    ]);
}

function initShader() {
    program = createShaderProgram(simpleShader);
    if(!program) {
	console.log("There was a problem creating the shader program! Bailing!");
	return;
    }
}

function glMain() {
    initShader();
    if(program) {
	initBuffers();
	draw();
    }
}
