import * as React from "react"
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils"

// Main Accordion Context
const AccordionContext = React.createContext<{
  type: "single" | "multiple";
  value: string;
  onValueChange: (value: string) => void;
}>({
  type: "single",
  value: "",
  onValueChange: () => {},
});

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single" | "multiple";
    value?: string;
    onValueChange?: (value: string) => void;
  }
>(({ className, type = "single", value = "", onValueChange = () => {}, ...props }, ref) => (
  <AccordionContext.Provider value={{ type, value, onValueChange }}>
    <div ref={ref} className={cn("w-full", className)} {...props} />
  </AccordionContext.Provider>
));
Accordion.displayName = "Accordion";

// Item Context - provides item value to its children
const ItemContext = React.createContext<{ itemValue: string }>({ itemValue: "" });

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context.value === value;

  return (
    <ItemContext.Provider value={{ itemValue: value }}>
      <div
        ref={ref}
        className={cn("border-b", className)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      />
    </ItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(ItemContext);
  const [isOpen, setIsOpen] = React.useState(context.value === itemContext.itemValue);

  React.useEffect(() => {
    setIsOpen(context.value === itemContext.itemValue);
  }, [context.value, itemContext.itemValue]);

  const handleClick = () => {
    context.onValueChange(
      context.value === itemContext.itemValue ? "" : itemContext.itemValue
    );
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen ? "rotate-180" : ""
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(ItemContext);
  const [isOpen, setIsOpen] = React.useState(context.value === itemContext.itemValue);

  React.useEffect(() => {
    setIsOpen(context.value === itemContext.itemValue);
  }, [context.value, itemContext.itemValue]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            ref={ref}
            className={cn("overflow-hidden text-sm", className)}
            {...props}
          >
            <div className="pb-4 pt-0">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };