import dbConnect from '../../../DB/dbconnection'
import Hero from '../../../Models/Hero'
dbConnect()
export default async (req, res) => {


    const { query: { id }, method } = req

    switch (method) {
        case "GET":
            try {
                const heros = await Hero.findById(id)
                if (!heros) {
                    return res.status(400).json({ success: false })
                }
                return res.status(200).json({ success: true, heros })
            } catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        case "PUT":
            try {
                const heros = await Hero.findByIdAndUpdate(id, req.body, {
                    new: true, runValidators: true
                })
                if (!heros) {
                    return res.status(400).json({ success: false })
                }
                return res.status(200).json({ success: true, heros })
            } catch (error) {
                return res.status(400).json({ success: false })
            }
            break;
        case "DELETE":
            try {
                const heros = await Hero.deleteOne({ _id: id })
                if (!heros) {
                    return res.status(400).json({ success: false })
                }
                return res.status(200).json({ success: true, heros })
            } catch (error) {
                return res.status(400).json({ success: false })
            }
            break;

        default:
            break;
    }
}