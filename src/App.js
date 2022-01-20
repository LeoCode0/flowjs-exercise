// @flow
import * as React from 'react';
import './App.css';

import { Challenge } from './components/challenge';

const challengeData = {
  img: 'https://static.platzi.com/media/blog/datacademy-blog-reto-cover-143d3b0a-ea9d-4e7a-bd6a-6f6a1de6e814.png',
  title: 'Datacademy',
  description:
    'Empieza 2022 aprendiendo data science e IA, sus herramientas y los diferentes roles de esta industria. Inscríbete ahora al reto Datacademy.',
  students: '12480',
  hours: '30',
  courses: [
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
    {
      img: 'https://static.platzi.com/media/achievements/badge-basico-python-bdcc67b3-031d-4dce-8e78-5699fb243149.png',
      name: 'Curso python',
      link: 'https://platzi.com/cursos/python/',
    },
  ],
  join: () => console.log('You are in the challenge now'),
  leave: () => console.log("You aren't more in the challenge :("),
};

function App(): React.Node {
  return (
    <div className="App">
      <Challenge {...challengeData} />
    </div>
  );
}

export default App;
