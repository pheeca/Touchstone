function editableTable(array){
    let thead ='';
    let tbody ='';
    if(array.length>0){
        Object.keys(array[0]).forEach(obj=>{
            thead+=`<th>${obj}</th>`;
        });
        array.forEach(obj=>{
            tbody+=`<tr data-info=${JSON.stringify(obj)}>${Object.keys(array[0]).map(e=>`<td ${e!=='UUID'?'contenteditable="true"':''} >${obj[e]}</td>`).reduce((a,b)=>a+b,'')}</tr>`;
        });
    }
    $(`.content`).off('focus,blur','[contenteditable=true]');
    // When you click on item, record into data("initialText") content of this item.
    $('.content').on('focus','[contenteditable=true]',function() {
        $(this).data("initialText", $(this).html());
    })
    // When you leave an item...
    $('.content').on('blur','[contenteditable=true]',function() {
        // ...if content is different...
        if ($(this).data("initialText") !== $(this).html()) {
            // ... do something.
            let key=Object.keys($(this).parent().data('info')).filter((e,i)=>i==$(this).index())[0];
            let info=$(this).parent().data('info');
            info[key]=$(this).text();
            $(this).parent().data('info',info);
            $(this).data("initialText",$(this).html());
        }
    });
    return `<table style="width: 100%;"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table>`;
}