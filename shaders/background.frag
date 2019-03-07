precision highp float;

varying vec2 v_position;

void main () {
    vec3 backgroundColor = vec3(0.0) - length(v_position) * 0.6;
    gl_FragColor = vec4(backgroundColor, 1.0);
}
