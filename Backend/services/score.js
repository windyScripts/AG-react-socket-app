import Score from '../models/scoreModel'

export const getAllUserScores = async (params,sortParams=null,limit=null) => {
    return Score.findAll(params).sort(sortParams).limit(limit);
}

export const createScore = async(params) => {
    const score = new Score(params);
return score.save();
}