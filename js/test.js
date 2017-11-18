var canvas = document.getElementById("canvas");
var gl = WebGLUtils.setupWebGL(canvas);

test( "controlTest", function() {
    ok(true, "Always true.");
});

test( "getLevel()", function() {
    var level = getLevel("./data/notalevel.xml");
    ok(level == null, "unsuccessful load");
    level = getLevel("./data/testlevel.xml");
    ok(level != null, "successful load");
    ok(level.geometryCount, "geometry count exists");
    ok(level.geometryCount == 2, "geometry count correct");
    ok(level.getGeometry, "getGeometry() implemented");
    var geo = level.getGeometry(0);
    ok(geo != null, "getGeometry() returns not null");
    ok(geo.vertices != null, "geometry vertices exists");
    ok(geo.vertices.length == 6, "geometry vertices has correct count: expected 6, found " + geo.vertices.length);
    ok(geo.colors, "geometry colors exists");
    ok(geo.colors.length == 9, "geometry colors has correct count: expected 9, found " + geo.colors.length);
    ok(geo.vertices.dimension, "vertices have dimension value");
    ok(geo.vertices.dimension == 2, "vertices have correct dimension value");
    ok(level.getGeometry(0).vertices.getVBO, "vertices has getVBO() method");
});

test( "test shaders exist", function() {
    ok(plainColor, "...");
});

test( "test shaders", function() {
    ok(gl, "gl context initialized and good to go");
    var shader = createShaderProgram(plainColor);
    ok(shader, "shader program created");
    ok(shaderDictionary["plain-color"], "Shader added to dictionary");
});

test( "test draw", function() {
    var level = getLevel("./data/testlevel.xml");
    var vertexBuffer = level.getGeometry(0).vertices.getVBO();
    ok(vertexBuffer != null, "vertices getVBO() returns not null");
    var colorBuffer = level.getGeometry(1).vertices.getVBO();
    ok(colorBuffer != null, "colors getVBO() returns not null");
    
});
