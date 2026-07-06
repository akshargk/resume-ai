import {
    FileText,
    Bot,
    ChartColumn,
    Zap,
    Target,
    TrendingUp
} from "lucide-react";

function Features(){
    return(
        <section
            id="features"
            className="
                px-20
                py-24
                bg-white
            "
        >   
            {/* Heading */}
            <h2
                className="
                        text-center
                        max-w-2xl
                        mx-auto
                        text-4xl
                        font-bold
                        text-gray-900
                "
            >
                Powerful Features
            </h2>
            <p
                className="
                    text-center
                    max-w-2xl
                    mx-auto 
                    mt-4
                    text-gray-500                   
                    text-lg
                " 
            >
                Everything you need to create a job-winning resume using AI-powered insights.
            </p>
            
            {/* Grid */}
            <div
                className="
                    mt-16
                    grid
                    grid-cols-3
                    gap-8
                "
            >
                {/* 1st Feature Card */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-yellow-200
                        cursor-pointer
                    "
                >
                    {/* Icon File */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-yellow-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <FileText
                            className="
                                h-6
                                w-6
                                text-yellow-600
                            "
                        />
                    </div>

                    {/* Card Title File */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        ATS Resume Analysis
                    </h3>

                    {/* Card Description File */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Check how well your resume performs with Applicant Tracking Systems.
                    </p>
                </div>

                {/* 2nd Feature Card bot */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-purple-200
                        cursor-pointer
                    "
                >

                    {/* Icon Bot */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-purple-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <Bot
                            className="
                                h-6
                                w-6
                                text-purple-600
                            "
                        />
                    </div>

                    {/* Card Title bot */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        AI Feedback
                    </h3>

                    {/* Card Description bot */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Receive personalized suggestions to improve your resume's content, structure, and readability.
                    </p>
                </div>

                {/* 3rd Feature Card Chart-column */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-blue-200
                        cursor-pointer
                    "
                >

                    {/* Icon Chart-column */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-blue-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <ChartColumn
                            className="
                                h-6
                                w-6
                                text-blue-600
                            "
                        />
                    </div>

                    {/* Card Title Chart-column */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        Resume Scoring
                    </h3>

                    {/* Card Description Chart-column */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Get an overall resume score based on formatting, keywords, and industry best practices.
                    </p>
                </div>

                {/* 4th Feature Card Zap */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-orange-200
                        cursor-pointer
                    "
                >

                    {/* Icon Zap */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-orange-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <Zap
                            className="
                                h-6
                                w-6
                                text-orange-600
                            "
                        />
                    </div>

                    {/* Card Title Zap */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        Instant Analysis
                    </h3>

                    {/* Card Description Zap */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Upload your resume and receive detailed AI insights in just a few seconds.
                    </p>
                </div>

                {/* 5th Feature Card Target */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-green-200
                        cursor-pointer
                    "
                >

                    {/* Icon Target */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-green-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <Target
                            className="
                                h-6
                                w-6
                                text-green-600
                            "
                        />
                    </div>

                    {/* Card Title Target */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        Keyword Optimization
                    </h3>

                    {/* Card Description Target */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Identify missing keywords and optimize your resume to improve ATS compatibility.
                    </p>
                </div>

                {/* 6th Feature TrendingUp */}
                <div
                    className="
                        group
                        rounded-3xl
                        border
                        border-gray-100
                        shadow-lg
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:border-teal-200
                        cursor-pointer
                    "
                >

                    {/* Icon TrendingUp */}
                    <div
                        className="
                            h-12
                            w-12
                            rounded-full
                            bg-teal-100
                            flex
                            items-center
                            justify-center
                            mb-6
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <TrendingUp
                            className="
                                h-6
                                w-6
                                text-teal-600
                            "
                        />
                    </div>

                    {/* Card Title TrendingUp */}
                    <h3
                        className="
                            text-xl
                            font-semibold
                            text-gray-900
                        "
                    >
                        Career Insights
                    </h3>

                    {/* Card Description TrendingUp */}
                    <p
                        className="
                            mt-3
                            text-gray-600
                            leading-7
                        "
                    >
                        Discover in-demand skills and recommendations to strengthen your professional profile.
                    </p>
                </div>
            </div>

        </section>
    )}

export default Features;