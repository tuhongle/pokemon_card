import Card from '../models/CardModel.js'

// fetchAllCards
export const fetchAllCards = async(req, res) => {
    const result = await Card.find();
    await res.status(200).json(result);
}

export const createCard = async(req, res) => {
    const card = req.body
    const cardName = req.file.filename
    card.image = cardName
    try {
        await Card.create(card)
        await res.status(201).redirect('/')
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const fetchCardByID = async(req, res) => {
    const id = req.params.id
    const result = await Card.findById(id)
    await res.status(200).json(result)
}

export const updateCardByID = async(req, res) => {
    const id = req.params.id
    console.log(req.body)
    await Card.findByIdAndUpdate(id, req.body, {new: true})
    await res.status(201).json({redirect: `/card/${id}`})
}

export const deleteCard = async(req, res) => {
    const id = req.params.id
    await Card.findByIdAndDelete(id)
    await res.status(200).json({redirect: '/'})
}