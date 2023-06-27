
const createTags = (htmlTags) => {
    let tags = [];
    for (let item of htmlTags) {
        tags.push(document.createElement(item))
    }
    return tags;
}


const expandHtml=(expand,tags)=>{
    for (let item of tags){
        expand.appendChild(item);
    }
}

export{createTags,expandHtml};

