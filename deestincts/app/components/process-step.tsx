interface ProcessStepProps {
    number: string
    title: string
    description: string
  }
  
  export function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
      <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#C3122B]/30">
        <div className="mb-4 inline-block rounded-full bg-[#C3122B]/10 px-3 py-1 text-sm font-bold text-[#C3122B]">
          {number}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    )
  }
  