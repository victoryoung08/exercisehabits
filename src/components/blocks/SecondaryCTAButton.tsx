import { Button } from "../ui/button";
import { handleCTA } from "../ui/navbar";
import cn from "classnames";

type TypeProps = {
  style?: string;
  text?: string;
  type: string;
};

export default function SecondaryCTAButton({
  style = "secondary",
  text = "Get Initial Consult Free",
  type,
}: TypeProps) {
  let buttonClass = "";
  switch (style) {
    case "default":
      buttonClass = "bg-primary text-primary-foreground hover:bg-sky-600";
      break;
    case "secondary":
      buttonClass = "bg-accent text-foreground border-stone-300 border-[0.8px]";
      break;
  }

  return (
    <div>
      {type === "telephone" && (
        <Button variant="secondary" className={cn(buttonClass)}>
          <a href="tel:0406643290">Give us a Call</a>
        </Button>
      )}
      {type === "default" && (
        <Button
          variant="default"
          className={cn(buttonClass)}
          onClick={handleCTA}
        >
          {text}
        </Button>
      )}
    </div>
  );
}
