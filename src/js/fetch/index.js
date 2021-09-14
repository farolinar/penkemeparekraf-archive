export async function postData(url = '', data = {}) {
    const formData = new FormData();
    for (let field in data) {
        formData.append(field, data[field]);
    }

    return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        // headers: {
        //     'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
        // },
        body: formData
    })
    // .then(response => console.log(response))
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        // return result;
    })
    .catch(error => {
        console.error('Error:', error);
        // alert(error);
        // return error;
    });
  }