import React from "react";

export const Tool = ({ children }: { children: React.ReactNode }) => (
  <span
    className="tools"
    style={{
      backgroundColor: `var(--accent-color)`,
      padding: `1px 8px`,
      borderRadius: `3px`,
      margin: `0 3px`,
      fontSize: `0.95rem`,
      fontWeight: `bold`,
    }}
  >
    {children}
  </span>
);
