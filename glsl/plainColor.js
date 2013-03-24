var simpleShader = {

    uniforms : {},

    attributes : [
	{
	    name: 'a_position',
	    type: 'f',
	    size: 2,
	    location: -1
	},
	{
	    name: 'a_color',
	    type: 'f',
	    size: 3,
	    location: -1
	}
    ],

    vertexShader : [
	'attribute vec2 a_position;',
	'attribute vec3 a_color;',
	'varying vec3 v_color;',
	'void main() {',
	'gl_Position = vec4(a_position, 0, 1);',
	'v_color = a_color;',
	'}' 
    ].join('\n'),
    
    fragmentShader: [
	'precision mediump float;',
	'varying vec3 v_color;',
	'void main() {',
	'gl_FragColor = vec4(v_color, 1.0);',
	'}'
    ].join('\n')

};

