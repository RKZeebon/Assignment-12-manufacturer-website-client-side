import React from 'react';
import Skill from './Skill';
import html from '../../Assets/icon/html.png'
import css from '../../Assets/icon/css.png'
import bootstrap from '../../Assets/icon/bootstrap.png'
import tailwind from '../../Assets/icon/tailwind.png'
import js from '../../Assets/icon/js.png'
import react from '../../Assets/icon/react.png'
import ex from '../../Assets/icon/ex.png'
import mongoDb from '../../Assets/icon/mongoDB.png'



const Portfolio = () => {
    const skills = [
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "Bootstrap", img: bootstrap },
        { name: "Tailwind", img: tailwind },
        { name: "Javascript", img: js },
        { name: "React", img: react },
        { name: "Express js", img: ex },
        { name: "MongoDB", img: mongoDb }
    ]
    return (
        <div className='min-h-full p-10 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 flex justify-center'>
            <div className='lg:w-1/2 shadow-2xl p-5 rounded-3xl'>
                <h1 className='text-2xl font-bold mb-2'>Md. Rezaul Karim</h1>
                <h2 className='text-lg font-semibold mb-10'>Email: rkzeebon@gmail.com</h2>
                <h2 className='text-lg font-semibold mb-2'>Education: </h2>
                <table class="table w-full mb-10">

                    <thead>
                        <tr>
                            <th></th>
                            <th>degree</th>
                            <th>Institute</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>SSC</td>
                            <td>Shapleza Model High School</td>
                            <td>2012</td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>HSC</td>
                            <td>Dr. Rustum Ali Faraji Degree College</td>
                            <td>2014</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className='text-lg font-semibold mb-2'>Skills:</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10'>
                    {
                        skills.map((skill, index) => <Skill
                            key={index}
                            skill={skill}
                        />)
                    }
                </div>
                <h2 className='text-lg font-semibold mb-2'>Some of My Work:</h2>
                <div>
                    <a className='btn btn-primary' target='_blank' rel='noreferrer' href="https://symphony-rkz.netlify.app/">Visit Project-1</a>
                    <a className='btn btn-secondary mx-5' target='_blank' rel='noreferrer' href="https://rkz-photography18.web.app/">Visit Project-2</a>
                    <a className='btn btn-accent' target='_blank' rel='noreferrer' href="https://rkz-computer-city.web.app/">Visit Project-3</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;