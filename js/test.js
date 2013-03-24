test( "controlTest", function() {
    ok(true, "Always true.");
});

test( "getLevel()", function() {
    level = getLevel("./data/notalevel.xml");
    ok(level == null, "unsuccessful load");
    level = getLevel("./data/testlevel.xml");
    ok(level != null, "successful load");
    ok(level.geometryCount, "geometry count exists");
    geoCount = level.geometryCount;
    ok(geoCount == 2, "geometry count correct");
    ok(level.getGeometry, "getGeometry() implemented");
    geo = level.getGeometry(0);
    ok(geo != null, "getGeometry() returns not null");
    ok(geo.vertices != null, "geometry vertices exists");
    ok(geo.vertices.length == 6, "geometry vertices has correct count: expected 6, found " + geo.vertices.length);
    ok(geo.colors, "geometry colors exists");
    ok(geo.colors.length == 9, "geometry colors has correct count: expected 9, found " + geo.colors.length);
});
