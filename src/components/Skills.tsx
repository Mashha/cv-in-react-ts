type Props = {
  id: string;
  skill: string;
  handleSkills: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  deleteSkillObj: (id: string) => void;
};

function Skills(props: Props) {
  return (
    <div className="data-skills">
      <div className="skill-input">
        <input
          type="text"
          placeholder="Skill"
          name="skill"
          onChange={(e) => props.handleSkills(e, props.id)}
        />
        <button
          className="remove-skill"
          onClick={() => props.deleteSkillObj(props.id)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Skills;
