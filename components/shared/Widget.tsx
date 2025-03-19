import { Button } from "@/components/ui/button"

export default function Widget() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#4F46E5]/90 h-[370px]">
      <div className="px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Ideas?
          </h2>
          <p className=" max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join thousands of users who are already creating amazing mind maps with AI. Start your free trial today!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] bg-transparent text-white border-white hover:bg-white hover:text-[#6366F1]"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

