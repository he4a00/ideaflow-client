export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Input Your Ideas",
      description: "Type your thoughts or upload existing documents to get started.",
    },
    {
      number: "2",
      title: "AI Processing",
      description: "Our AI analyzes and organizes your content into logical connections.",
    },
    {
      number: "3",
      title: "Customize & Share",
      description: "Refine your mind map, add personal touches, and share with others.",
    },
  ]

  return (
    <section className="flex justify-center items-center py-20 bg-[#E5E7EB] w-full">
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Create professional mind maps in three simple steps
          </p>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3 lg:gap-16 max-w-5xl">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                <span className="text-lg font-semibold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

