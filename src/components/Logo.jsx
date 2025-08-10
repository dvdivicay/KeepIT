import React from "react";

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 24 24" aria-hidden="true">
      {/* stylized note */}
      <path
        d="M6 3h9a3 3 0 0 1 3 3v8l-5 5H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"
        fill="currentColor"
        opacity=".95"
      />
      <path
        d="M18 14v.5a1 1 0 0 1-.29.71l-4.5 4.5A1 1 0 0 1 12.5 20H12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export default Logo;
