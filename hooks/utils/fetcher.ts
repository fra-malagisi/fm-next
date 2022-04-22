import axios from 'axios';

const host = `${process.env.NEXT_PUBLIC_API_HOST}`;

const fetcher = (url: string) => axios.get(`${url}`).then(res => res.data);

export default fetcher;
