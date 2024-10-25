import * as ToastPrimitive from '@radix-ui/react-toast';

interface ToastProps {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Toast: React.FC<ToastProps> = ({ title, description, open, onOpenChange }) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="bg-white border rounded-md p-4 shadow-md flex items-center gap-2"
      >
        <ToastPrimitive.Title className="font-bold text-lg">{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description>{description}</ToastPrimitive.Description>
        <ToastPrimitive.Action asChild altText="Close notifications"></ToastPrimitive.Action>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed top-0 right-0 m-4 flex flex-col gap-2" />
    </ToastPrimitive.Provider>
  );
};

export default Toast;
