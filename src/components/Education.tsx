import React from "react";

type Props = {
  id: string;
  universityName: string;
  degree: string;
  educationDescription: string;
  startDate: string;
  endDate: string;
  handleEducData: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) => void;
  deleteEduObj: (id: string) => void;
};

export default function Education(props: Props) {
  return (
    <div className="data-education">
      <div className="data-education-inner">
        <input
          type="text"
          name="universityName"
          placeholder="University name"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date (YYYY)"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date (YYYY)"
          onChange={(e) => props.handleEducData(e, props.id)}
        />
        <textarea
          name="educationDescription"
          placeholder="Description - type each sentence on a separate line"
          onChange={(e) => props.handleEducData(e, props.id)}
        ></textarea>
        <button onClick={() => props.deleteEduObj(props.id)}>Remove</button>
      </div>
    </div>
  );
}
