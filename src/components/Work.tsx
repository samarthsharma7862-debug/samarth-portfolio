import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const flexElement = document.querySelector(".work-flex") as HTMLElement;
      const containerElement = document.querySelector(".work-container") as HTMLElement;
      if (!flexElement || !containerElement) return 0;
      return flexElement.scrollWidth - containerElement.clientWidth;
    };

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const refreshHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", refreshHandler);
    const timer = setTimeout(refreshHandler, 1000);

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("load", refreshHandler);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Churn Prediction MLOps",
    category: "MLOps & Machine Learning",
    tools: "Python, XGBoost, MLflow, FastAPI, Streamlit, Docker",
    image: "/images/churn_prediction.png",
  },
  {
    title: "Multi-Agent AI Business Analyst",
    category: "GenAI & Agentic Systems",
    tools: "Python, Streamlit, FastAPI, Docker, LangGraph",
    image: "/images/multi_agent_analyst.png",
  },
  {
    title: "Agentic Fraud Detection",
    category: "AI & ML Systems",
    tools: "Python, Scikit-learn, FastAPI, SQLite, Streamlit",
    image: "/images/fraud_detection.png",
  },
  {
    title: "Demand Forecasting System",
    category: "Time Series & Analytics",
    tools: "Python, Pandas, Scikit-learn, XGBoost, Power BI",
    image: "/images/demand_forecasting.png",
  },
  {
    title: "RAG Evaluation Platform",
    category: "Generative AI & LLMs",
    tools: "LangChain, OpenAI, Ragas, FastAPI",
    image: "/images/rag_evaluation.png",
  },
  {
    title: "AI Analyst Dashboard",
    category: "Data Analytics & GenAI",
    tools: "LangGraph, Streamlit, Pandas, Matplotlib, Seaborn",
    image: "/images/business_analyst_dashboard.png",
  },
];

export default Work;
