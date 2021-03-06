precision mediump float;

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1.0);

//    float left = step(0.1, st.x);
//    float right = step(0.1, 1.0 - st.x);
//    float top = step(0.1, 1.0 - st.y);
//    float bottom = step(0.1, st.y);

    vec2 bl = smoothstep(0.1, st.x, vec2(0.4, 0.9));
    vec2 tr = smoothstep(0.1, st.x, vec2(0.4, 0.5));

    color = vec3(bl.x * bl.y * tr.x * tr.y);

    gl_FragColor = vec4(color, 1.0);
}