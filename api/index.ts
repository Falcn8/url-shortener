import { NowRequest, NowResponse } from '@vercel/node';

const routes: {[key: string]: string} = {
  test: 'https://github.com/Falcn8',
  test2: 'https://github.com/Falcn8/url-shortener'
}

export default (req: NowRequest, res: NowResponse) => {
<!--   const route = routes[req.query.route as string] || 'https://igalaxy.dev'; -->
  const route = routes[req.query.route as string]; 
  res.redirect(route);
}
