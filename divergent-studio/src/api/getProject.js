import axios from './axios';

const getProjects = async () => {
  return await axios.get('/Projects');
};

export default getProjects;
