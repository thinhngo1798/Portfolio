
import "./SkillStyle.scss";
const Skill = ({ skill }) => {
  const getStarValue = function(skillLevel, starLevel) {
      
      return skillLevel >= starLevel;
  };
  return (
      <div className="skill">
        <span id={skill.id}>{skill.title}</span>
        <div className="level-container">
            <input 
                value="1" 
                defaultChecked={getStarValue(skill.level, 1)} 
                className="skill-level" name='skill-level' 
                type="checkbox"
            /> 
            <label data-tip="Beginner" htmlFor="skill-level"></label> 

            <input 
                value="2" 
                defaultChecked={getStarValue(skill.level, 2)} 
                className="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label data-tip="Familiar" htmlFor="skill-level"></label> 

            <input 
                value="3" 
                defaultChecked={getStarValue(skill.level, 3)} 
                className="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label data-tip="Proficient" htmlFor="skill-level"></label> 

            <input 
                value="4" 
                defaultChecked={getStarValue(skill.level, 4)}  
                className="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label data-tip="Advanced" htmlFor="skill-level"></label> 

            <input 
                value="5" 
                defaultChecked={getStarValue(skill.level, 5)} 
                className="skill-level" name='skill-level' 
                type="checkbox"
            />
            <label data-tip="Professional" htmlFor="skill-level"></label> 
        </div>
    </div>
  );
};

export default Skill;