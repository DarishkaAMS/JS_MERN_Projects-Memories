export default (posts = [], action) => {
    swtich (action.type) {
        case 'FETCH_ALL':
            return posts;
        case: 'CREATE':
            return posts;
        default:
            return posts;
    }
};