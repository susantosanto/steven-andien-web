import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!open || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center isolate">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-lg pointer-events-auto"
        onClick={() => onOpenChange?.(false)}
      />
      {/* Centered Modal Container */}
      <div className={cn(
        "relative z-10 w-full h-full flex items-center justify-center pointer-events-none px-4",
        "animate-in zoom-in-95 fade-in duration-300 ease-out"
      )}>
        <div className="w-full max-w-[400px] pointer-events-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
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