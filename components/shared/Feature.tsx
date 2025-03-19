import { Zap, LayoutTemplate, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Transform text into structured mind maps instantly with our advanced AI engine.",
    },
    {
      icon: LayoutTemplate,
      title: "Custom Templates",
      description: "Choose from dozens of professional templates or create your own unique style.",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, share and edit mind maps simultaneously.",
    },
  ]

  return (
    <section className="w-full flex justify-center items-center py-10 bg-white px-8 lg:px-22">
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features for Seamless Mind Mapping
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everything you need to organize your thoughts and ideas effectively
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 ">
          {features.map((Feature, index) => (
            <div key={index} className="flex flex-col items-start gap-4 text-left border rounded-lg p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                <Feature.icon className="h-6 w-6 text-[#4F46E5]" />
              </div>
              <h3 className="text-xl font-semibold">{Feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{Feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

