// These belong somewhere...the only global should be the gl context
var program;

var flowerBuffer;
var leafBuffer;

var flowerTexture;
var leafTexture;

var rot = 0;

var projection = new J3DIMatrix4();
projection.perspective(45, 1024.0/768.0, 1, 100);

var flowerModelMtx = new Array();
var leafModelMtx = new Array();

var viewMatrix;

//var fCR = 109/255.0;
//var fCG = 152/255.0;
//var fCB = 241/255.0;

var fCR = 245/255.0;
var fCG = 255/255.0;
var fCB = 245/255.0;

function drawFlowers(modelMtx) {

    program.setVertexAttribPointers([flowerBuffer, flowerBuffer, flowerBuffer]);

    var mv = new J3DIMatrix4(viewMatrix);
    mv.multiply(modelMtx);

    mv.setUniform(gl, gl.getUniformLocation(program, "u_m"), false);
    gl.uniform4f(gl.getUniformLocation(program, "u_color"), fCR, fCG, fCB, 1);

    gl.bindTexture(gl.TEXTURE_2D, flowerTexture);
        
    gl.drawArrays(gl.TRIANGLES, 0, 128 * 3 * isoPoints.count);
}

function drawLeaf(modelMtx) {
    program.setVertexAttribPointers([leafBuffer, leafBuffer, leafBuffer]);

    var mv = new J3DIMatrix4(viewMatrix);
    mv.multiply(modelMtx);

    gl.bindTexture(gl.TEXTURE_2D, leafTexture);

    mv.setUniform(gl, gl.getUniformLocation(program, "u_m"), false);

    gl.uniform4f(gl.getUniformLocation(program, "u_color"), 1, 1, 1, 1);

    gl.drawArrays(gl.TRIANGLES, 0, leafMesh.elements.count * 3 );
}

function draw() {
    var tilt = 30;

    window.requestAnimFrame(draw, canvas);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    gl.colorMask(true, true, true, false);

    program.enable();

    gl.activeTexture(gl.TEXTURE0);
    gl.uniform1i(gl.getUniformLocation(program, "u_sampler"), 0);
    projection.setUniform(gl, gl.getUniformLocation(program, "u_p"), false);

    rot += 0.05;
    
    viewMatrix = new J3DIMatrix4();
    viewMatrix.translate(0.0, 1.0, -11.0);
    viewMatrix.rotate(tilt, 1, 0, 0);
    viewMatrix.rotate(rot, 0.0, 1.0, 0.0);

    for(var i = 0; i < flowerModelMtx.length; ++i) {
	drawFlowers(flowerModelMtx[i]);
    }
    
    for(var i = 0; i < leafModelMtx.length; ++i) {
	drawLeaf(leafModelMtx[i]);
    }

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.useProgram(null);

    gl.flush();
}

function initDraw() {
    var n = 3;
    for(var i = 0; i < n; ++i) {
	leafModelMtx[i] = new J3DIMatrix4();
	leafModelMtx[i].translate(0, -1.3, 0);
	leafModelMtx[i].scale(0.35, 0.35, 0.35);
	leafModelMtx[i].rotate((360.0 / n) * i, 0, 1, 0);
    }

    var s = 0.2;
    for(var i = 0; i < 5; ++i) {
	flowerModelMtx[i] = new J3DIMatrix4();
	flowerModelMtx[i].rotate(-90, 1.0, 0.0, 0.0);
	flowerModelMtx[i].scale(1-i*s, 1-i*s, 1-i*s);
    }
}

function initFloatArrayBuffer(array) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
    return buffer;
}

function initIntArrayBuffer(array) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array), gl.STATIC_DRAW);
    return buffer;
}

function initTexture(fname) {
    var texture = gl.createTexture();
    texture.image = new Image();
    texture.image.onload = function() {
	handleLoadedTexture(texture);
    }
    texture.image.src = fname;
    return texture;
}

function handleLoadedTexture(texture) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
}

