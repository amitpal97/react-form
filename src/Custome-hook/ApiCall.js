import react from "react"

function useApiCall() {

    // function apiCall(apiurl) {

        const data = fetch(apiurl).then(res => res.json()).then(data => data).catch
        console.log(data);

    // }

    return data

}

export default useApiCall

