function crossBrowserFetch() {
    const link = 'https://api1.remontista.ru/tools/all_work_type';

    if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) { //if IE
        return new Promise( (resolve,reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', link, true);
            xhr.send();
            xhr.onload = xhr.onerror = function() {
                if (this.status == 200) {
                     resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(`${xhr.status} :  ${xhr.statusText}`);
                }
              };
        })
    } else {
        return fetch(link).then( res => res.json() )
    } 
}

export default {
    get: crossBrowserFetch
}