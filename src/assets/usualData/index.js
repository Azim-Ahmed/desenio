export const headers = (userInfo) => {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userInfo,
    }

}