import { 
    Upload,
    Bot, 
    CheckCircle,  
} from "lucide-react";

function HowItWorks() {
  return (
    <section
        className="
            bg-white
            px-6 
            py-24
      "
    >
      <div 
          className="
                mx-auto
                max-w-7xl
        "
      >
        {/* Heading */}
        <h2 
            className="
                text-center 
                text-4xl 
                font-bold 
                text-stone-900
          "
        >
          How ResumeAI Works
        </h2>
        {/* Description */}
        <p 
          className="
                mx-auto 
                mt-4 
                max-w-2xl 
                text-center 
                text-lg 
                text-stone-500
          "
        >
          Get your resume analyzed in three simple steps and receive personalized AI powered feedback in seconds.
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
            {/* 1st grid */}
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
                {/* Icon Upload */}
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
                  <Upload 
                        className="
                              h-6
                              w-6
                              text-yellow-600
                    "
                  />
                </div>
                
                  {/* Grid Title Upload */}
                  <h3
                    className="
                          text-xl
                          font-semibold
                          text-gray-900
                    "
                  >
                    Upload Resume
                  </h3>

                  {/* Grid Description Bot */}
                  <p
                      className="
                            mt-3
                            text-gray-600
                            leading-7
                    "
                  >
                    Upload your resume securely in PDF format and let our AI begin the analysis.
                  </p>      
            </div>

            {/* 2nd Grid Bot */}
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

              {/* Icon Bot */}
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
                <Bot 
                    className="
                          h-6
                          w-6
                          text-teal-600
                  "
                />
              </div>

                {/* Grid Title Bot */}
                <h3
                  className="
                        text-xl
                        font-semibold
                        text-gray-900
                  "
                >
                  AI Analysis
                </h3>

                {/* Grid Description Bot */}
                <p                    
                  className="
                        mt-3
                        text-gray-600                        
                        leading-7
                  "
                >
                  Our AI evaluates ATS compatibility, formatting, grammar, and key skills to assess your resume.
                  </p>      
            </div>

            {/* 3rd Grid Check */}
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
                {/* Icon Check */}
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
                  <CheckCircle
                        className="
                              h-6
                              w-6
                              text-green-600
                    "
                  />
                </div>

                  {/* Grid Title Check */}
                  <h3
                    className="
                          text-xl
                          font-semibold
                          text-gray-900
                    "
                  >
                    Get Results
                  </h3>

                  {/* Grid Description Check */}
                  <p
                    className="
                          mt-3
                          text-gray-600
                          leading-7                    
                    "
                  >
                    Receive your resume score, detailed feedback, and actionable suggestions to improve your chances. 
                  </p>      
            </div>
          </div>
      </div>
    </section>
  );
}
export default HowItWorks;