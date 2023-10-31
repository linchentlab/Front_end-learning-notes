function getBookList() {
    axios({
        url : 'http://hmajax.itheima.net/api/books',
        param : {
            creator : '老张'
        }
    }).then(result => {
        console.log(result)
        const bookList = result.data.data
        console.log(bookList)
        const htmlStr = bookList.map((item,index) => {
            return `<tr>
            <td>1</td>
            <td>BookName</td>
            <td>writer</td>
            <td>出版商</td>
            <td>
                <span class="del">删除</span>
                <span class="edit">编辑</span>   
            </td>
            </tr>`
        }).join('')
        console.log(htmlStr)
        
    })
}