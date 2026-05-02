import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange?.(false)}
      />
      {/* Sheet content - centered modal */}
      <div className={cn(
        "relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-200"
      )}>
        {children}
      </div>
    </div>
  )
}

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-gray-900", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { side?: 'left' | 'right' }
>(({ className, side = 'right', ...props }, ref) => {
  const sideClasses = {
    left: 'animate-in slide-in-from-left',
    right: 'animate-in slide-in-from-right',
  }

  return (
    <div
      ref={ref}
      className={cn("flex-1", sideClasses[side], className)}
      {...props}
    />
  )
})
SheetContent.displayName = "SheetContent"

// SheetTrigger component
const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

export { Sheet, SheetHeader, SheetTitle, SheetContent, SheetTrigger }