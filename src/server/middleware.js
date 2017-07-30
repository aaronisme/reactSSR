import page from './page';

export default (req, res) => {
  return res.status(200).send(page)
}