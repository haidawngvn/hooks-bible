
function logger(reducer) {

    return (state, action) => {
        reducer()
    }
}

export default logger