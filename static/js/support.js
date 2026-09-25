/* =====================================================
   InterviewAI Customer Support
   JavaScript-only support assistant
===================================================== */


/* =====================================================
   SUPPORT KNOWLEDGE
===================================================== */

const supportKnowledge = [

    /* -------------------------------------------------
       GENERAL
    ------------------------------------------------- */
    /* -------------------------------------------------
   OWNER / DEVELOPER
------------------------------------------------- */

    {
        keywords: [
            "who is the owner",
            "owner of interviewai",
            "who owns interviewai",
            "interviewai owner",
            "owner kaun hai",
            "owner kon hai"
        ],

        answer:
            "InterviewAI was built and developed by Ravi Singh Kalakoti."
    },


    {
        keywords: [
            "who created interviewai",
            "who developed interviewai",
            "who built interviewai",
            "creator of interviewai",
            "developer of interviewai",
            "interviewai kisne banaya",
            "interviewai kisne develop kiya"
        ],

        answer:
            "InterviewAI was built and developed by Ravi Singh Kalakoti, a Python/Django backend developer."
    },


    {
        keywords: [
            "who is ravi",
            "who is ravi kalakoti",
            "tell me about ravi",
            "about ravi",
            "ravi kalakoti",
            "ravi kaun hai"
        ],

        answer:
            "Ravi Singh Kalakoti is the developer and creator of InterviewAI.\n\n" +
            "He is a Python/Django backend developer with experience in backend development, REST APIs, PostgreSQL, Redis, Docker and related web technologies."
    },


    {
        keywords: [
            "ravi email",
            "ravi email address",
            "developer email",
            "owner email",
            "contact ravi",
            "ravi ka email",
            "email of ravi"
        ],

        answer:
            "You can contact Ravi Singh Kalakoti at:\n\n" +
            "📧 raviakalkoti16@gmail.com"
    },


    {
        keywords: [
            "ravi github",
            "developer github",
            "owner github",
            "github of ravi",
            "ravi github profile"
        ],

        answer:
            "Ravi Singh Kalakoti's GitHub profile is:\n\n" +
            "https://github.com/Ravikalakoti\n\n" +
            "The InterviewAI project is also available on his GitHub profile."
    },


    {
        keywords: [
            "ravi linkedin",
            "developer linkedin",
            "owner linkedin",
            "linkedin of ravi"
        ],

        answer:
            "Ravi Singh Kalakoti's LinkedIn profile is available at:\n\n" +
            "https://linkedin.com/in/ravi-kalakoti/"
    },


    {
        keywords: [
            "what does ravi do",
            "ravi profession",
            "ravi job",
            "ravi work",
            "what is ravi profession",
            "ravi kya karta hai"
        ],

        answer:
            "Ravi Singh Kalakoti is a Python/Django backend developer.\n\n" +
            "His work includes backend development, APIs, databases, performance optimization and web application development."
    },


    {
        keywords: [
            "ravi skills",
            "skills of ravi",
            "ravi technologies",
            "what technologies ravi knows",
            "ravi tech stack",
            "ravi ko kya aata hai"
        ],

        answer:
            "Ravi's main technical skills include:\n\n" +
            "• Python\n" +
            "• Django\n" +
            "• Django REST Framework\n" +
            "• FastAPI\n" +
            "• PostgreSQL\n" +
            "• Redis\n" +
            "• Docker\n" +
            "• Git\n" +
            "• REST APIs\n" +
            "• Backend development"
    },


    {
        keywords: [
            "ravi experience",
            "experience of ravi",
            "how many years ravi",
            "ravi years experience",
            "ravi kitne saal se"
        ],

        answer:
            "Ravi Singh Kalakoti has around 5+ years of professional experience in Python backend development."
    },


    {
        keywords: [
            "ravi education",
            "education of ravi",
            "ravi degree",
            "ravi qualification",
            "ravi ne kya padha hai"
        ],

        answer:
            "Ravi Singh Kalakoti has a B.Tech degree in Mechanical Engineering from Uttarakhand Technical University."
    },


    {
        keywords: [
            "who made this website",
            "who made this site",
            "website developer",
            "site developer",
            "website kisne banayi",
            "site kisne banayi"
        ],

        answer:
            "This website was developed by Ravi Singh Kalakoti as part of the InterviewAI project."
    },


    {
        keywords: [
            "contact owner",
            "contact developer",
            "contact interviewai owner",
            "owner se contact",
            "developer se contact"
        ],

        answer:
            "You can contact the InterviewAI developer, Ravi Singh Kalakoti, at:\n\n" +
            "📧 raviakalkoti16@gmail.com"
    },

    {
        keywords: [
            "what is interviewai",
            "what is interview ai",
            "interviewai kya hai",
            "interview ai kya hai",
            "about interviewai",
            "about interview ai"
        ],

        answer:
            "InterviewAI is an interview preparation platform designed to help you practice interviews and improve your answers.\n\n" +
            "You can select a domain and difficulty level, answer interview questions, and receive scores and feedback on your answers."
    },


    {
        keywords: [
            "why use interviewai",
            "why interviewai",
            "benefit of interviewai",
            "interviewai benefits",
            "interviewai ka benefit"
        ],

        answer:
            "InterviewAI helps you practice interviews in a structured way.\n\n" +
            "You can:\n" +
            "• Practice interview questions\n" +
            "• Choose different domains\n" +
            "• Select difficulty levels\n" +
            "• Get answer scores\n" +
            "• Review feedback\n" +
            "• Track your previous interviews\n\n" +
            "The goal is to help you practice consistently and improve your interview performance."
    },


    {
        keywords: [
            "who built interviewai",
            "who created interviewai",
            "developer of interviewai",
            "interviewai developer",
            "who made interviewai",
            "interviewai kisne banaya"
        ],

        answer:
            "InterviewAI was built by Ravi Singh Kalakoti."
    },


    /* -------------------------------------------------
       ACCOUNT
    ------------------------------------------------- */

    {
        keywords: [
            "register",
            "registration",
            "create account",
            "sign up",
            "signup",
            "account kaise banaye"
        ],

        answer:
            "To create an InterviewAI account, open the Register or Sign Up page and provide the required information.\n\n" +
            "After registration, you can log in and start practicing interviews."
    },


    {
        keywords: [
            "login",
            "log in",
            "sign in",
            "login kaise kare",
            "how to login"
        ],

        answer:
            "To log in, open the Login page and enter your registered credentials.\n\n" +
            "After successful login, you can access your InterviewAI dashboard and other account features."
    },


    {
        keywords: [
            "logout",
            "log out",
            "sign out",
            "logout kaise kare"
        ],

        answer:
            "You can log out from the Logout option available in the navigation menu after signing in."
    },


    {
        keywords: [
            "forgot password",
            "forget password",
            "password bhul gaya",
            "reset password",
            "change password"
        ],

        answer:
            "If you forget your password, use the password recovery option available on the login page, if enabled for your account."
    },


    {
        keywords: [
            "profile",
            "my profile",
            "profile page",
            "profile kya hai"
        ],

        answer:
            "Your Profile section contains information related to your InterviewAI account.\n\n" +
            "You can access it from the navigation menu after logging in."
    },


    /* -------------------------------------------------
       INTERVIEW
    ------------------------------------------------- */

    {
        keywords: [
            "start interview",
            "start an interview",
            "new interview",
            "begin interview",
            "interview kaise start kare",
            "interview kaise shuru kare"
        ],

        answer:
            "To start an interview:\n\n" +
            "1. Log in to InterviewAI.\n" +
            "2. Open the New Interview option.\n" +
            "3. Select your preferred domain.\n" +
            "4. Select the difficulty level.\n" +
            "5. Start answering the questions.\n\n" +
            "Your answers will be evaluated according to the InterviewAI scoring system."
    },


    {
        keywords: [
            "how interview works",
            "how does interview work",
            "interview kaise work karta hai",
            "interview process",
            "interview process kya hai"
        ],

        answer:
            "InterviewAI provides a question-based interview practice experience.\n\n" +
            "You select a domain and difficulty level, answer the questions, and submit your answers for evaluation.\n\n" +
            "After evaluation, you can see your score and feedback."
    },


    {
        keywords: [
            "answer question",
            "submit answer",
            "how to answer",
            "question ka answer",
            "answer kaise submit kare"
        ],

        answer:
            "Read the interview question carefully and enter your answer in the provided answer field.\n\n" +
            "When you are ready, submit the answer to receive the evaluation and feedback."
    },


    {
        keywords: [
            "number of questions",
            "how many questions",
            "questions kitne",
            "kitne questions",
            "question count"
        ],

        answer:
            "The number of questions can depend on the interview configuration.\n\n" +
            "InterviewAI presents the questions available for the selected interview."
    },


    /* -------------------------------------------------
       DOMAINS
    ------------------------------------------------- */

    {
        keywords: [
            "domains",
            "available domains",
            "which domains",
            "what domains",
            "domain list",
            "domains available",
            "domain kya hai"
        ],

        answer:
            "InterviewAI currently provides interview practice across these domains:\n\n" +
            "• Software Development\n" +
            "• Data Science\n" +
            "• Product Management\n" +
            "• Marketing\n" +
            "• HR"
    },


    {
        keywords: [
            "software development",
            "software domain",
            "developer interview",
            "programming interview"
        ],

        answer:
            "The Software Development domain focuses on software and development-related interview questions.\n\n" +
            "It is useful for developers preparing for technical interviews."
    },


    {
        keywords: [
            "data science",
            "data science domain",
            "data scientist interview"
        ],

        answer:
            "The Data Science domain focuses on questions related to data science concepts and interview preparation."
    },


    {
        keywords: [
            "product management",
            "product manager",
            "product domain"
        ],

        answer:
            "The Product Management domain focuses on product-related interview preparation, including product thinking and management-oriented questions."
    },


    {
        keywords: [
            "marketing",
            "marketing domain",
            "marketing interview"
        ],

        answer:
            "The Marketing domain provides questions designed for marketing-related interview preparation."
    },


    {
        keywords: [
            "hr",
            "human resources",
            "hr domain",
            "hr interview"
        ],

        answer:
            "The HR domain focuses on Human Resources and general HR interview preparation."
    },


    /* -------------------------------------------------
       DIFFICULTY
    ------------------------------------------------- */

    {
        keywords: [
            "difficulty",
            "difficulty levels",
            "levels",
            "easy medium hard",
            "difficulty level",
            "difficulty kya hai"
        ],

        answer:
            "InterviewAI provides three difficulty levels:\n\n" +
            "• Easy\n" +
            "• Medium\n" +
            "• Hard\n\n" +
            "You can choose the difficulty level according to your preparation needs."
    },


    {
        keywords: [
            "easy level",
            "easy difficulty",
            "easy questions"
        ],

        answer:
            "Easy difficulty is intended for users who are starting their interview preparation or want to practice fundamental questions."
    },


    {
        keywords: [
            "medium level",
            "medium difficulty",
            "medium questions"
        ],

        answer:
            "Medium difficulty provides a more challenging interview practice experience and can be useful after covering the fundamentals."
    },


    {
        keywords: [
            "hard level",
            "hard difficulty",
            "hard questions"
        ],

        answer:
            "Hard difficulty is intended for more challenging interview practice and can help you prepare for advanced questions."
    },


    /* -------------------------------------------------
       SCORING
    ------------------------------------------------- */

    {
        keywords: [
            "scoring",
            "how scoring works",
            "how does scoring work",
            "score kaise",
            "scoring system",
            "score system"
        ],

        answer:
            "InterviewAI evaluates answers using four main scoring areas:\n\n" +
            "• Keyword Coverage — 40%\n" +
            "• Answer Length & Structure — 20%\n" +
            "• Clarity — 20%\n" +
            "• Specificity — 20%\n\n" +
            "Each question receives a score on a 0–10 scale."
    },


    {
        keywords: [
            "keyword coverage",
            "keywords score",
            "keyword score",
            "keywords ka score"
        ],

        answer:
            "Keyword Coverage contributes 40% of the answer evaluation.\n\n" +
            "It checks whether your answer covers important concepts or keywords relevant to the question."
    },


    {
        keywords: [
            "answer length",
            "answer structure",
            "length structure",
            "structure score"
        ],

        answer:
            "Answer Length & Structure contributes 20% of the evaluation.\n\n" +
            "The system considers whether your answer has an appropriate length and a useful structure."
    },


    {
        keywords: [
            "clarity",
            "clarity score",
            "clear answer"
        ],

        answer:
            "Clarity contributes 20% of the evaluation.\n\n" +
            "A clear answer should communicate the main idea in an understandable and organized way."
    },


    {
        keywords: [
            "specificity",
            "specificity score",
            "specific answer"
        ],

        answer:
            "Specificity contributes 20% of the evaluation.\n\n" +
            "Specific answers provide relevant details instead of only giving a very general response."
    },


    {
        keywords: [
            "score out of 10",
            "score 10",
            "marks out of 10",
            "10 marks"
        ],

        answer:
            "Each interview question is evaluated on a 0–10 scale."
    },


    {
        keywords: [
            "final score",
            "overall score",
            "total score",
            "interview score"
        ],

        answer:
            "Your final interview score is calculated from the scores of the completed interview questions.\n\n" +
            "The final score represents your overall performance across the interview."
    },


    /* -------------------------------------------------
       IMPROVEMENT
    ------------------------------------------------- */

    {
        keywords: [
            "improve score",
            "increase score",
            "better score",
            "score improve",
            "score kaise improve kare"
        ],

        answer:
            "To improve your InterviewAI score:\n\n" +
            "• Cover important concepts and keywords.\n" +
            "• Keep your answer well structured.\n" +
            "• Explain your ideas clearly.\n" +
            "• Give specific and relevant examples.\n" +
            "• Avoid extremely short or vague answers.\n" +
            "• Practice regularly."
    },


    {
        keywords: [
            "low score",
            "why low score",
            "score kam",
            "marks kam"
        ],

        answer:
            "A low score can happen when an answer misses important concepts, lacks structure, is unclear, or does not provide enough relevant details.\n\n" +
            "Review the feedback and try to make your next answer clearer, more structured and specific."
    },


    {
        keywords: [
            "feedback",
            "answer feedback",
            "feedback kya hai"
        ],

        answer:
            "InterviewAI provides feedback to help you understand how your answer performed and where you can improve."
    },


    {
        keywords: [
            "ideal answer",
            "ideal answer guidance",
            "ideal answer kya hai",
            "better answer"
        ],

        answer:
            "Ideal Answer Guidance helps you understand what a strong answer could include.\n\n" +
            "Use it as a learning reference and try to build your own answer rather than simply memorizing it."
    },


    /* -------------------------------------------------
       DASHBOARD
    ------------------------------------------------- */

    {
        keywords: [
            "dashboard",
            "dashboard kya hai",
            "my dashboard"
        ],

        answer:
            "The InterviewAI Dashboard provides an overview of your interview practice and progress.\n\n" +
            "After logging in, you can access your available interview-related information from the dashboard."
    },


    {
        keywords: [
            "progress",
            "track progress",
            "progress kaise dekhe",
            "my progress"
        ],

        answer:
            "InterviewAI helps you track your interview practice through your dashboard and interview history."
    },


    /* -------------------------------------------------
       HISTORY
    ------------------------------------------------- */

    {
        keywords: [
            "history",
            "interview history",
            "previous interviews",
            "past interviews",
            "old interviews"
        ],

        answer:
            "The History section allows you to review your previous interview attempts and their available results."
    },


    {
        keywords: [
            "previous score",
            "old score",
            "past score",
            "previous interview score"
        ],

        answer:
            "You can review your previous interview results from the History section after logging in."
    },


    /* -------------------------------------------------
       TECHNOLOGY
    ------------------------------------------------- */

    {
        keywords: [
            "tech stack",
            "technology",
            "technologies used",
            "what technology",
            "tech used"
        ],

        answer:
            "InterviewAI is built using:\n\n" +
            "• Python\n" +
            "• Django\n" +
            "• HTML\n" +
            "• CSS\n" +
            "• JavaScript\n\n" +
            "The application uses Django for the backend and web technologies for the frontend."
    },


    {
        keywords: [
            "backend",
            "backend technology",
            "backend kya hai",
            "django backend"
        ],

        answer:
            "InterviewAI uses Python and Django for its backend."
    },


    {
        keywords: [
            "frontend",
            "frontend technology",
            "frontend kya hai"
        ],

        answer:
            "InterviewAI uses HTML, CSS and JavaScript for the frontend."
    },


    {
        keywords: [
            "python",
            "django",
            "django project"
        ],

        answer:
            "InterviewAI is a Django-based web application built with Python."
    },


    /* -------------------------------------------------
       AI / API
    ------------------------------------------------- */

    {
        keywords: [
            "external ai api",
            "ai api",
            "openai api",
            "grok api",
            "external api",
            "does interviewai use ai api"
        ],

        answer:
            "The current InterviewAI scoring system does not require an external AI API.\n\n" +
            "The current evaluation uses the application's built-in scoring logic."
    },


    {
        keywords: [
            "is interviewai using ai",
            "does interviewai use ai",
            "interviewai artificial intelligence"
        ],

        answer:
            "InterviewAI is an interview preparation platform with built-in answer evaluation logic.\n\n" +
            "The current scoring system does not depend on an external AI API."
    },


    /* -------------------------------------------------
       ADMIN
    ------------------------------------------------- */

    {
        keywords: [
            "admin",
            "admin panel",
            "administrator",
            "manage questions",
            "question management"
        ],

        answer:
            "InterviewAI includes an admin area where authorized administrators can manage interview-related content such as questions."
    },


    {
        keywords: [
            "add question",
            "new question",
            "create question",
            "admin question"
        ],

        answer:
            "Authorized administrators can manage interview questions through the admin area."
    },


    /* -------------------------------------------------
       FREE / PRICING
    ------------------------------------------------- */

    {
        keywords: [
            "price",
            "pricing",
            "cost",
            "free",
            "is interviewai free",
            "interviewai free hai"
        ],

        answer:
            "InterviewAI is currently presented as a free interview practice project.\n\n" +
            "Any future pricing or premium features would depend on the project's future development."
    },


    /* -------------------------------------------------
       CONTACT
    ------------------------------------------------- */

    {
        keywords: [
            "contact support",
            "contact",
            "support team",
            "help",
            "need help",
            "support se contact"
        ],

        answer:
            "If your question is not covered by the current InterviewAI Support assistant, please contact the InterviewAI support team with your question."
    },


    /* -------------------------------------------------
       GREETINGS
    ------------------------------------------------- */

    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "namaste",
            "hii",
            "helo"
        ],

        answer:
            "👋 Hi! Welcome to InterviewAI Support.\n\n" +
            "You can ask me about interviews, scoring, domains, difficulty levels, dashboard, history, profile, login and other InterviewAI features."
    },


    {
        keywords: [
            "thanks",
            "thank you",
            "thank",
            "thanks support"
        ],

        answer:
            "You're welcome! 😊\n\n" +
            "Good luck with your interview preparation!"
    }

];



