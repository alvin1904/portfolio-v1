import React from "react";
import styles from "../../app/styles/Projects.module.css";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.details + " spacer"}>{children}</div>;
}
