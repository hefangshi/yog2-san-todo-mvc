import service from '../../../model/service';

export async function post (req, res) {
    res.json(await service.rmTodo(req.body.id));
}