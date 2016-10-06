var number = ((state, action) => {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }
    return state || 0;
});

export default {
    number
}
