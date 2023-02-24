import toast from 'react-hot-toast';

export function toJSON(elements,) {
    const downloadLink = document.createElement("a");
    const fileBlob = new Blob([JSON.stringify(elements, null, 2)], {
        type: "application/json",
    });
    downloadLink.href = URL.createObjectURL(fileBlob);
    downloadLink.download = "square-bear-flow.json";
    downloadLink.click();
}
export function WordCount(str) {
    return str.split(" ");
}
//WordCountLength
export function WordCountLength(str) {
    return str.split(" ").length;
}
//SUCCESS ALERT
export const successAlert = message => message && toast.success(message, { duration: 3000 });
// Error Alert
export const errorAlert = error => error && toast.error(error);
//SHOWING ERROR MESSAGE
export const handleErrorMessage = err =>
    err.response && (err.response.data.message || err.response.data.error)
        ? err.response.data.message || err.response.data.error
        : err.message || err.error;