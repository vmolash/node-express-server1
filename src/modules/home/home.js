export default function home(req, res) {
  res.status(200).json({
    name: 'psv',
    components: ['sdf', 'dsfds'],
    isActive: true,
  });
}
