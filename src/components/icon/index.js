import React from "react";

export function Icon({
  path,
  w = "w-6",
  h = "h-6",
  size = null,
  className = "",
  children,
}) {
  const iconSize = size ?? 16;

  return (
    <span
      className={`inline-flex justify-center items-center ${w} ${h} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width={iconSize}
        height={iconSize}
        className="inline-block"
      >
        <path fill="currentColor" d={path} />
      </svg>
      {children}
    </span>
  );
}

export const UzbFlag = () => {
  return (
    <div>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 rounded-full me-2"
        viewBox="0 0 32 32"
      >
        <path fill="#fff" d="M1 11H31V21H1z"></path>
        <path
          d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          fill="#4498b3"
        ></path>
        <path
          d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          transform="rotate(180 16 24)"
          fill="#55b44b"
        ></path>
        <path fill="#be2a2c" d="M1 12H31V13H1z"></path>
        <path fill="#be2a2c" d="M1 19H31V20H1z"></path>
        <path
          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
          opacity=".15"
        ></path>
        <path
          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
          fill="#fff"
          opacity=".2"
        ></path>
        <path
          d="M7.417,6.51c-.127-.021-.257-.033-.39-.033-1.291,0-2.338,1.047-2.338,2.338s1.047,2.338,2.338,2.338c.133,0,.263-.012,.39-.033-1.105-.186-1.948-1.146-1.948-2.305s.843-2.119,1.948-2.305Z"
          fill="#fff"
        ></path>
        <path
          fill="#fff"
          d="M9.741 10.181L9.564 9.635 9.387 10.181 8.813 10.181 9.277 10.518 9.1 11.063 9.564 10.726 10.028 11.063 9.851 10.518 10.315 10.181 9.741 10.181z"
        ></path>
        <path
          fill="#fff"
          d="M12.899 10.181L12.722 9.635 12.544 10.181 11.971 10.181 12.435 10.518 12.258 11.063 12.722 10.726 13.186 11.063 13.009 10.518 13.473 10.181 12.899 10.181z"
        ></path>
        <path
          fill="#fff"
          d="M12.722 6.477L12.544 7.023 11.971 7.023 12.435 7.36 12.258 7.905 12.722 7.568 13.186 7.905 13.009 7.36 13.473 7.023 12.899 7.023 12.722 6.477z"
        ></path>
      </svg>
    </div>
  );
};

export const RuFlag = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 rounded-full me-2"
        viewBox="0 0 32 32"
      >
        <path fill="#1435a1" d="M1 11H31V21H1z"></path>
        <path
          d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          fill="#fff"
        ></path>
        <path
          d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
          transform="rotate(180 16 24)"
          fill="#c53a28"
        ></path>
        <path
          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
          opacity=".15"
        ></path>
        <path
          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
          fill="#fff"
          opacity=".2"
        ></path>
      </svg>
    </div>
  );
};



export const Burger = () => {
  return (
    <div><svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg></div>
  )
}

export const Arrow = () => {
  return (
    <div><svg
    width="17.000000"
    height="14.000000"
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <path
      id="Stroke 1"
      d="M15.75 6.22L0.75 6.22"
      stroke="#25324B"
      stroke-opacity="1.000000"
      stroke-width="2.000000"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
    <path
      id="Stroke 3"
      d="M9.7 0.2L15.75 6.22L9.7 12.25"
      stroke="#25324B"
      stroke-opacity="1.000000"
      stroke-width="2.000000"
      stroke-linejoin="round"
      stroke-linecap="round"
    />
  </svg></div>
  )
}
