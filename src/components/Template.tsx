import { forwardRef } from "react";

type Skill = {
  skill: string;
  id: string;
};

type Work = {
  position: string;
  company: string;
  dateFrom: string;
  dateTo: string;
  notes: string;
};

type Education = {
  universityName: string;
  degree: string;
  educationDescription: string;
  startDate: string;
  endDate: string;
};

function Template(props: any, ref: React.LegacyRef<HTMLDivElement>) {
  return (
    <div className="cv-template" ref={ref}>
      <div className="template-left">
        <div className="left-inner">
          <div className="image">
            <img src={props.selectedImage} />
          </div>
          <div className="name-title">
            <h1>
              {props.firstName} {props.lastName}
            </h1>
            <h3>{props.title}</h3>
          </div>
          <div className="contact">
            <div className="address">
              <i className="fa-solid fa-location-dot"></i>
              <div className="address-div">
                {props.address}, {props.city}, {props.country}
              </div>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope-open"></i>{" "}
              <div className="email-address">{props.email}</div>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <div>{props.phone}</div>
            </div>
            <div className="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
              <div>{props.linkedin}</div>
            </div>
          </div>
          <div className="profile">
            <h3>Profile</h3>
            <p className="short-desc">{props.description}</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul className="skills-list">
              {props.formDataSkills.map((data: Skill) => (
                <li>{data.skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="template-right">
        <div className="work-experience">
          <h1>Work experience</h1>
          {props.formDataWork.map((data: Work) => (
            <div className="work-experience-inner">
              <h3>{data.position}</h3>
              <div>
                <div className="company-name">{data.company}</div>
                <div className="date">
                  {data.dateFrom} - {data.dateTo}
                </div>
              </div>
              <ul className="notes">
                {data.notes.split(/\n/).map((sentence: string) => (
                  <li>{sentence}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="education-history">
          <h1>Education history</h1>
          {props.formDataEducation.map((data: Education) => (
            <div className="education-history-inner">
              <h3>{data.degree}</h3>
              <div>
                <div className="uni-name">{data.universityName}</div>
                <div className="uni-date">
                  {data.startDate} - {data.endDate}
                </div>
              </div>
              <ul className="education-notes">
                {data.educationDescription
                  .split(/\n/)
                  .map((sentence: string) => (
                    <li>{sentence}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Template);
