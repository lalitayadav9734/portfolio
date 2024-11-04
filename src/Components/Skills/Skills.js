
import '../Skills/Skills.css';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'CSS & HTML', level: 'Advanced' },
    { name: 'Tailwind ', level: 'Advanced' },
    { name:'MySQl',  level:'Intermediate'}
];

const Skills = () => {
    return(
        <section id='skills'>
            <h2>Skills</h2>
            <div className='skills-container'>
                {skills.map((skill,index) => (
                    <div key={index} className='skill'>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                        </div>
                ))}
            </div>

        </section>
    );
};
export default Skills;