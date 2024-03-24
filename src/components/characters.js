import uniqid from 'uniqid';
import hermione from '../assets/hermione.png';
import harry from '../assets/harry.png';
import fred from '../assets/fred.png';
import albus from '../assets/albus.png';
import newt from '../assets/newt.png';
import luna from '../assets/luna.png';
import ronlad from '../assets/ronald.png';
import snape from '../assets/snape.png';
import mcongall from '../assets/mcongall.png';
import voldemort from '../assets/voldemort.png';

const characters = [
  {
    id: uniqid(),
    src: voldemort,
    name: 'Voldemort',
  },
  {
    id: uniqid(),
    src: mcongall,
    name: 'MconGall',
  },
  {
    id: uniqid(),
    src: hermione,
    name: 'Hermione',
  },
  {
    id: uniqid(),
    src: snape,
    name: 'Snape',
  },
  {
    id: uniqid(),
    src: ronlad,
    name: 'Ronald',
  },
  {
    id: uniqid(),
    src: albus,
    name: 'Albus',
  },
  {
    id: uniqid(),
    src: luna,
    name: 'Luna',
  },
  {
    id: uniqid(),
    src: newt,
    name: 'Newt',
  },
  {
    id: uniqid(),
    src: fred,
    name: 'Fred',
  },
  {
    id: uniqid(),
    src: harry,
    name: 'Harry',
  },
];

export default characters;
