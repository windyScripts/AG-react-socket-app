import Score from '../models/scoreModel'

export const getAllUserScores = (params,sortParams=null,limit=null) => {
    return Score.findAll(params).sort(sortParams).limit(limit);
}
