


const stats = [
    { value: "250+", label: "Participants" },
    { value: "06", label: "Countries" },
    { value: "31", label: "Indian States" },
    { value: "15+", label: "Guest Speakers" },
]

const SocialProof = () => {
    return (
        <div className="bg-slate-900 text-white py-12 border-y border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4">
                            <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-primary uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SocialProof
