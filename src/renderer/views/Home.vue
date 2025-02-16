<template>
    <div class="homeContainer">
        <div class="selectBoxOne">
            APP录制
        </div>
        <div class="selectBoxTwo">
            网页录制
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>

<style scoped lang="scss">
@use "../assets/styles/variables.scss" as vars;
.homeContainer {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/image/home.png');
    background-size: cover; /* 确保背景图像覆盖整个元素 */
    background-position: center; /* 将背景图像在元素中居中 */
    background-repeat: no-repeat; /* 防止背景图像重复 */
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10vw;
    justify-content: space-around;
}
.selectBoxOne,.selectBoxTwo{
    width:15rem;
    height: 15rem;
    background-color: white;
    border-radius: vars.$base-border-radius;
    text-align: center;
}
</style>