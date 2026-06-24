import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Developer Intern</h4>
                <h5>Gray Corporates Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed SQL queries using joins, subqueries, and window functions to clean, transform, analyze, and prepare structured datasets for analytics workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python / Data Science Intern</h4>
                <h5>S2P Edutech Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on Python-based data preprocessing, analysis, visualization, and basic ML model development using Pandas, NumPy, Matplotlib, and Scikit-learn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & Data Science</h4>
                <h5>S.B Jain Institute of Technology Management & Research</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Gained comprehensive academic foundation in Artificial Intelligence, Machine Learning, Database Management Systems, Data Structures, and Analytics. CGPA: 6.5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
