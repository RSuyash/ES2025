import React from "react"
import Section from "../ui/Section"
import { Instagram, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "../ui/Button"

const SocialPostMock = ({ platform, date }: { platform: "instagram" | "linkedin", date: string }) => (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center gap-3 border-b border-slate-50">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 to-purple-600' : 'bg-blue-700'}`}>
                {platform === 'instagram' ? <Instagram size={14} /> : <Linkedin size={14} />}
            </div>
            <div>
                <p className="text-xs font-bold text-slate-900">ecolenviron</p>
                <p className="text-[10px] text-slate-400">{date}</p>
            </div>
        </div>
        {/* Content Placeholder */}
        <div className="aspect-square bg-slate-50 flex items-center justify-center group relative">
            <span className="text-slate-300 text-xs">Post Content / Image</span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ExternalLink className="text-white drop-shadow-md" size={24} />
            </div>
        </div>
        {/* Footer */}
        <div className="p-4">
            <div className="h-2 w-3/4 bg-slate-100 rounded mb-2"></div>
            <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
        </div>
    </div>
)

const SocialMediaFeed = () => {
    return (
        <Section className="bg-slate-50/50">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Live from the Community</h2>
                <p className="text-slate-500">Follow the conversation <span className="text-primary font-medium">@ecolenviron</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SocialPostMock platform="instagram" date="2 days ago" />
                <SocialPostMock platform="linkedin" date="1 week ago" />
                <SocialPostMock platform="instagram" date="Previously" />
            </div>

            <div className="flex justify-center mt-10 gap-4">
                <Button variant="outline" className="gap-2">
                    <Instagram size={16} /> Follow on Instagram
                </Button>
                <Button variant="outline" className="gap-2">
                    <Linkedin size={16} /> Connect on LinkedIn
                </Button>
            </div>
        </Section>
    )
}

export default SocialMediaFeed
