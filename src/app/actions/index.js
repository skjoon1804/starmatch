export const setState = (state={}) => {
    return {
        type: 'SET_STATE',
        state
    }
}

export const setGame = (game) => {
    return {
        type: 'SET_GAME',
        game
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}

export const setTime = (time) => {
    return {
        type: 'SET_TIME',
        time
    }
}

export const setStars = (stars) => {
    return {
        type: 'SET_STARS',
        stars
    }
}

export const setScore = (score) => {
    return {
        type: 'SET_SCORE',
        score
    }
}

export const addScore = (score) => {
    return {
        type: 'ADD_SCORE',
        score
    }
}

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name
    }
}

export const setLevel = (level) => {
    return {
        type: 'SET_LEVEL',
        level
    }
}

export const addEasyRecord = (level, name, score) => {
    return {
        type: 'ADD_EASY_RECORD',
        level,
        name,
        score
    }
}
export const addMediumRecord = (level, name, score) => {
    return {
        type: 'ADD_MEDIUM_RECORD',
        level,
        name,
        score
    }
}
export const addHardRecord = (level, name, score) => {
    return {
        type: 'ADD_HARD_RECORD',
        level, 
        name,
        score
    }
}
export const addCrazyRecord = (level, name, score) => {
    return {
        type: 'ADD_CRAZY_RECORD',
        level,
        name,
        score
    }
}