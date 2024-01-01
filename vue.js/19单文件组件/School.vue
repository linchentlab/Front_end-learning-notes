<template>
    <!--组件的结构-->
    <div class="demo">
        <h2>学校名称:{{ schoolName }}}</h2>
        <h2>学校地址:{{ adress }}</h2>
    </div>
</template>

<script type="text/javascript">
    /*组件交互相关的代码*/
    export default{
        name : 'School',
        data(){
            return{
                schoolName : '湖南信息学院',
                address : '湖南省长沙市'
            }
        },
        methods : {
        
        }
    }
    
    
</script>

<style lang="scss" scoped>
    /*组件的样式*/
    .demo{
      background-color: brown;
    }
</style>
