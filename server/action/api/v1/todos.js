import service from '../../../model/service';

export async function get(req, res) {
    res.json(await service.todos(parseInt(req.query.category, 10)));
}