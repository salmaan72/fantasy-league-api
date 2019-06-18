import service from './service';
async function dummy(req, res) {
    res.send({message: "dummy api is working..."});
    
    await service.testRaw();
}

export default {
    dummy,
}