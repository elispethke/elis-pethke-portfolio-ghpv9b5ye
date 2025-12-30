import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { content } from '@/data/content'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
})

export const ContactSection = () => {
  const { contact } = content
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({
        title: contact.success,
        className: 'bg-green-50 border-green-200 text-green-900',
      })
      form.reset()
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {contact.title}
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden transition-all hover:shadow-2xl hover:bg-white/60 dark:hover:bg-black/30">
          {isSuccess && (
            <div className="absolute inset-0 z-10 bg-background/80 flex items-center justify-center backdrop-blur-sm animate-fade-in">
              <div className="flex flex-col items-center gap-4 text-green-600">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-75"></div>
                  <CheckCircle2 className="w-16 h-16 relative z-10" />
                </div>
                <h3 className="text-2xl font-bold animate-fade-in-up">
                  Thank You!
                </h3>
                <p className="text-foreground animate-fade-in-up delay-100">
                  Your message has been received.
                </p>
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contact.name}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="bg-white/50 dark:bg-black/20 focus:ring-accent transition-all duration-300 focus:scale-[1.01]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contact.email}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        {...field}
                        className="bg-white/50 dark:bg-black/20 focus:ring-accent transition-all duration-300 focus:scale-[1.01]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contact.message}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        className="min-h-[150px] bg-white/50 dark:bg-black/20 focus:ring-accent resize-none transition-all duration-300 focus:scale-[1.01]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-12 rounded-xl transition-all duration-300 relative overflow-hidden group"
                disabled={isSubmitting || isSuccess}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      {contact.send} <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isSubmitting && (
                  <Sparkles className="absolute right-4 animate-spin" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
