precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float plot (vec2 st, float pct){
    return smoothstep(pct + 0.01, pct, 1.0-st.y) - smoothstep(pct, pct - 0.01, 1.0-st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float y = st.x;
    float pct = plot(st, y);
    vec3 color = vec3(y);
    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}