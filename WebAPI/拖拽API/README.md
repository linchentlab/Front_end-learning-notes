# WebAPI

## 拖拽API

https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations

### 开启拖拽

draggable="true"	

### 拖拽事件

```
<script>
    // 拿到被拖拽的元素
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');

    //监听拖拽事件
    div2.addEventListener('dragstsrt', ()=>console.log("开始拖拽"))
    div2.addEventListener('drag', ()=>console.log("拖拽中"))
    div2.addEventListener('dragend', ()=>console.log("拖拽结束"))

    //监听拖拽区域的事件
    div1.addEventListener('dragover', (e)=>{
        console.log("拖拽元素进入目标区域")
    })
    div1.addEventListener('dragover',()=>{
        console.log("拖拽元素在目标区域中移动")
    })
    div1.addEventListener('dragleave',()=>{
        console.log("拖拽元素离开目标区域")
    })
    div1.addEventListener('drop',()=>{
        console.log("拖拽元素在目标区域中释放")
    })
</script>
```

取消dom元素的默认操作 -- *e.preventDefault();*

将dom元素拖拽进入另一dom元素 -- *dropContent.appendChild(dragBox)*

### dataTransfer

https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer/