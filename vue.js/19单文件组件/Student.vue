<template>
    <!--组件的结构-->
    <div class="demo">
        <h2>学生姓名:{{ name }}}</h2>
        <h2>学生年龄:{{ age }}</h2>
    </div>
</template>

<script type="text/javascript">
    /*组件交互相关的代码*/
    export default{
        name : 'Student',
        data(){
            return{
                name : 'Linter',
                age : '21'
            }
        },
        methods : {
        
        }
    }
    
    
</script>
