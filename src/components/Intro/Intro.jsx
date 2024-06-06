import React from 'react';
import './Intro.scss';
import Preheader from '../Preheader/Preheader';
import Main from '../Main/Main';
import Counter from '../mobxCounter/mobxCounter';

export default function Intro() {
  return (
    <div className='intro'>
      <Preheader />
      <Main />

      <h1>MobX Counter</h1>
      <Counter />
    </div>
  )
}
