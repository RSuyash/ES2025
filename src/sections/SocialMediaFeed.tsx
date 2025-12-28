
import Section from "../components/ui/Section"
import { Instagram, Linkedin } from "lucide-react"
import { Button } from "../components/ui/Button"


import { useEffect } from "react"

const SocialMediaFeed = () => {
    // Load Instagram Embed Script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <Section className="bg-slate-50/50">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Live from the Community</h2>
                <p className="text-slate-500">Follow the conversation <span className="text-primary font-medium">@ecolenviron</span></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
                {/* 1. Instagram Post - @ecolenviron */}
                <div className="flex justify-center bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden h-[550px] overflow-y-auto custom-scrollbar">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/C3ZDEG1KwXO/?utm_source=ig_embed&amp;utm_campaign=loading"
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: 'none', margin: '0', maxWidth: '540px', minWidth: '326px', padding: 0, width: 'calc(100% - 2px)' }}
                    >
                        {/* Instagram embed content requires this div structure */}
                        <div style={{ padding: '16px' }}>
                            <a href="https://www.instagram.com/p/C3ZDEG1KwXO/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank">
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                    </div>
                                </div>
                                <div style={{ padding: '19% 0' }}></div>
                                <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                                    {/* SVG Icon omitted for brevity, will be loaded by script */}
                                </div>
                                <div style={{ paddingTop: '8px' }}>
                                    <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>View this post on Instagram</div>
                                </div>
                                <div style={{ padding: '12.5% 0' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                                    {/* Decoration divs */}
                                    <div> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }}></div> <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: '14px', marginLeft: '2px' }}></div> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }}></div></div><div style={{ marginLeft: '8px' }}> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '20px', width: '20px' }}></div> <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div></div><div style={{ marginLeft: 'auto' }}> <div style={{ width: '0px', borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div> <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: '12px', width: '16px', transform: 'translateY(-4px)' }}></div> <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div></div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '224px' }}></div>
                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '144px' }}></div>
                                </div>
                            </a>
                            <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                <a href="https://www.instagram.com/p/C3ZDEG1KwXO/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank">A post shared by Dept of Environmental Studies, MIT-WPU (@ecolenviron)</a>
                            </p>
                        </div>
                    </blockquote>
                </div>

                {/* 2. LinkedIn Post - MIT WPU Official */}
                <div className="flex justify-center bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden h-[541px]">
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406672939456049152?collapsed=1"
                        height="541"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded post"
                        className="w-full min-w-[320px] max-w-[504px]"
                    />
                </div>

                {/* 3. LinkedIn Post - Ecol Environ */}
                <div className="flex justify-center bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden h-[566px]">
                    <iframe
                        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7330114460591845377?collapsed=1"
                        height="566"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Embedded post"
                        className="w-full min-w-[320px] max-w-[504px]"
                    />
                </div>
            </div>

            <div className="flex justify-center mt-12 gap-4">
                <Button variant="outline" className="gap-2" onClick={() => window.open('https://www.instagram.com/ecolenviron', '_blank')}>
                    <Instagram size={16} /> Follow on Instagram
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => window.open('https://www.linkedin.com/in/ecol-environ', '_blank')}>
                    <Linkedin size={16} /> Connect on LinkedIn
                </Button>
            </div>
        </Section>
    )
}

export default SocialMediaFeed
