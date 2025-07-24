import React from 'react'

function Logo() {
    return (
        <div>
            <svg
                viewBox="0 0 240 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Letra L */}
                <text
                    x="20"
                    y="50"
                    className="fill-white"
                    style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        fontSize: "28px",
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                    }}
                >
                    L
                </text>

                {/* Primer corazón (primera "o") */}
                <g
                    transform="translate(32, 25) scale(1.1)"
                    className="animate-pulse"
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="url(#heartGradient)"
                    />
                </g>

                {/* Segundo corazón (segunda "o") */}
                <g
                    transform="translate(58, 25) scale(1.1)"
                    className="animate-pulse"
                >
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="url(#heartGradient)"
                    />
                </g>

                {/* Texto "vesick" */}
                <text
                    x="86"
                    y="50"
                    className="fill-white"
                    style={{
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        fontSize: "28px",
                        fontWeight: "300",
                        letterSpacing: "0.02em",
                    }}
                >
                    vesick
                </text>

                {/* Punto decorativo sobre la 'i' */}
                <circle
                    cx="175"
                    cy="30"
                    r="2"
                    fill="url(#heartGradient)"
                />

                {/* Gradiente para los corazones */}
                <defs>
                    <linearGradient
                        id="heartGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#ff6b6b" />
                        <stop offset="100%" stopColor="#ee5a52" />
                    </linearGradient>
                </defs>

                {/* Línea decorativa sutil */}
                <line
                    x1="20"
                    y1="65"
                    x2="200"
                    y2="65"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.3"
                />
            </svg>
        </div>
    )
}

export default Logo