var plainColor = {
    
    name: "plain-color",
    
    uniforms : {},

    attributes : [
	{
	    name: 'a_position',
	    type: 'f',
	    size: 3,
	    offset: 0,
	    location: -1
	},

	{
	    name: 'a_normal',
	    type: 'f',
	    size: 3,
	    offset: 3,
	    location: -1
	},

	{
	    name: 'a_texture',
	    type: 'f',
	    size: 2,
	    offset: 6,
	    location: -1
	}
    ],

    vertexShader : [
	'uniform sampler2D u_sampler;',
	'uniform mat4 u_m;',
	'uniform mat4 u_p;',

	'attribute vec3 a_position;',
	'attribute vec3 a_normal;',
	'attribute vec2 a_texture;',

	'varying vec4 v_color;',
	'varying vec2 v_texcoord;',

	'void main() {',
	'  v_texcoord = a_texture;',

	'  mat3 nmat = mat3(u_m);',
	'  vec3 normal = normalize(nmat * a_normal);',
	'  mat4 mp = u_p * u_m;',
	'  gl_Position = mp * vec4(a_position, 1);',

	'  vec3 lightDir = vec3(-0.5, 1.0, 1.0);',
	'  lightDir = normalize(lightDir);',

	'  float nDotL = max(dot(normal, lightDir), 0.0);',

	'  vec4 mat_ambient = vec4(0.3, 0.3, 0.3, 0.1);',
	'  vec4 ambient = vec4(0.4, 0.4, 0.4, 0.1);',
	'  vec4 diffuse = vec4(1.0, 0.8, 0.8, 0.1);',

	'  v_color = mat_ambient * ambient;',
	'  v_color += nDotL * diffuse;',
	'}' 
    ].join('\n'),
    
    fragmentShader: [
	'precision mediump float;',

	'uniform sampler2D u_sampler;',
	'uniform vec4 u_color;',

	'varying vec2 v_texcoord;',
	'varying vec4 v_color;',

	'void main() {',
	'  vec4 color = texture2D(u_sampler, v_texcoord);',
	'  gl_FragColor = color * v_color * u_color;',
	'}'
    ].join('\n')

};
