import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with Zod before sending if possible, but API client usually handles this too
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid form data");
        }
        throw new Error('Failed to submit inquiry');
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. Vimalbhai will get back to you shortly.",
        variant: "default", 
        className: "bg-primary text-primary-foreground border-primary/20",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try calling us instead.",
        variant: "destructive",
      });
    },
  });
}
