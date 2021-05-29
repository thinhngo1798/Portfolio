import "./ExperienceStyle.scss";
const Experience = ({ experience }) => {
  
  return (
      <div className="experience post-card">
      <div className="experience__header">
          <span className="post-card__title">{experience.company}</span>
          <span className="experience__location">{experience.city}, {experience.country}</span>
          <span className="experience__timeline">{experience.from} ~ {experience.until}</span>
      </div>
      <div className="post-card__list">
          <ul>
          {experience.tasks.map(function(task, index){
                    return <div key={index}>
                    <li>
                  {task.text}
                  { (task.link) ? <a href={task.link}> {[task.link]}</a> : ""}
              </li>
              </div>
                  })}
          </ul>
      </div>
      <div className="post-tags">
          {experience.skills.map((skill,index)=> {
            return  (<span className="post-tags__link" key={index}>
                #{skill}
            </span>
            )
          })}
      </div> 
  </div>
  );
};

export default Experience;
