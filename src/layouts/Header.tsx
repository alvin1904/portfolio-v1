import { allViews } from "@/data/navbarLinks";

type Props = {
  view: string;
  toggleView: (view: allViews) => void;
};

export default function Header({ view, toggleView }: Props) {
  const goHome = () => toggleView("HOME");
  return (
    <div className="header bg">
      <span onClick={goHome}>alvinvarghese.me</span>/{view}
    </div>
  );
}
