import { Button } from "../ui/button";
import { handleCTA } from "../ui/navbar";
import cn from "classnames";
type TypeProps = {
  type: string;
};

export default function MainCTAButton({ type = "default" }: TypeProps) {
  let buttonClass = "";
  switch (type) {
    case "default":
      buttonClass = "bg-primary text-primary-foreground hover:bg-sky-600";
      break;
    case "secondary":
      buttonClass = "bg-accent text-foreground";
      break;
  }
  return (
    <div>
      <Button variant="default" className={cn(buttonClass)} onClick={handleCTA}>
        Get Initial Consult Free
      </Button>
    </div>
  );
}
