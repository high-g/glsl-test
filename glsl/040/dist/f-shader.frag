precision mediump float;

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.149, 1.141, 0.912);
vec3 colorB = vec3(1.0, 0.833, 0.224);

float plot(vec2 st, float pct) {
    return smoothstep(pct-0.01, pct, st.y) - smoothstep(pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec3 pct = vec3(st.x);//abs(sin(u_time));
    color = mix(colorA, colorB, pct);

    color = mix(color, vec3(1.0, 0.0, 0.0), plot(st, pct.r));

    gl_FragColor = vec4(color, 1.0);
}