import iconfe from '../assets/fe.png';
import iconbe from '../assets/be.png';
import iconsk from '../assets/sk.png';
import iconto from '../assets/to.png';

export const SKILLS = [
    {
        title:"Front-end" ,
        icon: iconfe,
        skills:[
            {skill: "HTML5" , percentage: "80%"},
            {skill: "CSS" , percentage: "85%"},
            {skill: "Javascript" , percentage: "75%"},
            {skill: "React.js" , percentage: "70%"},
        ],
    },

    {
        title:"Back-end" ,
        icon: iconbe,
        skills:[
            {skill: "Java" , percentage: "80%"},
            {skill: "Python" , percentage: "75%"},
            {skill: "Node.js" , percentage: "70%"},
        ],
    },

    {
        title:"Tools" ,
        icon: iconto,
        skills:[
            {skill: "Git & Github" , percentage: "85%"},
            {skill: "VS code" , percentage: "85%"},
            {skill: "Responsive Design" , percentage: "75%"},
            {skill: "Webpack" , percentage: "60%"},
        ],
    },

    {
        title:"Soft-skills" ,
        icon: iconsk,
        skills:[
            {skill: "Problem solving" , percentage: "70%"},
            {skill: "Collaboration" , percentage: "65%"},
        ],
    }
];