/* =====================================================
   DOM ELEMENTS
===================================================== */

const supportButton =
    document.getElementById("support-button");

const supportChat =
    document.getElementById("support-chat");

const supportClose =
    document.getElementById("support-close");

const supportInput =
    document.getElementById("support-input");

const supportSend =
    document.getElementById("support-send");

const supportMessages =
    document.getElementById("support-messages");



/* =====================================================
   OPEN SUPPORT
===================================================== */

if (supportButton) {

    supportButton.addEventListener("click", function () {

        supportChat.style.display = "flex";

        if (supportInput) {
            supportInput.focus();
        }

    });

}



/* =====================================================
   CLOSE SUPPORT
===================================================== */

if (supportClose) {

    supportClose.addEventListener("click", function () {

        supportChat.style.display = "none";

    });

}



/* =====================================================
   ADD MESSAGE
===================================================== */

function addSupportMessage(message, type) {

    if (!supportMessages) {
        return;
    }


    const div = document.createElement("div");

    div.className =
        "support-message " + type;


    div.textContent = message;


    supportMessages.appendChild(div);


    supportMessages.scrollTop =
        supportMessages.scrollHeight;

}



/* =====================================================
   NORMALIZE TEXT
===================================================== */

function normalizeText(text) {

    return text
        .toLowerCase()
        .replace(/[?.,!]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}



/* =====================================================
   FIND SUPPORT ANSWER
===================================================== */

function findSupportAnswer(question) {

    const text =
        normalizeText(question);


    if (!text) {

        return "Please enter your question.";

    }



    /* -----------------------------------------------
       1. Exact phrase matching
    ------------------------------------------------ */

    for (const item of supportKnowledge) {

        for (const keyword of item.keywords) {

            const normalizedKeyword =
                normalizeText(keyword);


            if (
                text.includes(normalizedKeyword)
            ) {

                return item.answer;

            }

        }

    }



    /* -----------------------------------------------
       2. Word matching
    ------------------------------------------------ */

    const words =
        text.split(" ");


    let bestMatch = null;

    let bestScore = 0;


    for (const item of supportKnowledge) {

        let score = 0;


        for (const keyword of item.keywords) {

            const keywordWords =
                normalizeText(keyword)
                    .split(" ");


            for (const word of keywordWords) {

                if (
                    word.length > 2 &&
                    words.includes(word)
                ) {

                    score++;

                }

            }

        }


        if (score > bestScore) {

            bestScore = score;

            bestMatch = item;

        }

    }



    if (
        bestMatch &&
        bestScore >= 2
    ) {

        return bestMatch.answer;

    }



    /* -----------------------------------------------
       3. Unknown question
    ------------------------------------------------ */


    return (
        "I'm sorry, I don't have a reliable answer for that " +
        "in my current InterviewAI support information.\n\n" +

        "You can contact the owner and developer, " +
        "Ravi Singh Kalakoti, for further help:\n\n" +

        "📧 raviakalkoti16@gmail.com"
    );
}



/* =====================================================
   SEND MESSAGE
===================================================== */

function sendSupportMessage() {

    if (!supportInput) {
        return;
    }


    const question =
        supportInput.value.trim();


    if (!question) {
        return;
    }



    /* User message */

    addSupportMessage(
        question,
        "user"
    );


    supportInput.value = "";



    /* Bot response */

    setTimeout(function () {

        const answer =
            findSupportAnswer(question);


        addSupportMessage(
            answer,
            "bot"
        );

    }, 250);

}



/* =====================================================
   QUICK QUESTION
===================================================== */

function askQuickQuestion(question) {

    if (!supportInput) {
        return;
    }


    supportInput.value =
        question;


    sendSupportMessage();

}



/* =====================================================
   SEND BUTTON
===================================================== */

if (supportSend) {

    supportSend.addEventListener(
        "click",
        sendSupportMessage
    );

}



/* =====================================================
   ENTER KEY
===================================================== */

if (supportInput) {

    supportInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendSupportMessage();

            }

        }
    );

}