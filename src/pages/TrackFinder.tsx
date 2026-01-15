import { useState } from 'react';
import { analyzeAbstract, type AnalysisResult } from '../lib/gemini';
import { themes } from '../data/themes';
import { Bot, Sparkles, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackFinder = () => {
    const [abstract, setAbstract] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const handleAnalyze = async () => {
        if (abstract.length < 50) return;
        setLoading(true);
        try {
            const data = await analyzeAbstract(abstract);
            setResult(data);
        } catch (e) {
            alert("AI Service is busy or Key is missing. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const selectedTheme = result ? themes.find(t => t.id === result.bestTrackId) : null;

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-4">
                        <Sparkles size={16} /> AI Research Advisor
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
                        Find Your Perfect Track
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                        Not sure where your research fits? Paste your abstract below, and our AI will match you with the right conference theme and give you tips to improve your acceptance odds.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column: Input */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Your Abstract / Research Idea
                        </label>
                        <textarea
                            value={abstract}
                            onChange={(e) => setAbstract(e.target.value)}
                            placeholder="Paste your abstract here (approx 200-300 words)..."
                            className="w-full h-64 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all text-slate-700 font-light"
                        />
                        <div className="mt-4 flex justify-between items-center">
                            <span className={`text-xs ${abstract.length < 50 ? 'text-amber-500' : 'text-slate-400'}`}>
                                {abstract.length < 50 ? 'Minimum 50 characters required' : `${abstract.length} characters`}
                            </span>
                            <button
                                onClick={handleAnalyze}
                                disabled={loading || abstract.length < 50}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-200"
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : <Bot size={18} />}
                                {loading ? 'Analyzing...' : 'Find My Track'}
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Results */}
                    <div className="space-y-6">
                        {!result && !loading && (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                                <Bot size={48} className="mb-4 opacity-20" />
                                <p>Results will appear here</p>
                            </div>
                        )}

                        {loading && (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-indigo-600 bg-white rounded-2xl shadow-sm border border-indigo-100">
                                <Loader2 size={48} className="mb-4 animate-spin" />
                                <p className="font-medium animate-pulse">Consulting the committee...</p>
                            </div>
                        )}

                        {result && selectedTheme && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-2xl shadow-xl border-t-4 overflow-hidden"
                                style={{ borderColor: selectedTheme.palette.primary }}
                            >
                                <div className="p-6">
                                    {/* Match Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Recommended Track</span>
                                            <h3 className="text-2xl font-bold text-slate-900 mt-1">{selectedTheme.title}</h3>
                                            <div className="inline-block mt-2 px-3 py-1 rounded-lg text-sm font-semibold bg-slate-100 text-slate-700">
                                                {result.bestSubTrackTitle}
                                            </div>
                                        </div>
                                        <div className="text-center bg-green-50 px-4 py-2 rounded-xl">
                                            <div className="text-3xl font-black text-green-600">{result.matchScore}%</div>
                                            <div className="text-[10px] font-bold uppercase text-green-700">Match</div>
                                        </div>
                                    </div>

                                    {/* Reasoning */}
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                                        <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                                            <Bot size={16} className="text-indigo-600" /> Why this track?
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {result.reasoning}
                                        </p>
                                    </div>

                                    {/* Suggestions */}
                                    <div className="mb-8">
                                        <h4 className="font-bold text-slate-800 text-sm mb-3">Improvement Suggestions</h4>
                                        <ul className="space-y-3">
                                            {result.suggestions.map((s, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-slate-600">
                                                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="text-center">
                                        <button
                                            onClick={() => window.location.href = '#participate'} // Simple anchor link for now, could be smarter
                                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                                        >
                                            Proceed to Submission <ArrowRight size={16} />
                                        </button>
                                        <p className="text-xs text-slate-400 mt-2">
                                            Use the "Submit Abstract" button on the main page with these insights.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackFinder;
