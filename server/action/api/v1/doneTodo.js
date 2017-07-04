import service from '../../../model/service';

export async function post(req, res) {
    res.json(await service.doneTodo(parseInt(req.body.id, 10)));
}