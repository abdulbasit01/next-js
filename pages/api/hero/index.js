import dbConnect from '../../../DB/dbconnection'
import Hero from '../../../Models/Hero'
dbConnect()
export default async (req, res) => {


    const { method } = req

    switch (method) {
        case "GET":
            try {
                const heros = await Hero.find({})
                return res.status(200).json({ success: true, heros })
            } catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        case "POST":
            try {
                const heros = await Hero.create(req.body)
                return res.status(200).json({ success: true, heros })
            } catch (error) {
                return res.status(400).json({ success: false })
            }
            break;

        default:
            break;
    }
}