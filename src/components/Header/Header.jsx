import React from "react";
import Logo from "../Logo";
import "./header.css";

export default function Header({ onNew, onSearch }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand">
          <Logo />
          <span className="brand-name">Keep It</span>
        </div>

        <div className="header-actions">
          <button
            className="header-btn new-note"
            onClick={() => onNew?.()}
            title="New note"
            aria-label="New note"
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="btn-text">New</span>
          </button>

          <button className="avatar" aria-label="Account">
            <span>J</span>
          </button>
        </div>
      </div>
    </header>
  );
}
