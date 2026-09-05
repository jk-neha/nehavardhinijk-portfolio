import {
  FaPython,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFastapi,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiOpencv,
  SiGit,
} from "react-icons/si";

import { TbApi, TbBrain } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

const skills = [

{
name:"Python",
icon:FaPython,
color:"#3776AB",
level:"Advanced",
progress:95
},

{
name:"FastAPI",
icon:SiFastapi,
color:"#009688",
level:"Advanced",
progress:92
},

{
name:"REST APIs",
icon:TbApi,
color:"#38BDF8",
level:"Advanced",
progress:90
},

{
name:"C#",
icon:FaDatabase,
color:"#8A2BE2",
level:"Intermediate",
progress:70
},

{
name:".NET Core",
icon:SiDotnet,
color:"#512BD4",
level:"Intermediate",
progress:70
},

{
name:"SQL Server",
icon:FaDatabase,
color:"#CC2927",
level:"Intermediate",
progress:80
},

{
name:"MySQL",
icon:SiMysql,
color:"#4479A1",
level:"Intermediate",
progress:80
},

{
name:"PostgreSQL",
icon:SiPostgresql,
color:"#336791",
level:"Intermediate",
progress:65
},

{
name:"GitHub",
icon:FaGithub,
color:"#FFFFFF",
level:"Intermediate",
progress:80
},

{
name:"Machine Learning",
icon:TbBrain,
color:"#F59E0B",
level:"Intermediate",
progress:65
},


];

export default skills;