function packBufferArray(mesh) {
    var fbuffer = new Array();
    var stride = 8;

    for(var i = 0; i < mesh.elements.count * 3; ++i) {

	vertexIdx = mesh.elements.data[i*3+0] * 3;
	normalIdx = mesh.elements.data[i*3+1] * 3;
	texCoordIdx = mesh.elements.data[i*3+2] * 2;
	
	fbuffer[i * stride + 0] = mesh.vertices.data[vertexIdx + 0];
	fbuffer[i * stride + 1] = mesh.vertices.data[vertexIdx + 1];
	fbuffer[i * stride + 2] = mesh.vertices.data[vertexIdx + 2];
	fbuffer[i * stride + 3] = mesh.normals.data[normalIdx + 0];
	fbuffer[i * stride + 4] = mesh.normals.data[normalIdx + 1];
	fbuffer[i * stride + 5] = mesh.normals.data[normalIdx + 2];
	fbuffer[i * stride + 6] = mesh.texcoord.data[texCoordIdx + 0];
	fbuffer[i * stride + 7] = mesh.texcoord.data[texCoordIdx + 1];
    }
    return fbuffer;
}

function packHydrangeaArray(fbuffer) {
    var finalBuffer = new Array();
    var stride = 8;
    for(var i = 0; i < isoPoints.count; ++i) {
	var mtx = new J3DIMatrix4();
	var d = new J3DIVector3(0.0, 0.0, 1.0);
	var offset = i * isoPoints.stride;

	var P = new J3DIVector3(isoPoints.data[offset + 0],
			       isoPoints.data[offset + 1],
			       isoPoints.data[offset + 2]);

	var pMtx = new J3DIMatrix4();
	pMtx.scale(isoPoints.scale.x, isoPoints.scale.y, isoPoints.scale.z);

	P.multVecMatrix(pMtx);
	
	var Pn = new J3DIVector3(P[0], P[1], P[2]); 
	Pn.normalize();
	
	var ar = Math.acos(d.dot(Pn));
	var angle = (ar / Math.PI) * 180.0;

	var N = d; // small optimization

	N.cross(Pn);

	mtx.translate(P[0], P[1], P[2]);
	mtx.rotate(angle, N[0], N[1], N[2]);
	mtx.scale(0.2, 0.2, 0.2);	
	mtx.rotate(Math.random() * 360, 0, 0, 1);
	mtx.translate(flowerMesh.translate.x, flowerMesh.translate.z, flowerMesh.translate.y);

	var vCount = fbuffer.length / stride;
	for(var k = 0; k < vCount; ++k) {
	    var foffset = i * fbuffer.length;
	    var vtx = new J3DIVector3(fbuffer[k * stride + 0],
				      fbuffer[k * stride + 1],
				      fbuffer[k * stride + 2]);
	    var nml = new J3DIVector3(fbuffer[k * stride + 3],
				      fbuffer[k * stride + 4],
				      fbuffer[k * stride + 5]);

	    vtx.multVecMatrix(mtx);
	    nml.multVecMatrix(mtx);
	    
	    finalBuffer[foffset + k * stride + 0] = vtx[0];
	    finalBuffer[foffset + k * stride + 1] = vtx[1];
	    finalBuffer[foffset + k * stride + 2] = vtx[2];
	    finalBuffer[foffset + k * stride + 3] = nml[0];
	    finalBuffer[foffset + k * stride + 4] = nml[1];
	    finalBuffer[foffset + k * stride + 5] = nml[2];
	    finalBuffer[foffset + k * stride + 6] = fbuffer[k * stride + 6];
	    finalBuffer[foffset + k * stride + 7] = fbuffer[k * stride + 7];
	}
    }
    return finalBuffer;
}

function initBuffers() {
    // pack all the mesh info into a single draw array
    var fbuffer;

    fbuffer = packBufferArray(flowerMesh);
    fbuffer = packHydrangeaArray(fbuffer);
    flowerBuffer = initFloatArrayBuffer(fbuffer);
    
    fbuffer = packBufferArray(leafMesh);
    leafBuffer = initFloatArrayBuffer(fbuffer);
}

function initShader() {
    program = createShaderProgram(plainColor);
    if(!program) {

	console.log("There was a problem creating the shader program! Bailing!");
	return;
    }
}

function glMain() {
    initShader();
    if(program) {
	initBuffers();
	flowerTexture = initTexture("data/hydrangea.png");
	leafTexture = initTexture("data/leaf.png");
	gl.disable(gl.CULL_FACE);
	gl.enable(gl.DEPTH_TEST);
	gl.disable(gl.BLEND);
	gl

	initDraw();
	draw();
    }
}
