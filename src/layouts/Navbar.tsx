"use client"

import { allViews, views } from "@/data/navbarLinks";
import { IonIcon } from "@ionic/react";
import { sunnyOutline, moonOutline } from "ionicons/icons";

type Props = {
  toggleTheme: () => void;
  theme: string;
  toggleView: (view: allViews) => void;
};

export default function Navbar({ toggleTheme, theme, toggleView }: Props) {
  const changeView = (view: allViews) => {
    toggleView(view);
  };
  return (
    <nav className="nav bg-inverse">
      <div className="nav-icons">
        {Object.keys(views).map((i: string, index: number) => {
          let view = i as allViews | "HOME";
          let viewDetails = views[view];
          return (
            <span
              className="clr-inverse"
              key={index}
              onClick={() => {
                changeView(view);
              }}
            >
              <IonIcon icon={viewDetails.icon} />
            </span>
          );
        })}
        <span className="themeChange clr-inverse" onClick={toggleTheme}>
          <IonIcon icon={theme === "light" ? sunnyOutline : moonOutline} />
        </span>
      </div>
    </nav>
  );
}
