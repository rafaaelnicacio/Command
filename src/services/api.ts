import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosClient = axios.create({
  baseURL: 'https://command-upload-backend.herokuapp.com/',
});

axiosClient.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem('@PlantOn:Token');
    // const token =
    //   await 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjZkMGM3NTcwMzAwZTI2ODk2NTE3NSIsImlhdCI6MTY1NTIyOTQ3NywiZXhwIjoxNjU1MzE1ODc3fQ.jn33zSqg0GdBPlpZdAKFZIGmOHnsJFGLBBp_7o-gn2E';

    config.headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjZkMGM3NTcwMzAwZTI2ODk2NTE3NSIsImlhdCI6MTY1NTIzMjAxMywiZXhwIjoxNjU1MzE4NDEzfQ.BQsaV5SzIhoBT0sD_7fFwRV5h4pKRAtom-MpGXF6B6U`,
      ...config.headers,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
export default axiosClient;
