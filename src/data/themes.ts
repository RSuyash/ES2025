export interface SubTrack {
    title: string;
    topics: string[];
}

export interface Theme {
    id: string;
    title: string;
    description: string;
    icon: string;
    palette: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    tracks: SubTrack[];
}

export const themes: Theme[] = [
    {
        id: "sustainable-cities",
        title: "Sustainable Cities, Communities & Resilient Futures",
        description: "Reimagining urban spaces for inclusivity, resilience, and environmental harmony in a rapidly urbanizing world.",
        icon: "Building2",
        palette: {
            primary: "#0ea5e9", // Sky Blue 500
            secondary: "#0f172a", // Slate 900
            accent: "#38bdf8", // Sky 400
            background: "#f0f9ff" // Sky 50
        },
        tracks: [
            {
                title: "Urban Planning & Design",
                topics: [
                    "Sustainable Urban Development Strategies",
                    "Climate-Resilient Urban Design",
                    "Green Infrastructure & Urban Greening",
                    "Blue Infrastructure & Water Resilience",
                    "Sustainable Neighborhood Design",
                    "Inclusive Design & Planning",
                    "Urban-Rural Linkages",
                    "Future Cities & New Urban Models"
                ]
            },
            {
                title: "Smart Cities & Digital Transformation",
                topics: [
                    "Smart Infrastructure & IoT",
                    "AI & Big Data in Urban Planning",
                    "Digital Twins & GIS Modeling",
                    "Digital Governance & Citizen Engagement",
                    "Cybersecurity in Smart Cities",
                    "Smart Energy Systems"
                ]
            },
            {
                title: "Circular Economy in Cities",
                topics: [
                    "Circular Urbanism",
                    "Waste Management Innovations",
                    "Resource Efficiency Strategies",
                    "Circular Design & Materials",
                    "Industrial Ecology & Symbiosis",
                    "Urban Metabolism Analysis"
                ]
            },
            {
                title: "Social Equity & Well-being",
                topics: [
                    "Equitable Urban Development",
                    "Community-Led Planning",
                    "Social Justice & Right to the City",
                    "Urban Health & Mental Well-being",
                    "Food Security & Urban Agriculture",
                    "Migrant-Friendly Cities"
                ]
            }
        ]
    },
    {
        id: "biodiversity",
        title: "Biodiversity, Ecosystems & Nature-based Solutions",
        description: "Protecting the web of life and harnessing nature's wisdom to solve complex societal challenges.",
        icon: "Leaf",
        palette: {
            primary: "#15803d", // Green 700
            secondary: "#064e3b", // Emerald 900
            accent: "#4ade80", // Green 400
            background: "#f0fdf4" // Green 50
        },
        tracks: [
            {
                title: "Biodiversity Foundations",
                topics: [
                    "Species, Genetic & Ecosystem Diversity",
                    "Biodiversity in Urban/Marine Biomes",
                    "Ecosystem Functioning & Stability",
                    "Ecosystem Services Valuation",
                    "Impacts of Biodiversity Loss"
                ]
            },
            {
                title: "Nature-based Solutions (NbS)",
                topics: [
                    "NbS for Climate Mitigation",
                    "Ecosystem-based Adaptation (EbA)",
                    "Disaster Risk Reduction via Nature",
                    "Water Security & Natural Purification",
                    "Agroecology & Sustainable Farming",
                    "Green Prescribing & Nature Therapy"
                ]
            },
            {
                title: "Conservation & Restoration",
                topics: [
                    "Ecosystem Restoration Standards",
                    "Protected Areas & OBCMs",
                    "Blue Carbon Ecosystems",
                    "Invasive Species Management",
                    "Rewilding Strategies",
                    "Coral Reef & Wetland Conservation"
                ]
            },
            {
                title: "Governance & Finance",
                topics: [
                    "IUCN Global Standard for NbS",
                    "Biodiversity Finance & Green Bonds",
                    "Indigenous Knowledge & Rights",
                    "Participatory Monitoring (eDNA, GIS)",
                    "Mainstreaming Biodiversity Policy"
                ]
            }
        ]
    },
    {
        id: "climate-policy",
        title: "Climate Change, Policy & Environmental Governance",
        description: "Navigating the legal, political, and ethical frameworks necessary for global climate action.",
        icon: "Scale",
        palette: {
            primary: "#b45309", // Amber 700
            secondary: "#451a03", // Amber 950
            accent: "#f59e0b", // Amber 500
            background: "#fffbeb" // Amber 50
        },
        tracks: [
            {
                title: "Global & Regional Governance",
                topics: [
                    "Paris Agreement Implementation",
                    "International Climate Accords",
                    "Multi-level Governance Frameworks",
                    "Climate Diplomacy & Geopolitics",
                    "Cross-border Environmental Law",
                    "Global Stocktake Assessment"
                ]
            },
            {
                title: "Justice & Ethics",
                topics: [
                    "Climate Justice & Equity",
                    "Intergenerational Equity",
                    "Just Transition Frameworks",
                    "Climate Migration & Displacement",
                    "Indigenous Rights in Climate Action",
                    "North-South Climate Dialogue"
                ]
            },
            {
                title: "Policy Mechanisms",
                topics: [
                    "Carbon Pricing & Trading Systems",
                    "Green Finance & Investment Policy",
                    "Regulatory Frameworks for Net-Zero",
                    "Sub-national Climate Action Plans",
                    "Corporate Climate Accountability",
                    "Loss and Damage Mechanisms"
                ]
            },
            {
                title: "Adaptation Governance",
                topics: [
                    "National Adaptation Plans (NAPs)",
                    "Resilience Policy for Vulnerable Zones",
                    "Disaster Risk Governance",
                    "Public Health & Climate Policy",
                    "Adaptive Governance Models",
                    "Community-based Adaptation Policy"
                ]
            }
        ]
    },
    {
        id: "green-innovation",
        title: "Green Innovation, Technology & Sustainable Transitions",
        description: "Accelerating the shift to a sustainable future through breakthrough technologies and systemic innovation.",
        icon: "Lightbulb",
        palette: {
            primary: "#65a30d", // Lime 600
            secondary: "#1a2e05", // Lime 950
            accent: "#84cc16", // Lime 500
            background: "#f7fee7" // Lime 50
        },
        tracks: [
            {
                title: "Energy Transition",
                topics: [
                    "Next-Gen Renewable Technologies",
                    "Green Hydrogen & Fuel Cells",
                    "Smart Grids & Energy Storage",
                    "Decarbonization of Industry",
                    "Off-grid Energy Solutions",
                    "Nuclear Fusion & Advanced Fission"
                ]
            },
            {
                title: "Circular Tech & Materials",
                topics: [
                    "Bio-based & Biodegradable Materials",
                    "Waste-to-Energy Technologies",
                    "Advanced Recycling Processes",
                    "Circular Design Software",
                    "Critical Mineral recovery",
                    "Industrial Symbiosis Platforms"
                ]
            },
            {
                title: "Digital Sustainability",
                topics: [
                    "AI for Climate Modelling",
                    "Blockchain for Supply Chain Transparency",
                    "IoT for Resource Optimization",
                    "Green Computing & Data Centers",
                    "Digital Product Passports",
                    "Remote Sensing & Earth Observation"
                ]
            },
            {
                title: "Innovation Ecosystems",
                topics: [
                    "Green Startups & Incubation",
                    "Technology Transfer Mechanisms",
                    "Sustainable Business Models",
                    "Intellectual Property in Green Tech",
                    "Frugal Innovation for Global South",
                    "Corporate Eco-Innovation Strategies"
                ]
            }
        ]
    }
];
