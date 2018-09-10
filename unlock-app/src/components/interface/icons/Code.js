import React from 'react'

const Code = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <circle id="a" cx={12} cy={12} r={12} />
      <path
        id="c"
        d="M15.9 7.224l-3.331 3.668a.332.332 0 0 1-.47.022.334.334 0 0 1-.023-.47L15.202 7l-3.126-3.442a.334.334 0 0 1 .493-.448l3.33 3.665a.334.334 0 0 1 0 .45zm-9.586 6.538a.333.333 0 1 1-.638-.191L9.672.237a.334.334 0 0 1 .638.191L6.314 13.763zm-2.427-2.849a.331.331 0 0 1-.47-.022L.087 7.225a.334.334 0 0 1 0-.449l3.33-3.667a.333.333 0 0 1 .493.448L.783 7.001l3.127 3.441a.334.334 0 0 1-.023.471z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#EEE" xlinkHref="#a" />
      <g fill="#EEE" mask="url(#b)">
        <path d="M0 0h24v24H0z" />
      </g>
      <g transform="translate(4 5)">
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use
          fill="#A6A6A6"
          stroke="#979797"
          strokeWidth={0.25}
          xlinkHref="#c"
        />
        <g fill="#A6A6A6" mask="url(#d)">
          <path d="M-4-5h24v24H-4z" />
        </g>
      </g>
    </g>
  </svg>
)

export default Code