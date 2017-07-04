import service from '../../../model/service';

export async function get (req, res) {
    res.json(await service.categories());
}