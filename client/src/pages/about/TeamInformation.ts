import ramesh from "../../assets/images/team/ramesh.jpg";
import ali from "../../assets/images/team/ali.png";

interface ITeamInformation {
  name: string;
  title: string;
  description: string;
  image: string;
}

export const teamInformation: ITeamInformation[] = [
  {
    name: "Ramesh Hiremath",
    title: "Solutions Architect",
    description: "",
    image: ramesh,
  },
  {
    name: "Mohammed Ali Khan",
    title: "Software Engineer",
    description: "",
    image: ali,
  }
];
